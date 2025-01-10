import { ethers } from "npm:ethers@^6.13.5";
import { FreshContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  // let body = "ho";
  const bscProvider = new ethers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org/",
    { name: "binance", chainId: 56 },
  );

  const bodypromises = bscProvider
    .getBalance("0x06f04846213cc642015fd01E2c2B5302eCBfE8aB")
    .then((balance) => {
      console.log(balance);
      return balance;
    })
    .catch((error) => {
      console.error(error);
    });

  return new Response(bodypromises);
};
