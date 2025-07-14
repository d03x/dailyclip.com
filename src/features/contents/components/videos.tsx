import { VideoContentItem } from "@/features/video";
import { trpc } from "@/utils/trpc";
import { useEffect } from "react";

const Videos = () => {
  const { data, isLoading } = trpc.video.getRecomendation.useQuery();
  useEffect(() => {
    console.log(data, isLoading);
  }, []);
  return (
    <div className="grid lg:grid-cols-4">
      {Array.from({ length: 10 }).map((item, index) => {
        return (
          <div
            key={index}
            className="lg:p-1.5 mb-5 lg:mb-2 active:bg-gray-100 rounded-lg select-none transition-all duration-150"
          >
            <VideoContentItem />
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
