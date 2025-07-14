import type { AppRouter } from "@/server/trpc/routes/_app";
import { createTRPCReact } from "@trpc/react-query";
export const trpc = createTRPCReact<AppRouter>();
