"use client";

import RedirectTo from "./buttons/redirect";

export default function Sidebar() {
  return (
    <>
      <div className="flex">
        <div className="bg-gray-800">
          <div className="text-white flex flex-col fixed min-h-screen transition-all justify-center items-center">
            <RedirectTo page="About" destination="/about" />
            <RedirectTo
              page="Contact"
              destination="mailto:sriram.vadlamani@proton.me"
            />
            <RedirectTo page="Blog" destination="/blog" />
          </div>
        </div>
      </div>
    </>
  );
}