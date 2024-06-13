import { createProject } from "@/components/project";

export default function ProjectsPage() {
  const project = createProject(
    "osail",
    "A local leaderboard for evaluating LLMs.",
  );

  return project;
}
