export default function AboutPage() {
  const aboutDesc: String =
    "I'm an AI engineer / software developper from India, currently living in france and I like building apps.";
  return (
    <div className="flex flex-col items-center justify-center min-h-64 space-x-2">
      <h1 className="text-2xl text-black">About me</h1>
      <p className="text-black">{aboutDesc}</p>
    </div>
  );
}
