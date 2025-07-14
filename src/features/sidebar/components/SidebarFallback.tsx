import { Info } from "lucide-react";
import styles from "./styles/sidebar.module.css";
export default function SidebarFallback({ error }: { error: Error }) {
  console.log(error);
  
  return (
    <div className={styles.sidebar}>
      <div className="sticky top-0 flex h-fit justify-center p-4 text-sm text-tertiary-100">
        <p className="flex items-start gap-2"><Info/><span>Opps Somenthing wen wrong</span></p>
      </div>
    </div>
  );
}
