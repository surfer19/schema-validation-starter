import { router } from "../trpc/init";
import { breedsRouter } from "./breeds.router";

export const appRouter = router({
  v1: router({
    breeds: breedsRouter,
  }),
});

export type AppRouter = typeof appRouter; 