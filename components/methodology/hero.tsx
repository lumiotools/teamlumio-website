"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export const MethodologyHero = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to- from-background to-primary/5 dark:from-background dark:to-primary/10">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05]" />

        <div className="relative">
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
            className="flex flex-col items-center justify-center px-6 py-24 text-center space-y-8 max-w-5xl mx-auto"
          >
            <Badge variant="outline" className="px-4 py-1 text-base">
              <span className="mr-2">DROP™</span>Framework
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
              Empowering Small Businesses with AI: The DROP
              <span className="mr-2 font-normal align-top text-lg">TM</span>
              Framework by Lumio AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A structured approach that ensures AI integration is simple,
              effective, and delivers real business value for small businesses.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfiMB-IkhNT95tBWyC6du56ENayUlBPEZ4G6QGa5s3aEYKsNw/viewform?usp=sharing"
                target="_blank"
              >
                <Button size="lg" className="w-full">
                  Book a Free AI Consultation Today
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              {/* <Button size="lg" variant="outline" className="rounded-full">
                Learn More
              </Button> */}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Framework Diagram moved here */}
      <div className="px-4 py-20 bg-accent/40" id="framework">
        <motion.section
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-6"
        >
          <img
            src="/images/drop.png"
            alt="DROP Framework Diagram"
            className="rounded-xl shadow-xl w-full object-cover border border-border"
          />

          <p className="text-sm text-muted-foreground text-center mt-4">
            Architectural representation of the{" "}
            <span className="mr-2">DROP™</span>Framework
          </p>
        </motion.section>
      </div>
    </>
  );
};
