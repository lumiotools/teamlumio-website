"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { TESTIMONIALS } from "@/constants/testimonials";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const activeTestimonialVideo = useSearchParams().get("testimonialVideo");
  const router = useRouter();

  useEffect(() => {
    if (activeTestimonialVideo) {
      const testimonial = TESTIMONIALS[parseInt(activeTestimonialVideo)];
      if (!testimonial || !testimonial.video) {
        router.replace("/#testimonials");
      } else {
        setActiveVideo(testimonial.video);
      }
    }
  }, [activeTestimonialVideo]);

  return (
    <Dialog
      open={!!activeVideo}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          router.replace("/#testimonials");
          setActiveVideo(null);
        }
      }}
    >
      <section className="py-20 bg-background" id="testimonials">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Trusted by Small to Medium Sized Businesses like Yours
            </h2>
            <p className="text-lg  text-muted-foreground">
              Businesses across industries trust Lumio AI to optimize sales,
              manufacturing, and operational workflows.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Card className="bg-background flex flex-col h-full">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className="flex flex-col flex-grow">
                      <p className="text-md sm:text-lg mb-3 text-justify">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <p className="p-1 px-3  border-[1.5px] text-primary bg-primary/10 border-primary rounded-full text-xs font-medium mb-3 w-fit">
                        {testimonial.tags}
                      </p>
                    </div>
                    {testimonial.video && (
                      <Link
                        href={`/?testimonialVideo=${index}#testimonials`}
                        className="flex justify-center mb-6"
                        id={`4b4ub6_${index}`}
                      >
                        <Button
                          variant="outline"
                          className="w-full flex items-center gap-2 !bg-[#e5e4ec8a]"
                          size="lg"
                          id={`p3ge29_${index}`}
                        >
                          <PlayIcon
                            className="h-5 w-5"
                            id={`8ahb7q_${index}`}
                          />
                          Watch Testimonial Video
                        </Button>
                      </Link>
                    )}
                    <div className="flex items-center gap-4 mt-auto">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author || testimonial.company}
                        className={cn('h-12 w-12 rounded-full object-contain', testimonial.className)}
                      />
                      <div>
                        {testimonial.author && (
                          <p className="font-semibold">{testimonial.author}</p>
                        )}
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position && `${testimonial.position}, `}
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>{" "}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <DialogContent className="max-w-screen-lg aspect-video p-0 border-none !text-white [&>button>svg]:!size-4 sm:[&>button>svg]:!size-6 ">
        <DialogTitle className="hidden"></DialogTitle>
        <video
          src={activeVideo as string}
          className="w-full h-full rounded-md"
          autoPlay
          controls
          muted
        />
      </DialogContent>
    </Dialog>
  );
}
