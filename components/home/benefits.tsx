"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BotIcon,
  BuildingIcon,
  BrainIcon,
  DollarSignIcon,
  UsersIcon,
} from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: BotIcon,
      title: "Results-Driven AI Solutions",
      description:
        "We take a practical, results-driven approach to AI. Whether you want to automate repetitive tasks, optimize workflows, or enhance decision-making, we tailor solutions to your business needs and budget.",
    },
    {
      icon: BuildingIcon,
      title: "Specifically for Mid-Sized Businesses",
      description:
        "Unlike big consulting firms that focus on enterprises, we specialize in mid-sized businesses. We understand your challenges—tight budgets, limited resources, and the need for fast ROI—so we make AI accessible and easy to integrate.",
    },
    {
      icon: BrainIcon,
      title: "End-to-End Integration",
      description:
        "From AI strategy & consulting to custom development & seamless integration, we handle it all. Our solutions include AI automation, predictive analytics, chatbots, and process optimization—designed for maximum impact with minimal disruption.",
    },
  ];

  const bottomBenefits = [
    {
      icon: DollarSignIcon,
      title: "Project-Based Pricing for Maximum ROI",
      description:
        "No long-term contracts. No hidden fees. We offer fixed-price AI solutions so you pay for results, not empty promises—ensuring you get the best return on your investment.",
    },
    {
      icon: UsersIcon,
      title: "U.S.-Based Sales & Global Engineering Excellence",
      description:
        "We combine local expertise with global talent—a U.S.-based sales and consulting team that understands the market, supported by a team of experienced AI engineers delivering high-quality, cost-effective AI solutions.",
    },
  ];

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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Why Choose Lumio AI?
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine cutting-edge AI technology with practical business
            solutions to help you succeed.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {benefits.map((benefit, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
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
              key={index}
              id={`q3qpvb_${index}`}
            >
              <Card className="border-none shadow-none h-full bg-accent/50">
                <CardContent className="pt-6" id={`ijh8dq_${index}`}>
                  <div
                    className="flex flex-col items-start gap-4"
                    id={`2457ce_${index}`}
                  >
                    <div
                      className="p-3 rounded-lg bg-primary/10"
                      id={`vjewjv_${index}`}
                    >
                      <benefit.icon
                        className="h-6 w-6 text-primary"
                        id={`427n42_${index}`}
                      />
                    </div>
                    <h3
                      className="text-xl font-semibold"
                      id={`ujp3ac_${index}`}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground" id={`myizfs_${index}`}>
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bottomBenefits.map((benefit, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
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
              key={index}
              id={`q3qpvb_${index + 3}`}
            >
              <Card className="border-none shadow-none h-full bg-accent/50">
                <CardContent className="pt-6" id={`ijh8dq_${index + 3}`}>
                  <div
                    className="flex flex-col items-start gap-4"
                    id={`2457ce_${index + 3}`}
                  >
                    <div
                      className="p-3 rounded-lg bg-primary/10"
                      id={`vjewjv_${index + 3}`}
                    >
                      <benefit.icon
                        className="h-6 w-6 text-primary"
                        id={`427n42_${index + 3}`}
                      />
                    </div>
                    <h3
                      className="text-xl font-semibold"
                      id={`ujp3ac_${index + 3}`}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="text-muted-foreground"
                      id={`myizfs_${index + 3}`}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
