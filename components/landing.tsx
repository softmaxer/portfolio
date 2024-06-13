import { About } from "./buttons/about";
import { Blog } from "./buttons/blog";
import { Projects } from "./buttons/projects";

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-row divide-solid divide-x divide-white">
        <div className="flex flex-col min-h-screen justify-center items-center">
          <About />
          <Blog />
          <Projects />
        </div>
        <div className="text-7xl font-mono">Sriram Vadlamani</div>
      </div>
    </>
  );
}
