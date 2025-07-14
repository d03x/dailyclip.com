import { baseProcedure, createTRPCRouter } from "@/server/trpc/init";
import topic from "./topics";

export const videoRoute = createTRPCRouter({
  topic: topic,
  getRecomendation: baseProcedure.query(() => {
    return {
      all: [{}],
    };
  }),
});
