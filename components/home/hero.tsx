"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, MessageSquare, Mic } from "lucide-react";
import { VoiceAgentModal } from "@/components/home/voice-agent-modal";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero({
  setIsChatBotOpen,
}: {
  setIsChatBotOpen: (isOpen: boolean) => void;
}) {
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
      {/* <HeroBackground /> */}
      <div className="container px-4 h-full flex items-center min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col items-center text-center gap-8 sm:gap-12 max-w-4xl mx-auto">
          {/* <div
            className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm"
          >
            <span className="flex items-center gap-1.5">
              <BoltIcon className="h-4 w-4" />
              <span className="font-medium">
                New Blog:
              </span>
            </span>
            <span className="ml-2">
              Transform Inbound with AI
            </span>
          </div> */}
          <div className='flex flex-col gap-5 items-center '>

          <motion.h1
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
            className="text-3xl sm:text-5xl md:text-7xl font-medium tracking-tight "
          >
            <span className="text-primary text-[4.6rem] ">Empowering Humans</span> <br/>To Do More
          </motion.h1>
          <motion.p
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
            className="text-lg sm:text-xl text-[#757575] drop-shadow-md shadow-[#cdd0ce] max-w-[52rem]"
          >
            Lumio makes AI accessible, practical, and built for growth—delivering high-quality, high-impact solutions with competitive turnaround times and measurable ROI.
          </motion.p>
          </div>

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
            className="flex flex-col items-center gap-5 w-full"
          >
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfiMB-IkhNT95tBWyC6du56ENayUlBPEZ4G6QGa5s3aEYKsNw/viewform?usp=sharing "
              target="_blank"
              className="w-full"
            >
              <Button size="lg" className="w-[320px] h-14 text-lg">
                Book Your Free AI Consultation
                {/* <ArrowRightIcon className="ml-1 h-4 w-4" /> */}
              </Button>
            </Link>
            {/* <div className="flex flex-col md:flex-row items-center gap-4">
            <Link  
              href="https://docs.google.com/forms/d/e/1FAIpQLSfiMB-IkhNT95tBWyC6du56ENayUlBPEZ4G6QGa5s3aEYKsNw/viewform?usp=sharing"
              target="_blank"
              >

              <Button size="lg" variant="outline" className="w-[250px]">
                Get Your Free AI Audit
              </Button>
              </Link>
              <Button onClick={() => setIsChatBotOpen(true)} size="lg" variant="outline" className="w-[250px]">
                Ask Lumio AI Questions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-[250px] "
                onClick={() => setIsVoiceModalOpen(true)}
              >
                Try our Lumio AI Voice Agent
              </Button>
               <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white w-[250px]  transition-transform hover:scale-105"
                size="lg"
                onClick={() => setIsChatBotOpen(true)}
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                Ask Lumio AI Questions
              </Button>
              <Button
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white w-[250px]  transition-transform hover:scale-105"
                size="lg"
                variant="outline"
                onClick={() => setIsVoiceModalOpen(true)}
              >
                <Mic className="mr-0 h-5 w-5" />
                Try our Lumio AI Voice Agent
              </Button> *
              </div>  */}
              <div className="" id="demo">
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
                  <div className="flex flex-col items-center justify-center gap-4  max-w-4xl mx-auto">
                    <h2 className="text-lg md:text-xl font-medium text-center text-primary">
                      Try Our AI And Learn More About Lumio
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                      <Button
                        className="w-[250px]"
                        size="lg"
                        variant="outline"
                        onClick={() => setIsVoiceModalOpen(true)}
                      >
                        <Mic className="mr-3 h-5 w-5" />
                        Try our Lumio AI Voice Agent
                      </Button>
                      <Button
                        variant="outline"
                        className="w-[250px]"
                        size="lg"
                        onClick={() => setIsChatBotOpen(true)}
                      >
                        <MessageSquare className="mr-3 h-5 w-5" />
                        Ask Lumio AI Questions
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-sm"
          >
            <div className="flex -space-x-2">
              {[
                "/images/Jeff Hammerberg.avif",
                "/images/Mosa.avif",
                "/images/Timesh Paloma.jpg",
                "/images/logos/orchestro.png",
              ].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="User"
                  className="h-8 w-8 rounded-full border-2 border-background bg-white object-contain"
                  id={`6vjmxw_${index}`}
                />
              ))}
            </div>
            <div className="text-left">
              <p className="font-medium text-sm sm:text-base">
                Join the dozens of businesses
              </p>
              <p className="text-muted-foreground">that trust Lumio AI</p>
            </div>
          </motion.div> */}
        </div>
      </div>
      {/* <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        ></div>
      </div> */}
      <VoiceAgentModal
        isOpen={isVoiceModalOpen}
        setIsOpen={setIsVoiceModalOpen}
      />
    </div>
  );
}
