import Image from "next/image";

export default function AboutPage() {
  const aboutDesc: String =
    "I'm an AI engineer / software developper from India, currently living in france and I like building apps.";
  return (
    <div className="flex flex-col items-center justify-between min-h-64">
      <h1 className="text-3xl ">Who am I?</h1>
      <div className="flex flex-row max-w-screen-sm items-center">
        <Image src={"/dp.png"} alt="profile_photo" height={150} width={150} />
        <p className=" font-semibold">{aboutDesc}</p>
      </div>
    </div>
  );
}
