import { initHumbleSDK, getPoolAnnouncer } from "humble-sdk";
import {
  Bright,
  FgBlue,
  FgGreen,
  FgYellow,
  fromArgs,
  getAccountFromArgs,
  iout,
  useReach,
} from "./utils.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
import { runFetchPoolTest } from "./runFetchPoolTest.mjs";
import { runFetchTokenTest } from "./runFetchTokenTest.mjs";
import { runAnnouncerTest } from "./runAnnouncerTest.mjs";
import { runSwapTest } from "./runSwapTest.mjs";
import { runLiquidity } from "./runLiquidity.mjs";

const reach = useReach();

// TEST NOTES
// POOL=76796988 ALGO / GAR on TestNet

// init SDK
/**
 * Default options are:
 * {
 *  connector: "ALGO",
 *  network: "TestNet",
 * }
 */
initHumbleSDK();

(async () => {
  console.log(Bright(FgBlue(`ANNOUNCER: ${getPoolAnnouncer()}`)));
  console.log(Bright(FgYellow(`Creating account ...`)));
  const args = process.argv.slice(2);
  const acc = await getAccountFromArgs(args);
  console.log(Bright(FgGreen(`Connected ${reach.formatAddress(acc)}`)));

  /* "Swap" requires a list of commands to be present */
  const swapArgs = getSwapArgs(args);
  const [poolAddress, n2nn] = [
    fromArgs(args, "POOL"),
    Boolean(fromArgs(args, "N2NN")),
  ];

  /* Check for LIQUIDITY (deposit/withdraw) flags in cli args */
  const [tokenIn, amountIn, tokenOut] = swapArgs;
  const liquidityArgs = [...swapArgs, fromArgs(args, "ACTION")];
  if (liquidityArgs.every(Boolean)) {
    const action = liquidityArgs[liquidityArgs.length - 1];
    const lqOpts = { action, amountIn, poolAddress, tokenIn, tokenOut };
    return runLiquidity(acc, lqOpts);
  }

  /* Check for SWAP flags */
  if (swapArgs.every(Boolean))
    return runSwapTest(acc, [...swapArgs, poolAddress]);

  /* Check for TOKEN flag in cli args */
  const tokenId = fromArgs(args, "TOKEN");
  if (tokenId) return runFetchTokenTest(acc, tokenId);

  /* Check for POOL flag in cli args */
  if (poolAddress) return runFetchPoolTest(acc, [poolAddress, n2nn]);

  /* Default to listing pools */
  return runAnnouncerTest(acc);
})();

/** Checks for SWAP flags */
function getSwapArgs(args) {
  return [
    fromArgs(args, "TOKA"),
    fromArgs(args, "AMTA"),
    fromArgs(args, "TOKB"),
  ];
}
