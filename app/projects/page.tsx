import ProjectCard from "@/components/project-card";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-orange-300 text-7xl">My projects</h1>
      </div>
      <div className="flex flex-col">
        <ProjectCard
          name="OSAIL"
          description="A local leaderboard for evaluating LLMs"
          link="https://www.github.com/softmaxer/osail"
          image="/cards/osail.png"
        />
        <ProjectCard
          name="Envy"
          description="A CLI tool to manage your .env files"
          link="https://www.github.com/softmaxer/envy"
          image="/cards/envy.png"
        />
      </div>
    </>
  );
}
