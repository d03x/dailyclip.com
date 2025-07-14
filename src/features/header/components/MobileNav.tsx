"use client";
import styles from "./styles/mobile-nav.module.css";
import cn from "@/utils/cn";
import { Navbar } from "@/features/navbar";
export default function Header() {
  return (
    <div className={cn(styles.bottom_nav, "shadow-sm bg-white lg:hidden")}>
      <Navbar />
    </div>
  );
}
