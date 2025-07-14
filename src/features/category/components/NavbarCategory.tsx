"use client";
import { NavLink } from "@/features/navbar";
import { api } from "@/trpc";
import cn from "@/utils/cn";
import {
  Music,
  Gamepad2,
  Clapperboard,
  BookOpen,
  Dumbbell,
  Cpu,
  Palette,
  Globe2,
  Newspaper,
  Mic2,
  Headphones,
  Camera,
  GraduationCap,
  CookingPot,
  Film,
  Smile,
  Plane,
  DollarSign,
  Users,
  Tv,
  Plus,
  Minus,
  Dot,
} from "lucide-react";
import { useCallback, useState } from "react";
export const categories = [
  { icon: <Music />, title: "Musik", href: "/category/music" },
  { icon: <Gamepad2 />, title: "Game", href: "/category/gaming" },
  { icon: <Clapperboard />, title: "Film", href: "/category/movies" },
  { icon: <BookOpen />, title: "Edukasi", href: "/category/education" },
  { icon: <Dumbbell />, title: "Olahraga", href: "/category/sports" },
  { icon: <Cpu />, title: "Teknologi", href: "/category/technology" },
  { icon: <Palette />, title: "Seni & Desain", href: "/category/art" },
  { icon: <Globe2 />, title: "Berita Dunia", href: "/category/world-news" },
  { icon: <Newspaper />, title: "Berita Lokal", href: "/category/local-news" },
  { icon: <Mic2 />, title: "Podcast", href: "/category/podcast" },
  { icon: <Headphones />, title: "ASMR", href: "/category/asmr" },
  { icon: <Camera />, title: "Vlog", href: "/category/vlog" },
  { icon: <GraduationCap />, title: "Tutorial", href: "/category/tutorial" },
  { icon: <CookingPot />, title: "Masakan", href: "/category/cooking" },
  { icon: <Film />, title: "Trailer", href: "/category/trailer" },
  { icon: <Smile />, title: "Komedi", href: "/category/comedy" },
  { icon: <Plane />, title: "Travel", href: "/category/travel" },
  { icon: <DollarSign />, title: "Bisnis", href: "/category/business" },
  { icon: <Users />, title: "Lifestyle", href: "/category/lifestyle" },
  { icon: <Tv />, title: "Acara TV", href: "/category/tv-show" },
];
export default function NavbarCategory() {
  const [isMinimize, setIsMinimize] = useState<boolean>(false);
  const toggleVisible = useCallback(() => {
    setIsMinimize(!isMinimize);
  }, [isMinimize]);
  const { data } = api.video.topic.getFeatured.useQuery();
  return (
      <div>
        <div className="flex bg-gradient-to-b py-1.5 justify-between px-2 items-center">
          <span className="text-md font-inter">Topics</span>
          <button onClick={toggleVisible} className="cursor-pointer">
            {isMinimize ? <Plus /> : <Minus />}
          </button>
        </div>

        <div
          className={cn(
            `${isMinimize ? "h-0" : "h-90"}`,
            "scroll-none overflow-hidden transition-all overflow-y-auto"
          )}
        >
          {data &&
            data.map((item, index) => (
              <NavLink
                key={index}
                title={item.name}
                icon={<Dot />}
                href={item.slug}
              />
            ))}
        </div>
      </div>
  );
}
