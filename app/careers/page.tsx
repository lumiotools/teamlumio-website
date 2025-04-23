"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb,
  Users,
  BookOpen,
  Target,
  Shuffle,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Careers() {
  const cultureValues = [
    {
      icon: Lightbulb,
      title: "Pioneering AI with Purpose",
      description:
        "At Team Lumio, we cultivate a culture where innovation is intentional. We empower every team member to contribute meaningfully, driving the future of AI through collective ambition and shared vision.",
    },
    {
      icon: Users,
      title: "A Culture of Collaboration",
      description:
        "Breakthroughs begin with bold dialogue. We foster an environment where cross-functional teams collaborate openly, challenge assumptions, and elevate diverse perspectives. At Lumio, every voice fuels smarter solutions and mutual growth.",
    },
    {
      icon: BookOpen,
      title: "Growth Through Mastery",
      description:
        "Continuous learning defines our DNA. From hands-on projects with cutting-edge AI tools to peer-led knowledge exchanges, we invest in your development. Here, curiosity is rewarded, and expertise evolves alongside industry advancements.",
    },
    {
      icon: Target,
      title: "Impact That Resonates",
      description:
        "We solve for substance, not trends. Our projects target real-world challenges—streamlining industries, enhancing human potential, and delivering measurable value. At Lumio, your work will redefine what AI can achieve.",
    },
    {
      icon: Shuffle,
      title: "Agility in Action",
      description:
        "In a field where change is constant, adaptability is key. We champion iterative experimentation, rapid problem-solving, and forward-thinking pivots. By embracing change, we stay ahead in the AI landscape.",
    },
    {
      icon: Heart,
      title: "Inclusion as Innovation",
      description:
        "Diversity isn't just celebrated—it's foundational. We believe varied perspectives unlock unparalleled solutions. At Lumio, inclusivity ensures every individual thrives, fostering a workspace where respect and collaboration transcend boundaries.",
    },
  ];

  const benefits = [
    {
      title: "World Class Founders",
      description:
        "Our founders, Kush Jain and Ananth Subramanya, are Cornell and UW-Madison Computer Science graduates with experience at Intuit, HP, and Cisco. As Forbes 30 under 30 honorees and CES Innovation Award winners, they deliver cutting-edge AI solutions.",
    },
    {
      title: "Global Culture",
      description:
        "Our global culture includes weekly team bonding, company offsites, and a vibrant co-working space in Mumbai. You'll have the opportunity to connect with other startups while enjoying a dynamic, collaborative environment.",
    },
    {
      title: "Early Employee Perks",
      description:
        "As an early employee, you'll join us at the start of an exciting journey, working on cutting-edge projects with significant growth opportunities. Enjoy the freedom and ownership over your work as we scale together.",
    },
    {
      title: "Ownership",
      description:
        "You'll receive performance incentives and employee equity, ensuring your contributions are rewarded as we grow. This ownership fosters a strong connection between your success and the company's achievements.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Why Join Us?
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us to shape the future with innovative AI solutions.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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
                <Card className="bg-card h-full hover:bg-accent/50 transition-colors">
                  <CardContent className="p-6" id={`9heqsn_${index}`}>
                    <h3
                      className="text-2xl font-bold mb-4"
                      id={`ahjb79_${index}`}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-justify" id={`hkwu1b_${index}`}>
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Culture Section */}
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
                <Card className="bg-card h-full hover:bg-accent/50 transition-colors">
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
                    <p className="text-muted-foreground text-justify" id={`pnwe6c_${index}`}>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed Apply Button - Positioned to the left of the ChatBot */}
      <div className="fixed bottom-8 right-4 sm:right-10 z-50">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfBApUN0uIRXAwjE43RVa2c8KIjqZWDRTAZkMfOS3qRHLqMEw/viewform?usp=sf_link"
          target="_blank"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
          >
            Apply Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
