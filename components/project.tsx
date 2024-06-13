import Link from "next/link";
import { ReactNode } from "react";

export function createProject(name: string, description: string): ReactNode {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>{name}</h1>
      <h3>{description}</h3>
      <Link href={"https://www.github.com/softmaxer/" + name}>Github</Link>
    </div>
  );
}
