import Link from "next/link";

export function Blog() {
  return (
    <>
      <Link href={"/blog"} className="font-semibold py-2 px-4">
        Blog
      </Link>
    </>
  );
}
