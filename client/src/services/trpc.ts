import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@api/types/router";

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: import.meta.env.VITE_PUBLIC_TRPC_API || "http://localhost:8000/trpc",
    }),
  ],
});
