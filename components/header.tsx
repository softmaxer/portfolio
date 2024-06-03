import Link from "next/link";
import React from "react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-14 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center justify-end space-x-2">
        <Link href="/about" className="text-black">
          About me
        </Link>
      </div>
    </header>
  );
}
