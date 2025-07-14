import cn from "@/utils/cn";
import navLink from "./styles/nav-link.module.css";
import Link from "next/link";
import { useUiStore } from "@/stores/useUiStore";
import React from "react";

export default function NavLink({
  icon,
  title,
  href,
}: {
  icon: React.ReactElement;
  title: string;
  href?: string;
}) {
  const isSidebarOpen = useUiStore((state) => state.isSidebarOpen);

  return (
    <Link
      data-tooltip-content={title}
      data-tooltip-hidden={!isSidebarOpen}
      data-tooltip-place="right"
      prefetch={true}
      className={cn(
        navLink.nav_link,
        isSidebarOpen && navLink.isOpen,
        "with-tooltip"
      )}
      href={href as string}
    >
      <div className={cn(navLink.icon)}>{icon}</div>
      <span>{title}</span>
    </Link>
  );
}
