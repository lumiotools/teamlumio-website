"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { ArrowRightIcon } from "lucide-react";
import { VoiceAgentModal } from "@/components/home/voice-agent-modal";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  return (
    <section className="py-20">
      <div className="container px-4">
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
          className="relative overflow-hidden rounded-3xl bg-primary px-6 py-20 text-primary-foreground"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground/20" />

          <div className="relative flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 max-w-2xl">
              Embrace the power of AI to automate tasks, improve efficiency, and
              drive growth—without the complexity. Let Lumio AI help you unlock
              the full potential of AI for your business today.
            </p>
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Link
                  href="https://calendar.app.google/Zie4xPmv4pMCyTa99"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-[200px] bg-white text-primary hover:bg-white/90"
                  >
                    Get Your Free AI Audit
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Button>
                </Link> */}
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfiMB-IkhNT95tBWyC6du56ENayUlBPEZ4G6QGa5s3aEYKsNw/viewform?usp=sharing"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white text-primary hover:bg-white/90"
                  >
                    Get Your Free AI Consultation
                  </Button>
                </Link>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10"
                  onClick={() => setIsVoiceModalOpen(true)}
                >
                  Try Our Voice Agent
                </Button> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <VoiceAgentModal
        isOpen={isVoiceModalOpen}
        setIsOpen={setIsVoiceModalOpen}
      />
    </section>
  );
}
