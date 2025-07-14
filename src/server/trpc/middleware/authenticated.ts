import { AnyMiddlewareFunction, TRPCError } from "@trpc/server";

export const authMiddleware: AnyMiddlewareFunction = ({ ctx, next }) => {
  if (!ctx.token || ctx.token != "dadandev") {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Kamu belum login",
    });
  }
  return next({
    ctx: {
      ...ctx,
      user: ctx.token,
    },
  });
};
