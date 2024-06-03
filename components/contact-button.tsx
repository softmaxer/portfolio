import Link from "next/link";

export function ContactMe() {
  return (
    <Link
      href={"/about"}
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    >
      Get started
    </Link>
  );
}
