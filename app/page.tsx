import RedirectTo from "@/components/buttons/redirect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-7xl lg:text-left text-center">Sriram Vadlamani</p>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <RedirectTo page="About" destination="/about" />
        <RedirectTo
          page="Hire me"
          destination="mailto:sriram.vadlamani@proton.me"
        />
        <RedirectTo page="Blog" destination="/blog" />
      </div>
    </main>
  );
}
