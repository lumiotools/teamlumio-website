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
        router.replace("/case-studies");
      } else {
        setActiveVideo(testimonial.video);
      }
    }
  }, [activeTestimonialVideo]);

  const benefits = [
    {
      title: "Broker Assistant Real Estate",
      problem:
        "A $100M real estate agency wanted to train their realtors on sales strategy and negotiation with clients/other realtors, as well as develop novel marketing/PR methods. The team was spending too much time training and procuring new client listings; with little monitoring of training impact resulting in lost business.",
      solution:
        "Lumio built a multi-modal AI training assistant for the real estate brokerage team. A full- stack application with custom fine-tuned LLM’s for each of the specific knowledge area allowed users to: Chat platform (type or speak) with real time data and information access within the guidelines set by the brokerage company. Lumio also created marketing material, property pitches, and other real-estate documents relevant to landing and closing sales.",
      outcome:
        "Training timeline and comprehension improved by 30% amongst the realtor team with access to Co-Pilot and targeted content. New listings and sales are currently being monitored.",
    },

    {
      title: "ShipSearch Logistics",
      problem:
        "Searching and filtering for specific shipping and logistics information was time consuming and often inefficient, with limited tools for precise and natural language-based queries.",
      solution:
        "Lumio AI created ShipSearch, a cutting-edge AI-powered search platform designed for the shipping industry. ShipSearch allows users to search in natural language for tailored shipping solutions.",
      outcome:
        "ShipSearch significantly reduced the time required for shipping and carrier discovery by 83%, delivering precise answers, and enabling efficient decision making.",
    },

    {
      title: "Financial Market Research Lab",
      problem:
        "A top financial research lab in South Korea needed a scalable system to search and retrieve critical business documents across SEC filings, investor materials, expert reports, and news articles. Existing tools were inefficient, lacked multi-level data integration, and failed to provide accurate source attribution.",
      solution:
        "Lumio AI built a comprehensive document search and retrieval platform integrating data from SEC filings (L1) and investor materials (L2) with automated pipelines for updates. The system included advanced search functionality using NLP tools, seamless frontend design, and API integration for expert reports (L3) and news articles (L4), ensuring precise source attribution and user-friendly navigation.",
      outcome:
        "This reduced research time, improved search accuracy, and delivered clear source attribution. The solution streamlined market research workflows, enhanced user satisfaction, and positioned the research lab as a leader in business intelligence tools.",
    },

    {
      title: "Marble Grading Global Manufacturer",
      problem:
        "A global marble manufacturer and supplier in Asia, struggled with inconsistencies and inefficiencies in grading their marble products. The manual grading process was time-intensive, prone to human error, and lacked scalability; impacting quality control/customer satisfaction.",
      solution:
        "Lumio AI developed a customized Computer Vision Grading System featuring: Advanced AI algorithms trained to analyze marble patterns, colors, and textures. Automated categorization of marbles into predefined grades based on quality, aesthetic features, and industry standards. Real-time defect detection to identify cracks, discoloration, and irregularities. A user-friendly dashboard for operators to view grading results and export reports for inventory and quality management. Integration with existing workflows to seamlessly scale operations across manufacturing facilities",
      outcome:
        "It has since achieved a 70% reduction in time spent on marble grading and improved Marble quality and consistency leading to higher customer satisfaction. As operations scale, it has driven efficiency and excellence around increased product demand, quality, and timeline of product delivery.",
    },
  ];

  return (
    <Dialog
      open={!!activeVideo}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          router.replace("/case-studies");
          setActiveVideo(null);
        }
      }}
    >
      <section className="py-20">
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
              Trusted by Businesses like Yours
            </h2>
            <p className="text-lg  text-muted-foreground">
              Businesses across industries engage Lumio AI to optimize sales,
              manufacturing, and operational workflows.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 px-4">
            {benefits.map((benefit, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                key={index}
                id={`p4bqsf_${index}`}
              >
                <Card className="bg-card h-full border-4 border-transparent hover:border-primary hover:scale-105 transition-all ease-in-out duration-300">
                  <CardContent className="p-6 space-y-4" id={`9heqsn_${index}`}>
                    <h3
                      className="text-2xl font-bold mb-4"
                      id={`ahjb79_${index}`}
                    >
                      {benefit.title}
                    </h3>
                    <div>
                      <p className="font-bold text-lg">Problem</p>
                      <p
                        className="text-muted-foreground text-justify"
                        id={`hkwu1b_${index}`}
                      >
                        {benefit.problem}
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Solution</p>
                      <p
                        className="text-muted-foreground text-justify"
                        id={`hkwu1b_${index}`}
                      >
                        {benefit.solution}
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Outcome</p>
                      <p
                        className="text-muted-foreground text-justify"
                        id={`hkwu1b_${index}`}
                      >
                        {benefit.outcome}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

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
            className="text-center max-w-4xl mx-auto mb-8"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Testimonials
            </h2>
            <p className="text-lg  text-muted-foreground italic">
            Here&apos;s what our partners are saying about the impact of Lumio AI
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-6">
            <div className="flex gap-8 min-w-max p-4">
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
                    // delay: 0.2 * index,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="w-[520px]"
                >
                  <Card className="flex flex-col h-full border-4 border-transparent hover:border-primary hover:scale-105 transition-all ease-in-out duration-300">
                    <CardContent className="pt-6 flex flex-col h-full">
                      <div className="flex flex-col flex-grow">
                        <p className="text-md sm:text-lg mb-3 text-justify">
                          &quot;{testimonial.quote}&quot;
                        </p>
                      </div>
                      {testimonial.video && (
                        <Link
                          href={`/case-studies?testimonialVideo=${index}`}
                          className="flex justify-center mb-6"
                          id={`4b4ub6_${index}`}
                        >
                          <Button
                            variant="outline"
                            className="w-full flex items-center gap-2 !bg-primary/10"
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
                          className={cn(
                            "h-12 w-12 rounded-full object-contain",
                            testimonial.className
                          )}
                        />
                        <div>
                          {testimonial.author && (
                            <p className="font-semibold">
                              {testimonial.author}
                            </p>
                          )}
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position &&
                              `${testimonial.position}, `}
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
