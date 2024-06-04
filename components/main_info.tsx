import { About } from "./buttons/about";
import { Blog } from "./buttons/blog";
import { ContactMe } from "./buttons/contact-button";
import { Projects } from "./buttons/projects";

export function Information() {
  return (
    <div className="divide-x divide-solid flex flex-row justify-between">
      <About />
      <ContactMe />
      <Projects />
      <Blog />
    </div>
  );
}
