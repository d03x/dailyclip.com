"use server"
import { HydrateClient, trpc } from "@/trpc/TRPCServer";
import { Suspense } from "react";

export default async function Watch() {
  const data = await trpc.video.topic.getFeatured();
  return (
    <HydrateClient>
      <Suspense fallback={<h1>LOading...</h1>}>{JSON.stringify(data)}</Suspense>
    </HydrateClient>
  );
}
