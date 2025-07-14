import { createTRPCRouter } from "@/server/trpc/init";
import { categoryRouter } from "./category";
import { videoRoute } from "./video";
export const appRouter = createTRPCRouter({
  category: categoryRouter,
  video: videoRoute,
});
export type AppRouter = typeof appRouter;
