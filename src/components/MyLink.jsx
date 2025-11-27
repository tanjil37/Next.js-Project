"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MyLink({ href, className = "", children }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "text-[#28a745] font-bold"
          : `${className} font-semibold`
      }
    >
      {children}
    </Link>
  );
}
