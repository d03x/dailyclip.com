import Link from "next/link";
import { ReactNode } from "react";

export const Section = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  return (
    <section className="px-0 lg:px-4" id={"#foryou"}>
      <div className="flex px-2 mb-3 lg:px-3">
        <div className="flex-1">
          <span className="text-lg  font-bold">{name}</span>
        </div>
        <Link
          className="text-xs bg-secondary flex items-center px-3 hover:bg-primary hover:text-white rounded-2xl justify-center "
          href={"All"}
        >
          Lihat Semua
        </Link>
      </div>
      {children}
    </section>
  );
};
