import { initTRPC } from "@trpc/server";
import { cache } from "react";
import { authMiddleware } from "./middleware/authenticated";
export type TRPCContext = {
  userId?: string;
  token?: string;
};
export const createTRPCContext = cache(
  async ({ req }: { req: Request }): Promise<TRPCContext> => {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");
    console.log(token);

    return { userId: "user_123", token: token as string };
  }
);
export const createTRPCContextRSC = cache(async (): Promise<TRPCContext> => {
  return {};
});

const t = initTRPC.context<TRPCContext>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      message:
        process.env.NODE_ENV === "production"
          ? "Terjadi kesalahan. Silakan coba lagi."
          : shape.message,
      code: error.code,
      // Hapus stack trace dan cause
    };
  },
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const protectedProcedure = baseProcedure.use(authMiddleware);
