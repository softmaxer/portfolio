"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

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
    <div className="flex flex-col justify-evenly items-center hover:scale-125 translate-y-1 transition-all group">
      <a
        href={link}
        className="flex flex-col items-center  rounded-lg    dark:bg-transparent"
      >
        <Image
          src={image ? image : "/cards/default.png"}
          className="object-cover  rounded-lg h-96 md:h-auto md:w-32 "
          width={200}
          height={100}
          alt={name}
        />
      </a>
      <div className="hidden group-hover:block bg-transparent rounded-lg w-32">
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}
