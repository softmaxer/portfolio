"use client";

import RedirectTo from "./buttons/redirect";

export default function Sidebar() {
  return (
    <>
      <div className="text-white flex flex-row fixed transition-all justify-center items-center">
        <RedirectTo page="Home" destination="/" />
        <RedirectTo page="My story" destination="/about" />
        <RedirectTo page="Projects" destination="/projects" />
      </div>
    </>
  );
}
