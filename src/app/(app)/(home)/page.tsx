import { FeatureList } from "@/features/homepage";
import Client from "./client";
import { HydrateClient } from "@/trpc/TRPCServer";
import { Suspense } from "react";
export default function Home() {
  return (
    <HydrateClient>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div>
          <div className="mb-4">
            <FeatureList />
          </div>
          <Client />
        </div>
      </Suspense>
    </HydrateClient>
  );
}
