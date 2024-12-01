import * as trpcExpress from "@trpc/server/adapters/express";
import { DogBreedsRepository } from "../repositories/dog-breeds.repository";

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
  repository: new DogBreedsRepository(),
});

export type Context = Awaited<ReturnType<typeof createContext>>; 