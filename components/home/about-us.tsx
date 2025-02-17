"use client";
import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Correct the import

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
      name:"Porsche",
      logo:"/images/logos/porsche logo.jpg",
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
      name:"Yale Univeristy",
      logo:"/images/logos/yale university.png",
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

  return (
    <section className="py-20 bg-accent/50" id="about">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
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
            <h2 className="text-3xl font-bold tracking-tight mb-4">About Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Founded by Kush Jain and Ananth Subramanya, our team brings
              together expert engineers and strategists from top engineering
              institutions and leading tech giants such as Intuit, Cisco,
              Amazon, and Microsoft. We&apos;ve been recognized by Forbes 30
              Under 30 and CES Innovation Award for our groundbreaking AI
              solutions. Whether you need smarter operations, AI-powered
              customer interactions, or seamless integrations, we make AI
              accessible, practical, and built for growth.
            </p>
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
            <Card className="bg-background mb-8">
              <CardContent className="p-8 overflow-hidden relative">
                <h3 className="text-lg font-semibold mb-8 text-center">
                  Our Team&apos;s Background
                </h3>
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
                          "sm:max-h-12 sm:max-w-32 max-h-10 max-w-20 object-cover", company.className)}
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
            <Card className="bg-background">
              <CardContent className="p-8 overflow-hidden relative">
              <div className="rounded-xl absolute top-0 left-0 w-full h-full z-[1] overflow-hidden flex justify-between">
                  <div className="w-32 h-full bg-gradient-to-r from-white to-transparent" />
                  <div className="w-32 h-full bg-gradient-to-l from-white to-transparent" />
                </div>
                <h3 className="text-lg font-semibold mb-6 text-center">
                  Recognition & Awards
                </h3>
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
