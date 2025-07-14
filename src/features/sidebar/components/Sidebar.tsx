import cn from "@/utils/cn";
import styles from "./styles/sidebar.module.css";
import { Navbar } from "@/features/navbar";
export default function Sidebar() {
  return (
    <div
      className={cn(
        styles.sidebar,
        "hidden md:flex flex-col px-1.5 py-2 border-r border-border"
      )}
    >
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
}
