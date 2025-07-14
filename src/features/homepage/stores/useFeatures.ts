import React from "react";
import { create } from "zustand";

type State = {
  isLoading: boolean;
  features: Array<{
    name: string;
    slug: string;
    icon?: React.ReactElement;
  }>;
};
type Action = {
  setLoading: (input: boolean) => void;
};
const useFeatures = create<State & Action>((set) => ({
  setLoading(input) {
    return set({
      isLoading: input,
    });
  },
  isLoading: true,
  features: [
    {
      name: "Untuk Kamu",
      slug: "foryou",
    },
    {
      name: "Finansial",
      slug: "finance",
    },
    {
      name: "My Feed",
      slug: "feed",
    },
    {
      name: "Gaming",
      slug: "gaming",
    },
    {
      name: "Programming",
      slug: "sport",
    },
    {
      name: "Shooping",
      slug: "shoping",
    },
    {
      name: "Viral",
      slug: "viral",
    },
    {
      name: "Vlog",
      slug: "vlog",
    },
    {
      name: "Films",
      slug: "film",
    },
    {
      name: "#trump",
      slug: "hastag/trump",
    },
    {
      name: "#jokowi",
      slug: "hastag/jokowi",
    },
    {
      name: "Music",
      slug: "music",
    },
  ],
}));
export { useFeatures };
