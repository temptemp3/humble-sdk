import { fetchLiquidityPool } from "@reach-sh/humble-sdk";
import { yesno } from "@reach-sh/stdlib/ask.mjs";
import {
  iout,
  exitWithMsgs,
  Blue,
  Yellow,
  onProgress,
  answerOrDie,
  fromArgs,
} from "./utils.mjs";

/** Fetch a single pool */
export async function runFetchPoolTest(acc) {
  console.clear();
  Blue(`Running LIQUIDITY-POOL-FETCH`);
  const addr =
    fromArgs(process.argv.slice(2), "POOL") ||
    (await answerOrDie("Enter pool address:"));

  const isNetworkPrompt = "Does the pool contain ALGO or ETH? (y/n)";
  const n2nn = await answerOrDie(isNetworkPrompt, yesno);

  Yellow(`Fetching single pool "${addr}"...`);
  iout(
    "Fetched pool",
    await fetchLiquidityPool(acc, {
      includeTokens: true,
      poolAddress: addr,
      onProgress,
      n2nn,
    })
  );
  exitWithMsgs("Test complete! Exiting ...");
}
