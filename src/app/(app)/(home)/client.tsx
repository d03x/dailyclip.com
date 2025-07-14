"use client";

import { FeatureList } from "@/features/homepage";
import { Videos } from "@/features/contents";
import Link from "next/link";

export default function Client() {
  return (
    <div>
      <FeatureList />
      <div className="mt-4">
        <section className="px-0 lg:px-4" id={"#foryou"}>
          <div className="flex px-2 mb-3 lg:px-3">
            <div className="flex-1">
              <span className="text-lg  font-bold">For You</span>
            </div>
            <Link
              className="text-xs bg-secondary flex items-center px-3 hover:bg-primary hover:text-white rounded-2xl justify-center "
              href={"All"}
            >
              Lihat Semua
            </Link>
          </div>
          <Videos />
        </section>
        <section className="px-0 lg:px-4" id={"#foryou"}>
          <div className="flex px-2 mb-3 lg:px-3">
            <div className="flex-1">
              <span className="text-lg  font-bold">Reels</span>
            </div>
            <Link
              className="text-xs bg-secondary flex items-center px-3 hover:bg-primary hover:text-white rounded-2xl justify-center "
              href={"All"}
            >
              Lihat Semua
            </Link>
          </div>
          <Videos />
        </section>
      </div>
    </div>
  );
}
