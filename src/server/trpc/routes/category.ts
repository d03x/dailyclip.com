import z from "zod";
import { baseProcedure, createTRPCRouter } from "../init";

export const categoryRouter = createTRPCRouter({
  featured: baseProcedure
    .input(
      z.object({
        filter: z.string(),
      })
    )
    .query(({ ctx }) => {
      console.log(ctx);

      return {
        categories: [
          {
            name: "Untuk Kamu",
            slug: "foryou",
          },
          {
            name: "Finansial",
            slug: "finance",
          },
          {
            name: "My Feed",
            slug: "feed",
          },
          {
            name: "Gaming",
            slug: "gaming",
          },
          {
            name: "Programming",
            slug: "sport",
          },
          {
            name: "Shooping",
            slug: "shoping",
          },
          {
            name: "Viral",
            slug: "viral",
          },
          {
            name: "Vlog",
            slug: "vlog",
          },
          {
            name: "Films",
            slug: "film",
          },
          {
            name: "#trump",
            slug: "hastag/trump",
          },
          {
            name: "#jokowi",
            slug: "hastag/jokowi",
          },
          {
            name: "Music",
            slug: "music",
          },
        ],
      };
    }),
});
