import * as React from "react";

const ProjectDetails = [
  {
    id: 1,
    name: "FormsAI",
    description:
      "Instantly generate Google forms by just writing a prompt, and view the insights.",
    githublink: "https://github.com/Arnav-Nehra/forms",
    livelink: "https://github.com/Arnav-Nehra/forms",
  },
  {
    id: 2,
    name: "FormsAI",
    description:
      "Instantly generate Google forms by just writing a prompt, and view the insights.",
    githublink: "https://github.com/Arnav-Nehra/forms",
    livelink: "https://github.com/Arnav-Nehra/forms",
  },
  {
    id: 4,
    name: "FormsAI",
    description:
      "Instantly generate Google forms by just writing a prompt, and view the insights.",
    githublink: "https://github.com/Arnav-Nehra/forms",
    livelink: "https://github.com/Arnav-Nehra/forms",
  },
];
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { FormInputIcon, Github, MousePointerClick } from "lucide-react";
import { Button } from "./ui/button";

export function Projects() {
  return (
    <div>
      <h1 className="mt-20 text-3xl font-semibold ml-96">Projects</h1>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full max-w-4xl ml-96 mt-20 mb-40"
      >
        <CarouselContent>
          {ProjectDetails.map((project) => (
            <CarouselItem
              key={project.id}
              className="md:basis-1/2 lg:basis-1/2"
            >
              <div className="
              bg-gray-50
              dark:bg-gradient-to-b from-[#151515] rounded-2xl to-[#0D0D0D] transition-all duration-200 hover:scale-[1.02] p-2">
                <Card>
                  <CardContent className=" ">
                    <div className="flex items-center gap-4 ml-6">
                      <Image alt="" src={"/file.svg"} className="size-8"width={50} height={50}></Image>
                      <span className="text-2xl font-extrabold bg-gradient-to-r from-[#7B5FFF] via-[#A86DD1] to-[#FF5F6D] bg-clip-text text-transparent flex items-center gap-1">
                        Forms<span className="text-[#FF5F6D]">AI</span>
                      </span>
                      {/* <h1 className="text-3xl ml-2 mt-2 font-semibold">{project.name}</h1> */}
                    </div>
                    <h3 className="text-md text-blacl font-open-sans font-semibold mt-6 ml-8 dark:text-gray-400 ">
                      {project.description}
                    </h3>
                    <Image
                    className="mt-4 ml-4 rounded-2xl" src={"/ss.png"} width={350} height={350} alt=""></Image>
                    <div className="flex gap-4 ml-8 mt-8 ">
                      <Button className="border cursor-pointer font-open-sans hover:bg-gray-200 dark:hover:bg-gray-800">
                        Github
                        <Github></Github>
                      </Button>
                      <Button className="border font-open-sans cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
                        Live
                      <MousePointerClick></MousePointerClick>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
