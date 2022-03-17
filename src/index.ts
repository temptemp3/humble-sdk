import { loadStdlib } from "@reach-sh/stdlib";
import { ChainSymbol, loadReach, SDKOpts } from "./reach-helpers";
import { setPoolAnnouncer, setSlippage } from "./constants";
import dotenv from "dotenv";

dotenv.config({ path: "./../.env" });

let initialized = false;

export function initHumbleSDK(opts: SDKOpts = {}) {
  if (initialized) return;

  const { network, providerEnv } = opts;
  loadReach(loadStdlib, { provider: network, providerEnv });
  setSDKOpts(opts);
}

/** INTERNAL Set SDK options for operation */
function setSDKOpts(opts: SDKOpts) {
  // Announcer for listing pools (default: HumbleSwap testnet announcer)
  setPoolAnnouncer(getAnnouncerForEnv(opts));
  // User slippage tolerance
  setSlippage(opts.slippageTolerance || 0.5);
  initialized = true;
}

type Provider = "TestNet" | "MainNet";

function getAnnouncerForEnv(opts: SDKOpts) {
  const { network = "TestNet" } = opts; // Get reach ready for global SDK use
  const ANNOUNCERS: Record<Provider, any> = {
    TestNet: process.env.ANNOUNCER_TESTNET,
    MainNet: process.env.ANNOUNCER_MAINNET,
  };
  return ANNOUNCERS[validateNetwork(network)];
}

function validateNetwork(val: string | ChainSymbol): Provider {
  const valid = ["TestNet", "MainNet"].includes(val) ? val : "TestNet";
  return valid as Provider;
}

// CONSTANTS
export { getSlippage, setSlippage, getPoolAnnouncer } from "./constants";

// LIQUIDITY PROVIDER
export { addLiquidity, withdrawLiquidity } from "./api/liquidityProvider";

// POOL + TOKEN DATA
export {
  subscribeToPoolStream,
  fetchPool,
  fetchToken,
} from "./participants/PoolAnnouncer";

// SWAP
export { performSwap } from "./api/trader";
export {
  calculatePairOpposite,
  calculatePriceImpact,
  calculateTokenSwap,
} from "./utils.swap";

// REACH HELPERS
export { createReachAPI } from "./reach-helpers";
