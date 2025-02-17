"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  // PlayIcon,
  HeadphonesIcon,
  LineChartIcon,
  UsersIcon,
  CpuIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  // Mic,
  // MessageSquare,
} from "lucide-react";
import { VoiceAgentModal } from "./voice-agent-modal";
import { motion } from "framer-motion";

export function Features(
//   {
//   isChatBotOpen,
//   setIsChatBotOpen,
// }: {
//   isChatBotOpen: boolean;
//   setIsChatBotOpen: (isOpen: boolean) => void;
// }
) {
  const [activeVideo, setActiveVideo] = useState(0);
  const [expandedCapability, setExpandedCapability] = useState<number | null>(
    null
  );
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  const capabilities = [
    {
      icon: HeadphonesIcon,
      title: "Customer Interaction",
      items: [
        "Handle support calls 24/7",
        "Process customer inquiries",
        "Manage email communications",
      ],
    },
    {
      icon: LineChartIcon,
      title: "Business Operations",
      items: [
        "Automate workflow processes",
        "Generate reports automatically",
        "Monitor KPIs in real-time",
      ],
    },
    {
      icon: UsersIcon,
      title: "Team Support",
      items: [
        "Facilitate team collaboration",
        "Automate task assignments",
        "Track project progress",
      ],
    },
    {
      icon: CpuIcon,
      title: "Technical Tasks",
      items: [
        "Handle data processing",
        "Manage system integrations",
        "Automate technical workflows",
      ],
    },
  ];

  const videoShowcase = [
    {
      title: "Business Process Automation",
      description: "Automate complete processes using intelligent AI agents.",
      videoUrl: "/videos/features-ai-agents.mp4",
    },
    {
      title: "Vision Based Automation",
      description:
        "Transform manual inspections into automated, real-time visual insights.",
      videoUrl: "/videos/features-advanced-computer-vision.mp4",
    },
    {
      title: "AI Assistants",
      description:
        "Make your employees 10X more productive with intelligent AI assistants.",
      videoUrl: "/videos/features-ai-assistants.mp4",
    },
    {
      title: "Voice AI",
      description:
        "Automate voice based processes such as phone calls with an AI voice agent.",
      videoUrl: "/videos/features-voice-and-video-ai.mp4",
    },
    {
      title: "AI Powered Search",
      description: "Search your data using natural language.",
      videoUrl: "/videos/features-ai-search.mp4",
    },
  ];

  return (
    <section className="py-20 bg-accent/50" id="features">
      <div className="container px-4">
        {/* Video Showcase Section */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 100 }} // Starts below the screen with zero opacity
            whileInView={{
              opacity: 1, // Fade in
              y: 0, // Slide to its natural position
            }}
            transition={{
              duration: 1, // Adjust the duration for the slide effect
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mb-6"
          >
            Lumio Use Cases
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <Card className="w-auto max-w-[960px] mx-auto overflow-hidden">
            {/* Video Selection Buttons */}
            <div className="flex flex-wrap gap-2 p-4 border-b">
              {videoShowcase.map((video, index) => (
                <Button
                  key={index}
                  variant={activeVideo === index ? "default" : "outline"}
                  onClick={() => setActiveVideo(index)}
                  className="flex-1"
                  id={`sskeqp_${index}`}
                >
                  {video.title}
                </Button>
              ))}
            </div>

            {/* Description */}
            <div className="px-6 py-3 bg-muted/50">
              <p className="text-sm text-primary font-medium">
                {videoShowcase[activeVideo].description}
              </p>
            </div>

            {/* Video container */}
            <div className="relative bg-accent">
              <video
                key={activeVideo}
                className="w-full aspect-video object-cover scale-x-[1.01]"
                autoPlay
                muted
                loop
                // controls
                // poster={`https://picsum.photos/seed/${activeVideo}/1920/1080`}
              >
                <source
                  src={videoShowcase[activeVideo].videoUrl}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <PlayIcon className="w-16 h-16 text-white" />
            </div> */}
            </div>
          </Card>
        </motion.div>

        {/* New Capabilities Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 text-sm font-medium"
            >
              Intelligent Automation
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mt-2">
              Your Business Process,{" "}
              <span className="text-primary">Our AI Solution</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Describe your company&apos;s unique workflows and challenges, and
              well develop a custom AI agent that perfectly matches your
              operational needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                key={index}
                id={`lycri3_${index}`}
                onClick={() =>
                  setExpandedCapability(
                    expandedCapability === index ? null : index
                  )
                }
              >
                <Card className="p-6 hover:bg-accent/50 transition-colors cursor-pointer">
                  <div
                    className="flex items-center gap-4"
                    id={`7xaokg_${index}`}
                  >
                    <div
                      className="p-2 rounded-lg bg-primary/10"
                      id={`ufl9r4_${index}`}
                    >
                      <capability.icon
                        className="h-6 w-6 text-primary"
                        id={`92iteu_${index}`}
                      />
                    </div>
                    <h3
                      className="text-xl font-semibold flex-1"
                      id={`ljka2a_${index}`}
                    >
                      {capability.title}
                    </h3>
                    {expandedCapability === index ? (
                      <ChevronDownIcon
                        className="h-5 w-5 text-muted-foreground"
                        id={`2soc4a_${index}`}
                      />
                    ) : (
                      <ChevronRightIcon
                        className="h-5 w-5 text-muted-foreground"
                        id={`2soc4a_${index}`}
                      />
                    )}
                  </div>
                  {expandedCapability === index && (
                    <motion.ul
                      className="mt-4 space-y-2"
                      id={`x0qup5_${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    >
                      {capability.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-muted-foreground"
                          id={`skoqi0_${index}`}
                        >
                          <div
                            className="h-1.5 w-1.5 rounded-full bg-primary/50"
                            id={`yov29l_${index}`}
                          />

                          {item}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Action Section */}
        {/* <div className="pt-20" id="demo">
          <motion.div
            initial={{ opacity: 0, y: 100 }} // Starts below the screen with zero opacity
            whileInView={{
              opacity: 1, // Fade in
              y: 0, // Slide to its natural position
            }}
            transition={{
              duration: 1, // Adjust the duration for the slide effect
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="relative bg-primary/10 rounded-3xl p-8"
          >
            <div className="flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
                Try Our AI And Learn More About Lumio
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-6">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-2xl shadow-lg transition-transform hover:scale-105"
                  size="lg"
                  onClick={() => setIsVoiceModalOpen(true)}
                >
                  <Mic className="mr-3 h-5 w-5" />
                  Try our Lumio AI Voice Agent
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 rounded-2xl shadow-lg transition-transform hover:scale-105"
                  size="lg"
                  onClick={() => setIsChatBotOpen(!isChatBotOpen)}
                >
                  <MessageSquare className="mr-3 h-5 w-5" />
                  Ask Lumio AI Questions
                </Button>
              </div>
            </div>
          </motion.div>
        </div> */}
      </div>
      <VoiceAgentModal
        isOpen={isVoiceModalOpen}
        setIsOpen={setIsVoiceModalOpen}
      />
    </section>
  );
}
