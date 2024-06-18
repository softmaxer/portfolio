"use client";
import Image from "next/image";
import ProfileButton from "./buttons/profile-button";

export interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  image?: string | undefined;
}
export default function ProjectCard({
  name,
  description,
  link,
  image,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      className="flex flex-col items-center bg-white border border-white-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-transparent"
    >
      <Image
        src={image ? image : "/cards/default.png"}
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        width={200}
        height={100}
        alt={name}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </a>
  );
}
