import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const aboutDesc: String = `I'm an AI engineer / software developper from India, currently based in Paris and I'm here to accompany you with your next adventure!

  I specialize in integrating generative AI and building SaaS apps. But I can help you build your personal projects too.
  `;
  return (
    <div className="flex flex-col items-center justify-between min-h-64">
      <h1 className="text-3xl ">Who am I?</h1>
      <div className="flex flex-row max-w-screen-sm items-center">
        <Image src={"/dp.png"} alt="profile_photo" height={150} width={150} />
        <p className=" font-semibold">{aboutDesc}</p>

        <Link href={"mailto:sriram.vadlamani@proton.me"}>Email</Link>
      </div>
    </div>
  );
}
