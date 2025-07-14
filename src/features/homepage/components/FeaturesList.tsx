import Link from "next/link";
import LoadingListSkeleton from "@/components/LoadingListSkeleton";
import useFeaturedCategory from "../hooks/useFeaturedCategory";
import { AlertCircle } from "lucide-react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const FeaturesList = () => {
  const { error, data, isLoading } = useFeaturedCategory();
  useEffect(() => {
    toast.success("Oke");
  }, [isLoading]);
  if (error) {
    return (
      <div className="flex items-start gap-3 bg-red-100 text-red-800  border-red-300  p-4">
        <AlertCircle className="w-5 h-5 mt-0.5 text-red-600" />
        <div className="flex-1 text-sm font-medium">{error.message}</div>
      </div>
    );
  }
  return (
    <div className="flex py-2 items-center shrink-0 overflow-x-auto scroll-none px-2 lg:mx-2 gap-3">
      {isLoading ? (
        <LoadingListSkeleton />
      ) : (
        data?.categories.map((e, index) => {
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
      )}
    </div>
  );
};

export default FeaturesList;
