import {
  createReachAPI,
  getNetworkProvider,
  parseAddress
} from "@reach-sh/humble-sdk";
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import {
  announcerBackend,
  farmAnnouncerBackend,
  limitOrderAnnouncer
} from "../lib/build/backend.js";
import {
  Blue,
  Green,
  Red,
  Yellow,
  answerOrDie,
  exitWithMsgs,
  promptIsFunded
} from "./utils.mjs";

const showTitle = (t) => {
  console.clear();
  Blue(`📄 ${t} on ${getNetworkProvider()}`);
};

/** Create Partner or Public `Farm` announcer */
export async function createFarmAnnouncer(acc) {
  showTitle("Creating FARM ANNOUNCER");
  await promptIsFunded();
  await createAnnouncer(acc, farmAnnouncerBackend);
}

/** Create `LimitOrder` announcer */
export async function createLOAnnouncer(acc) {
  showTitle("Creating LIMIT-ORDER ANNOUNCER");
  await promptIsFunded();
  await createAnnouncer(acc, limitOrderAnnouncer, "D");
}

/** Create `Pool` announcer (Triumvirate) contract */
export async function createTriumvirate(acc) {
  if (!acc) throw new Error("No account supplied!");
  showTitle("Creating POOL ANNOUNCER (Triumvirate)");
  await promptIsFunded();

  const ctc = acc.contract(announcerBackend);
  const { appId, triumAddr } = await new Promise((resolve) =>
    ctc.participants
      .Admin({
        triumvirs: [
          "BJDDWO6U6XBVRRRDANSJIMBWH6H3DOQ2X4NPEAUJZDRPM4FDNNBM3L75D4", // THE BIG JD
          "2Z3B5LV5RD7EBUVQ2ZJRNSJJVWODVCITIW5AAV2DCDGE3JORY75G7IFZRA", // IFZRA
          "3MVC26UC633QBSP4W7R6PS2OAE7W4NLYR4ULJA7SPSZRNCGETXQE4YIM3Q" // INTEREST BROTHER
        ],
        async ready() {
          const { formatAddress } = createReachAPI();
          const triumAddr = formatAddress(await ctc.getContractAddress());
          const appId = parseAddress(await ctc.getInfo());
          resolve({ triumAddr, appId });
        }
      })
      .catch(() => ({ triumAddr: null, appId: null }))
  );

  Green("===========================================================");
  Blue(`Created new Protocol Contract`);
  Green(`\t* Announcer: \x1b[34m${appId}\x1b[0m`);
  Green(`\t* Address:   \x1b[34m${triumAddr}\x1b[0m`);
  Green("===========================================================");

  return rerunOrExit({
    prompt: "Create another Triumvirate Contract?",
    do: () => createTriumvirate(acc)
  });
}

/**
 * Create generic `Announcer` application. Core uses the same underlying
 * structure for HumbleSwap announcers, so the interface is the same.
 */
async function createAnnouncer(acc, bin, participant = "Deployer") {
  Yellow("Creating announcer ...");
  const ctc = acc.contract(bin);
  const Deployer = ctc.participants[participant];
  const ctcInfo = await new Promise((resolve) =>
    Deployer({ ready: () => resolve(ctc.getInfo()) }).catch(() => null)
  );

  if (ctcInfo === null) exitWithMsgs("Contract deployment failed");
  Green(`Announcer deployed at '${parseAddress(ctcInfo)}'`);
  console.log();

  rerunOrExit({
    prompt: "Create another announcer?",
    do: () => createAnnouncer(acc, bin, participant)
  });
}

/** Helper: recurse last function or exit */
async function rerunOrExit(opts) {
  if ((await answerOrDie(opts.prompt)) === "y") return opts.do();
  return exitWithMsgs("Complete: exiting ... ");
}
