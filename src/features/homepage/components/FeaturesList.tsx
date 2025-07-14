"use server"
import Link from "next/link";
import { trpc } from "@/trpc/TRPCServer";

const FeaturesList = async () => {
  const featured = await trpc.category.featured({filter:"DADAN"})
  return (
    <div className="flex py-2 items-center shrink-0 overflow-x-auto scroll-none px-2 lg:mx-2 gap-3">
      {
        featured?.categories.map((e, index) => {
          return (
            <Link
              href={`?featured=${e.slug}`}
              className="px-3 flex-1 font-lato focus-within:ring-2 focus-within:ring-gray-200 lg:px-3 focus-within:bg-gray-300  hover:bg-gray-200 whitespace-nowrap active:bg-black active:text-white transition-all text-sm cursor-pointer py-1 p-1.5 rounded-full flex items-center justify-center bg-gray-100"
              key={index}
            >
              {e.name}
            </Link>
          );
        })
      }
    </div>
  );
};

export default FeaturesList;
