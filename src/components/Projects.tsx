

import * as React from "react"

const ProjectDetails = [
    {
        id : 1,
        name:"FormsAI",
        description:"Instantly generate Google forms by just writing a prompt, and view the insights.",
        githublink : "https://github.com/Arnav-Nehra/forms",
        livelink : "https://github.com/Arnav-Nehra/forms"
    },
    {
        id : 2,
        name:"FormsAI",
        description:"Instantly generate Google forms by just writing a prompt, and view the insights.",
        githublink : "https://github.com/Arnav-Nehra/forms",
        livelink : "https://github.com/Arnav-Nehra/forms"
    },
    {
        id : 4,
        name:"FormsAI",
        description:"Instantly generate Google forms by just writing a prompt, and view the insights.",
        githublink : "https://github.com/Arnav-Nehra/forms",
        livelink : "https://github.com/Arnav-Nehra/forms"
    }
]
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"

export function Projects() {
  return (
    <div>
    <h1 className="mt-20 text-3xl font-semibold ml-96">Projects</h1>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl ml-96 mt-20 mb-40"
    >
      <CarouselContent>
        {ProjectDetails.map((project) => (
          <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/2  ">
            <div className="bg-gradient-to-b from-[#151515] rounded-2xl `to-[#0D0D0D] transition-all duration-200 hover:scale-[1.02] p-2">
              <Card>
                <CardContent className=" ">
                    <div className="flex items-center gap-4">
                    <Image src="/logo.svg" width={100} height={100} alt="logo"></Image>
                    <h1 className="text-3xl ml-2 mt-2 font-semibold">{project.name}</h1>
                    </div>
                  <h3 className="text-lg font-light text-center mt-6 text-gray-400 ">{project.description}</h3>
                  <div className="flex gap-4">
                  
                  <Link href={project.githublink}>
                  <Image src="/github.svg" className="ml-5 size-8 cursor-pointer rounded-full mt-8" width={50} height={50} alt="github"></Image>
                  </Link>
                  
                  <Link href={project.livelink}>
                  <Image src="/live.svg" className="size-8 cursor-pointer mt-8" width={50} height={50} alt="github"></Image>  
                  </Link>
                
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
  )
}
