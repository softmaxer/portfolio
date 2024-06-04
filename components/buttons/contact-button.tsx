import Link from "next/link";

export function ContactMe() {
  return (
    <>
      <Link href={"/contact"} className="font-semibold py-2 px-4">
        Contact
      </Link>
    </>
  );
}
