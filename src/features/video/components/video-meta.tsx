import { DateFormated, VerifiedBadge } from "@/components";
import { shortNumberHumanityFormat } from "@/utils";
import { MoreVertical} from "lucide-react";
import ViewsFormatedCount from "./view-counter-formated";
import Link from "next/link";

type UploaderType = {
  name: string;
  handler?: string;
  verified?: boolean;
  subscriber?:number
};
type Statistic = {
  views: number;
};
type VideoMetaType = {
  title: string;
  channel?: UploaderType;
  uploadDate: string;
  statistic: Statistic;
};
const VideoMeta = ({
  title,
  statistic,
  channel,
  uploadDate,
}: VideoMetaType) => {
  return (
    <>
      <p 
      className="line-clamp-2 capitalize text-sm">{title}</p>
      <div className="flex">
        <div className="flex-1">
          <div className="text-gray-500 mt-1">
            <div className="flex mb-0 lg:mb-1 items-center space-x-1">
              <Link
                data-tooltip-place="right"
                data-tooltip-content={`${shortNumberHumanityFormat(channel?.subscriber as number)} Subscriber`}
                href={channel?.handler || ""}
                className="text-sm lg:font-normal font-bold with-tooltip"
              >
                {channel?.name}
              </Link>

              {channel?.verified && <VerifiedBadge size={14} />}
            </div>
            <div className="flex text-xs items-center gap-1">
              <ViewsFormatedCount views={statistic.views} />
              &bull;
              <DateFormated date={uploadDate} />
            </div>
          </div>
        </div>
        <button>
          <MoreVertical size={20} />
        </button>
      </div>
    </>
  );
};

export default VideoMeta;
