import { AppRouter } from "@/server/trpc/routes/_app";
import { createTRPCReact } from "@trpc/react-query";

export const api = createTRPCReact<AppRouter>();

export * from "./TRPCProvider";
