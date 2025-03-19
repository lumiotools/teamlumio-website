"use client";
import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Correct the import
import {
  HeartIcon,
  LayoutIcon,
  UsersIcon,
  ZapIcon,
  CrownIcon,
  TrendingUpIcon,
} from "lucide-react";
// import Link from "next/link";

export function AboutUs() {
  const companies = [
    {
      name: "HP",
      logo: "/images/logos/hp.png",
      className: "py-1",
    },
    {
      name: "Intuit",
      logo: "/images/logos/Intuit logo2.png",
    },
    {
      name: "Cisco",
      logo: "/images/logos/Cisco logo.png",
    },
    {
      name: "Microsoft",
      logo: "/images/logos/Microsoft-Logo.png",
    },
    {
      name: "Amazon",
      logo: "/images/logos/amazon.webp",
    },
    {
      name: "Porsche",
      logo: "/images/logos/porsche logo.jpg",
      className: "py-2 sm:py-1",
    },
    {
      name: "Cornell University",
      logo: "/images/logos/Cornell logo.png",
    },
    {
      name: "Wisconsil University",
      logo: "/images/logos/Wisconsil logo.png",
    },
    {
      name: "IIT",
      logo: "/images/logos/iit.png",
    },
    {
      name: "Cambridge",
      logo: "/images/logos/Cambridge logo.png",
    },
    {
      name: "Harvard",
      logo: "/images/logos/harvard.png",
    },

    {
      name: "Yale Univeristy",
      logo: "/images/logos/yale university.png",
      className: "sm:max-h-40 sm:max-w-40 pt-1 max-w-20 max-h-40 ",
    },
  ];

  const awards = [
    {
      name: "Forbes 30 Under 30",
      logo: "/images/logos/Forbes logo.png",
      className: "py-2",
    },
    {
      name: "CES Innovation Award",
      logo: "/images/logos/CSE logo.png",
    },
    {
      name: "Business Standard",
      logo: "/images/logos/business-standard.png",
    },
    {
      name: "Deccan Herald",
      logo: "/images/logos/Deccan Herald.png",
      className: "invert py-1",
    },
    {
      name: "Housing Wire",
      logo: "/images/logos/housing wire.svg",
    },
    {
      name: "New Atlas",
      logo: "/images/logos/new atlas.svg",
      className: "max-h-10 max-w-20 object-cover w-full h-[32px] pt-1",
    },
    {
      name: "Wowtale",
      logo: "/images/logos/wowtale.png",
      className: "",
    },
    {
      name: "Yahoo",
      logo: "/images/logos/yahoo.png",
    },
  ];

  const scrollCompanies = [...awards, ...awards];

  const cultureValues = [
    {
      icon: HeartIcon,
      title: "Earn Customer Love",
      description:
        "We are passionate about our customers and dedicated to their success, knowing that trust and confidence are earned through every interaction, delivery, and solution. Each engagement reinforces our commitment to exceptional service.",
    },
    {
      icon: LayoutIcon,
      title: "Run Through Walls",
      description:
        "We fearlessly tackle barriers, racing towards innovative solutions. By stepping outside our comfort zones and rigorously testing our ideas, we commit to solving tough challenges through hard work and perseverance.",
    },
    {
      icon: UsersIcon,
      title: "Team Flow",
      description:
        "We are energized by each other's success, actively investing in one another with care, candor, and focus. Open idea flow is fostered by our mutual trust and respect.",
    },
    {
      icon: ZapIcon,
      title: "Why Not Faster?",
      description:
        "We move with agility and intent, making swift two-way door decisions that help us learn faster, adapt quickly, and achieve more. This approach keeps us ahead in a rapidly changing environment.",
    },
    {
      icon: CrownIcon,
      title: "Ownership Is The Job",
      description:
        "We think like owners and embody expansive ownership, believing in our ability to drive outcomes and create meaningful change. This mindset empowers us to take initiative and deliver results.",
    },
    {
      icon: TrendingUpIcon,
      title: "Results Speak Loudest",
      description:
        "We define goals with intent and assess our outcomes with objectivity, understanding that our true measure lies in our results. At the end of the day, results speak loudest.",
    },
  ];

  return (
    <section className="py-20 bg-accent/50" id="about">
      <div className="container px-4">
        <div className="relative overflow-hidden bg-gradient-to- from-background to-primary/5 dark:from-background dark:to-primary/10">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05]" />

          <div className="relative">
            <div className="flex flex-col items-center justify-center px-6 py-24 text-center space-y-8 max-w-5xl mx-auto">
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
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight max-w-4xl mx-auto leading-tight">
                  About Us
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  At Lumio AI, we design cutting-edge, customized Enterprise AI
                  solutions to optimize sales, manufacturing, and operational
                  workflows. Our expertise spans AI agents, business copilots,
                  AI-powered document search, multi-modal AI systems,
                  multi-agent frameworks, and tailored AI solutions to meet the
                  unique needs of our customers.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 1,
                }}
                viewport={{ once: true }}
              >
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Lumio makes AI accessible, practical, and built for
                  growth—delivering high-quality, high-impact solutions with
                  competitive turnaround times and measurable ROI. Whether
                  you&apos;re looking for smarter operations, AI-powered customer
                  interactions, or seamless AI integrations, Lumio AI empowers
                  humans to do more.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="py-20 bg-accent/40 " id="framework">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Lumio AI&apos;s Culture</h2>
            <p className="text-lg text-muted-foreground">
              Read about Lumio AI&apos;s trust, ownership, and results-driven
              culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {cultureValues.map((value, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                key={index}
                id={`rwy7cs_${index}`}
              >
                <Card className="bg-card h-full border-4 border-transparent hover:border-primary hover:scale-105 transition-all ease-in-out duration-300">
                  <CardContent className="p-6" id={`p31m7j_${index}`}>
                    <div
                      className="flex items-center gap-4 mb-4"
                      id={`nxq2kw_${index}`}
                    >
                      <div
                        className="p-2 rounded-lg bg-primary/10"
                        id={`taj7ia_${index}`}
                      >
                        <value.icon
                          className="h-6 w-6 text-primary"
                          id={`28105f_${index}`}
                        />
                      </div>
                      <h3 className="text-xl font-bold" id={`ublm89_${index}`}>
                        {value.title}
                      </h3>
                    </div>
                    <p
                      className="text-muted-foreground text-justify"
                      id={`pnwe6c_${index}`}
                    >
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            {/* <motion.div
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
            <h2 className="text-4xl font-medium tracking-tight mb-4">About Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
            At Lumio AI, we design cutting-edge, customized Enterprise AI solutions to optimize sales, manufacturing, and operational workflows. Our expertise spans AI agents, business copilots, AI-powered document search, multi-modal AI systems, multi-agent frameworks, and tailored AI solutions to meet the unique needs of our customers.
            </p>
          </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Our Team&apos;s Background
              </h3>

              <Card className="bg-background mb-8">
                <CardContent className="p-8 overflow-hidden relative">
                  <div className="flex flex-wrap  gap-10 gap-y-6 items-center justify-center">
                    {companies.map((company, index) => (
                      <div
                        key={index}
                        // className="grayscale hover:grayscale-0 transition-all"
                        id={`bo6cjo_${index}`}
                      >
                        <img
                          src={company.logo}
                          alt={company.name}
                          className={cn(
                            "sm:max-h-12 sm:max-w-32 max-h-10 max-w-20 object-cover",
                            company.className
                          )}
                          id={`s9l5h6_${index}`}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

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
              <h3 className="text-2xl font-semibold mt-20 mb-6 text-center">
                Recognition & Awards
              </h3>
              <Card className="bg-background">
                <CardContent className="p-8 overflow-hidden relative">
                  <div className="rounded-xl absolute top-0 left-0 w-full h-full z-[1] overflow-hidden flex justify-between">
                    <div className="w-32 h-full bg-gradient-to-r from-white to-transparent" />
                    <div className="w-32 h-full bg-gradient-to-l from-white to-transparent" />
                  </div>

                  <div className="w-full">
                    <div
                      className="flex w-max animate-scroll"
                      style={{
                        animationDuration: "30s",
                        animationTimingFunction: "linear",
                        animationIterationCount: "infinite",
                      }}
                    >
                      {scrollCompanies.map((awards, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 flex justify-center items-center px-6 sm:px-8"
                          id={`a5w3y4_${index}`}
                        >
                          <img
                            src={awards.logo}
                            alt={awards.name}
                            className={cn(
                              "max-h-12 max-w-40 object-contain",
                              awards.className
                            )}
                            id={`bbjzhn_${index}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
