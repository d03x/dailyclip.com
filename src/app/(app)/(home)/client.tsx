"use client";
import { Videos } from "@/features/contents";
import { Section } from "@/features/homepage";
export default function Client() {
  return (
    <div>
      <Section name="For You">
        <Videos />
      </Section>
      <Section name="Reels">
        <Videos />
      </Section>
    </div>
  );
}
