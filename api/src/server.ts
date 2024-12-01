import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext } from "./trpc/context";
import { appRouter } from "./routers/root.router";

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// Request logger middleware
app.use((req, _res, next) => {
  console.log("⬅️ ", req.method, req.path, req.body ?? req.query);
  next();
});

// tRPC middleware
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

// Health check endpoint
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
