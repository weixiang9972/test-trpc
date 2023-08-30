/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import * as trpcNext from "@trpc/server/adapters/next";
import { createContext } from "~/server/context";
import { t } from "~/server/trpc";

// export API handler
const router = t.router({
  hello: t.procedure.query(() => {
    return {
      a: "b",
    };
  }),
});
export type AppRouter = typeof router;

export default trpcNext.createNextApiHandler({
  router: router,
  createContext,
});
