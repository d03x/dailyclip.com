import { PrismaClient } from "@/generated/prisma";
import { withOptimize } from "@prisma/extension-optimize";

const db = new PrismaClient().$extends(
  withOptimize({
    apiKey: process.env.OPTIMIZE_API_KEY as string,
  })
);

export default db;
