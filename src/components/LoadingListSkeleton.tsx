export default function LoadingListSkeleton({
  length = 10,
}: {
  length?: number;
}) {
  return Array.from({ length }).map((i, index) => {
    return (
      <div
        className="py-3 flex-1 focus-within:ring-2 focus-within:ring-gray-200 lg:px-3 focus-within:bg-gray-300  hover:bg-gray-200 whitespace-nowrap active:bg-black active:text-white transition-all text-sm cursor-pointer  px-6 rounded-full flex items-center justify-center bg-gray-100"
        key={index}
      ></div>
    );
  });
}
