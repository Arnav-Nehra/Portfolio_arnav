import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { Github, ExternalLink, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const ProjectDetails = [
  {
    id: 1,
    name: "FormsAI",
    description: "Instantly generate Google forms by just writing a prompt, and view the insights.",
    githublink: "https://github.com/Arnav-Nehra/forms",
    livelink: "https://github.com/Arnav-Nehra/forms",
    tags: ["AI-Powered", "Web App"],
    image: "/formsai-preview.png",
    logo: "/image.png"
  },
  {
    id: 2,
    name: "TaskFlow",
    description: "Streamline your workflow with intelligent task management and team collaboration tools.",
    githublink: "https://github.com/Arnav-Nehra/forms",
    livelink: "https://github.com/Arnav-Nehra/forms",
    tags: ["Productivity", "SaaS"],
    image: "/placeholder.svg?height=300&width=350",
    logo: "/image.png"
  },
  {
    id: 3,
    name: "DataViz Pro",
    description: "Transform complex data into beautiful, interactive visualizations with advanced analytics.",
    githublink: "https://github.com/Arnav-Nehra/forms",
    livelink: "https://github.com/Arnav-Nehra/forms",
    tags: ["Analytics", "Charts"],
    image: "/placeholder.svg?height=300&width=350",
    logo: "/image.png"
  },
]

export function Projects() {
  return (
    <div className="w-full flex flex-col items-start px-2 sm:px-4">
      <h1 className="mt-16 sm:mt-20 font-bold text-2xl sm:text-3xl text-left md:ml-10 lg:ml-20">Projects</h1>
      
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full max-w-[90vw] sm:max-w-sm md:max-w-2xl lg:max-w-4xl mt-10 mb-20 md:mb-40 mx-auto px-2"
      >
        <CarouselContent>
          {ProjectDetails.map((project) => (
            <CarouselItem key={project.id} className="basis-full md:basis-1/2 lg:basis-1/2">
              <div className="relative group bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl transition-all duration-300 hover:scale-[1.02] p-2 border border-gray-200 dark:border-slate-700/50 shadow-lg dark:shadow-xl max-w-[90vw] sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto min-w-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 dark:from-purple-500/5 dark:via-transparent dark:to-pink-500/5 rounded-2xl" />

                <Card className="bg-transparent border-0 shadow-none">
                  <CardContent className="relative p-4">
                   
                    {/* Mobile Layout */}
                    <div className="md:hidden">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-purple-500/20 dark:to-pink-500/20 border border-blue-500/30 dark:border-purple-500/30">
                          <Image
                            src={project.logo || "/placeholder.svg"}
                            width={20}
                            height={20}
                            alt={`${project.name} logo`}
                            className="w-5 h-5 rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
                            {project.name}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        {project.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-blue-500/20 text-blue-700 dark:bg-purple-500/20 dark:text-purple-300 border-blue-500/30 dark:border-purple-500/30 text-xs"
                          >
                            {tag === "AI-Powered" && <Zap className="w-2 h-2 mr-1" />}
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-purple-500/20 dark:to-pink-500/20 border border-blue-500/30 dark:border-purple-500/30">
                        <Image
                          src={project.logo || "/placeholder.svg"}
                          width={20}
                          height={20}
                          alt={`${project.name} logo`}
                          className="w-5 h-5 rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
                          {project.name}
                        </span>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          {project.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-blue-500/20 text-blue-700 dark:bg-purple-500/20 dark:text-purple-300 border-blue-500/30 dark:border-purple-500/30 text-xs"
                            >
                              {tag === "AI-Powered" && <Zap className="w-2 h-2 mr-1" />}
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                  
                    <p className="text-sm sm:text-md text-gray-700 dark:text-slate-300 font-medium mb-6 mt-6 ml-0 sm:ml-4 leading-relaxed text-left">{project.description}</p>

                    <div className="relative mb-6 group/image">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-purple-500/20 dark:to-pink-500/20 rounded-xl blur-lg group-hover/image:blur-xl transition-all duration-300" />
                      <div className="relative bg-gray-100/80 dark:bg-slate-800/30 rounded-xl p-2 border border-gray-200 dark:border-slate-700/50 backdrop-blur-sm">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200/50 dark:bg-slate-900/50">
                          <Image
                            className="object-cover transition-transform duration-300 group-hover/image:scale-105"
                            src={project.image || "/placeholder.svg"}
                            fill
                            alt={`${project.name} preview`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 dark:from-slate-900/20 to-transparent" />
                        </div>
                      </div>
                    </div>

            
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        size="sm"
                        className="cursor-pointer flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-purple-600 dark:to-pink-600 dark:hover:from-purple-700 dark:hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                      >
                        <ExternalLink className="w-3 h-3 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Live
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="cursor-pointer flex-1 border-gray-300 bg-white/80 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-700/50 dark:hover:text-white dark:hover:border-slate-500 transition-all duration-300 group/btn"
                      >
                        <Github className="w-3 h-3 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                        Github
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Desktop Navigation Arrows on Sides */}
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>

        {/* Mobile Navigation Arrows at Bottom */}
        <div className="md:hidden flex justify-center gap-10 mt-6">
          <CarouselPrevious className="relative static translate-y-0 translate-x-0" />
          <CarouselNext className="relative static translate-y-0 translate-x-0" />
        </div>
      </Carousel>
    </div>
  )
}
