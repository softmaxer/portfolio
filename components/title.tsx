"use client";
import { useTypewriter } from "nextjs-simple-typewriter";
import { ContactMe } from "./contact-button";
export default function MainTitle() {
  const [text, helper] = useTypewriter({
    words: ["Build scalable apps, your way."],
    loop: 1,
    typeSpeed: 25,
  });

  const { isDone } = helper;
  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen">
      <div className="text-black text-2xl">{text}</div>
      {isDone ? (
        <div>
          <ContactMe />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
