import { FreshContext } from "$fresh/server.ts";
import { ethers } from "ethers";
import { logger } from "@/tools/logger.ts";

// curl http://localhost:8000/api/balance?wallet=0x06f04846213cc642015fd01E2c2B5302eCBfE8aB
export const handler = async (_req: Request, _ctx: FreshContext): Response => {
  if (_req.method === "GET") {
    const url = new URL(_req.url);
    // console.log(url.searchParams.get("wallet"));
    const wallet_addr = url.searchParams.get("wallet")!;
    logger.debug("debug!!");
    logger.info("info!!");
    logger.warn("warn!!");
    logger.error("error!!");
    logger.fatal("fatal!!");

    const bscProvider = new ethers.JsonRpcProvider(
      "https://bsc-dataseed.binance.org/",
      { name: "binance", chainId: 56 },
    );

    const body = await bscProvider
      .getBalance(wallet_addr)
      .then((balance) => {
        return balance;
      })
      .catch((error) => {
        console.error(error);
      });

    return new Response(
      JSON.stringify({
        message: body?.toString(),
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};
