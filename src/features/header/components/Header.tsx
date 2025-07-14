"use client";
import { Logo } from "@/features/logo";
import styles from "./styles/header.module.css";
import cn from "@/utils/cn";
import { Twirl as Hamburger } from "hamburger-react";
import { useUiStore } from "@/stores/useUiStore";
import { LogIn, SearchIcon } from "lucide-react";
import { Search } from "@/features/search";
export default function Header() {
  const openSidebarToggle = useUiStore((state) => state.openSidebarToggle);
  return (
    <div
      className={cn(
        styles.header,
        "lg:border-b lg:shadow-none shadow-2xs z-50 border-border px-2 md:px-6 flex items-center"
      )}
    >
      <div className={"flex items-center h-full gap-2"}>
        <div className="aspect-square">
          <Hamburger onToggle={openSidebarToggle} size={24} />
        </div>
        <div className="lg:block hidden">
          <Logo />
        </div>
      </div>
      <div className="lg:inline hidden flex-1">
        <Search />
      </div>
      <div className="lg:hidden flex-1 flex items-center justify-start h-full mx-auto">
        <Logo />
      </div>
      <div className="ml-auto lg:inline flex items-center gap-2">
        <button className="bg-border text-secondary cursor-pointer focus-within:scale-100 lg:active:scale-100 active:scale-90  flex items-center justify-center lg:hidden  aspect-square w-9 lg:w-auto lg:aspect-auto lg:px-6  lg:py-1.5 lg:text-sm rounded-full text-xs font-bold">
          <SearchIcon className="lg:hidden inline" size={16} />
        </button>
        <button className="bg-primary text-white cursor-pointer focus-within:scale-100 lg:active:scale-100 active:scale-90  flex items-center justify-center  aspect-square w-9 lg:w-auto lg:aspect-auto lg:px-6  lg:py-2 lg:text-sm rounded-full text-xs font-bold">
          <LogIn className="lg:hidden inline" size={16} />
          <span className="hidden lg:inline">Sig In</span>
        </button>
      </div>
    </div>
  );
}
