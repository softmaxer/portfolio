import Link from "next/link";

export function About() {
  return (
    <>
      <Link href={"/about"} className="font-semibold py-2 px-4">
        About me
      </Link>
    </>
  );
}
