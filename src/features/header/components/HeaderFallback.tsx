import styles from "./styles/header.module.css";
export default function HeaderFallback({ error }: { error: Error }) {
  console.log(error);
  
  return (
    <div className={styles.header}>
      <div className="sticky top-0 flex text-center bg-red-300 h-full justify-center items-center text-sm text-tertiary-100">
        <p>Opps Somenthing wen wrong</p>
      </div>
    </div>
  );
}
