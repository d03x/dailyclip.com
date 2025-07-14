import Image from "next/image";
import styles from "./styles/video-content-item.module.css";
import cn from "@/utils/cn";
import {
  Star,
} from "lucide-react";
import { faker } from "@faker-js/faker";
import VideoMeta from "./video-meta";
import Avatar from "@/features/header/components/Avatar";
const VideoContentItem = () => {
  return (
    <div className={cn(styles.content)}>
      <div
        className={cn(
          styles.media,
          "rounded-none bg-surface ring-1 ring-gray-100 w-full  overflow-hidden   aspect-video lg:mb-0 mb-3 lg:rounded-lg"
        )}
      >
        <Image
          className="aspect-video"
          src={faker.image.avatarGitHub()}
          width={1280}
          height={720}
          alt="wkwkw"
        />
      </div>
      <div className={cn(styles.meta, "px-4 mt-4 lg:px-0")}>
        <div className="flex flex-col  gap-2">
          <Avatar image={faker.image.avatar()} />
          <div className="flex items-center">
            <Star strokeOpacity={0} fill="orange" size={11} />
            <Star strokeOpacity={0} fill="orange" size={11} />
            <Star strokeOpacity={0} fill="gray" size={11} />
          </div>
        </div>

        <div className={cn(styles.metadata, "ml-2")}>
          <VideoMeta
            title={faker.word.words(20)}
            uploadDate={`${faker.date.anytime()}`}
            statistic={{
              views: faker.number.int({ max: 1000_000, min: 20 }),
            }}
            channel={{
              handler: "heryprass",
              name: faker.person.fullName(),
              verified: faker.datatype.boolean(),
              subscriber: faker.number.int({ max: 100000, min: 20 }),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoContentItem;
