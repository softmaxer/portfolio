"use client";
import { useTypewriter } from "nextjs-simple-typewriter";
import { Information } from "./main_info";
export default function MainTitle() {
  const [text, helper] = useTypewriter({
    words: ["Sriram Vadlamani"],
    loop: 1,
    typeSpeed: 25,
  });

  const { isDone } = helper;
  let subText = "Helping you build scalable apps.";

  return (
    <>
      <div className="flex flex-col items-center justify-evenly min-h-screen">
        <div className="text text-8xl">{text}</div>

        {isDone ? <div className="text">{subText}</div> : <div></div>}
        {isDone ? (
          <div>
            <Information />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
