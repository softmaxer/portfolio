import Link from "next/link";
import React from "react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-14 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center justify-end space-x-10">
        <Link href={"/"}>
          <svg
            class="h-8 w-8 text-slate-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <polyline points="5 12 3 12 12 3 21 12 19 12" />{" "}
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />{" "}
            <rect x="10" y="12" width="4" height="4" />
          </svg>
        </Link>
        <Link href="/about" className="text-black">
          About
        </Link>
      </div>
    </header>
  );
}
