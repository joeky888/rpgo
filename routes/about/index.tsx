import { ethers } from "npm:ethers@^6.13.5";
import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    // const resp = await ctx.render();
    // resp.headers.set("X-Custom-Header", "Hello");

    const bscProvider = new ethers.JsonRpcProvider(
      "https://bsc-dataseed.binance.org/",
      { name: "binance", chainId: 56 },
    );

    const body = await bscProvider
      .getBalance("0x06f04846213cc642015fd01E2c2B5302eCBfE8aB")
      .then((balance) => {
        console.log(balance);
        return balance;
      })
      .catch((error) => {
        console.error(error);
      });

    // const uuid = crypto.randomUUID();
    return new Response(JSON.stringify(body.toString()), {
      headers: { "Content-Type": "application/json" },
    });
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}

// export const handler = (_req: Request, _ctx: FreshContext): Response => {
//   // let body = "ho";
//   const bscProvider = new ethers.JsonRpcProvider(
//     "https://bsc-dataseed.binance.org/",
//     { name: "binance", chainId: 56 },
//   );

//   const bodypromises = bscProvider
//     .getBalance("0x06f04846213cc642015fd01E2c2B5302eCBfE8aB")
//     .then((balance) => {
//       console.log(balance);
//       return balance;
//     })
//     .catch((error) => {
//       console.error(error);
//     });

//   return new Response(bodypromises);
// };
