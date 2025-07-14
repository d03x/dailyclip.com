"use client";
import { ReactNode } from "react";
import "./styles/layout.css";
import { Sidebar, SidebarFallback } from "@/features/sidebar";
import { Header, HeaderFallback, MobileNav } from "@/features/header";
import ErrorBoundaryProvider from "@/provider/ErrorBoundary";
import { useUiStore } from "@/stores/useUiStore";
import cn from "@/utils/cn";
type LayoutProps = {
  children: ReactNode;
};
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'
export default function Layout({ children }: LayoutProps) {
  const openSidebarToggle = useUiStore((state) => state.isSidebarOpen);

  return (
    <div className={cn("layout", openSidebarToggle && "is-sidebar-open")}>
      <ErrorBoundaryProvider fallback={HeaderFallback}>
        <Header />
      </ErrorBoundaryProvider>
      <ErrorBoundaryProvider fallback={HeaderFallback}>
        <MobileNav />
      </ErrorBoundaryProvider>
      <ErrorBoundaryProvider fallback={SidebarFallback}>
        <Sidebar />
      </ErrorBoundaryProvider>
      <ErrorBoundaryProvider>
        <main className="main">{children}</main>
      </ErrorBoundaryProvider>

      <Tooltip className="custom-tooltip" anchorSelect=".with-tooltip"  place="top">
        DADAN
      </Tooltip>
    </div>
  );
}
