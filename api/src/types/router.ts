import { inferRouterOutputs, inferRouterInputs } from "@trpc/server";
import type { AppRouter } from "../routers/root.router";

export type { AppRouter };
export type RouterOutputs = inferRouterOutputs<AppRouter>;
export type RouterInputs = inferRouterInputs<AppRouter>;
