import ProjectCard from "@/components/project-card";

export default function Projects() {
  return (
    <div className="flex flex-col justify-between items-center gap-20">
      <h1 className="text-orange-300 text-7xl">My projects</h1>
      <div className="flex flex-row justify-between items-center gap-4">
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
        <ProjectCard
          name="Home Credit Default Risk"
          description="An MLOps gig to predict if a client can pay their loan back."
          link="https://github.com/softmaxer/openclassrooms-ds-p7"
          image="/cards/home-credit.jpg"
        />
        <ProjectCard
          name="Fruits 360"
          description="Deploying an image feature extraction model on AWS with PySpark"
          link="https://github.com/softmaxer/fruits-360-cloud"
          image="/cards/fruits.png"
        />
        <ProjectCard
          name="Portfolio"
          description="This website!"
          link="https://www.softmaxer.github.io"
          image="/icons/profile_pic.png"
        />
      </div>
    </div>
  );
}
