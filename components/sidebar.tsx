"use client";

import RedirectTo from "./buttons/redirect";

export default function Sidebar() {
  return (
    <>
      <div className="text-white flex flex-row fixed  transition-all justify-center items-center">
        <RedirectTo page="Home" destination="/" />
        <RedirectTo page="About" destination="/about" />
        <RedirectTo
          page="Contact"
          destination="mailto:sriram.vadlamani@proton.me"
        />
        <RedirectTo page="Blog" destination="/blog" />
      </div>
    </>
  );
}
