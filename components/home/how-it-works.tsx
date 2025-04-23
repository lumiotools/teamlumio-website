"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageSquareIcon,
  PhoneIcon,
  BrainIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageSquareIcon,
      title: "Tell us about your business and your needs",
      description:
        "Share your business challenges and goals with us. We'll help identify where AI can make the biggest impact.",
    },
    {
      number: "02",
      icon: PhoneIcon,
      title: "Get on a free AI consultation call",
      description:
        "Schedule a call with our AI experts to discuss your specific needs and explore potential solutions.",
    },
    {
      number: "03",
      icon: BrainIcon,
      title: "Learn how Lumio can help you",
      description:
        "Receive a customized plan showing how AI can transform your business operations.",
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
            Get Your Free AI Consultation
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how AI can transform your business in three simple steps.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              key={index}
              id={`tm4vj5_${index}`}
            >
              <Card className="h-full relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 p-4 text-6xl font-bold text-primary/10"
                  id={`w8nnvq_${index}`}
                >
                  {step.number}
                </div>
                <CardContent className="pt-6" id={`4ui3hq_${index}`}>
                  <div className="flex flex-col gap-4" id={`wa7a91_${index}`}>
                    <div
                      className="p-3 rounded-lg bg-primary/10 w-fit"
                      id={`uj5tio_${index}`}
                    >
                      <step.icon
                        className="h-6 w-6 text-primary"
                        id={`m9dsh8_${index}`}
                      />
                    </div>
                    <h3
                      className="text-xl font-semibold"
                      id={`tgxytu_${index}`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground" id={`7o2qr0_${index}`}>
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16">
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
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Book Your Free AI Consultation Today
                    </h3>
                    <p className="text-primary-foreground/80">
                      Let&apos;s discuss how AI can accelerate your business
                      growth
                    </p>
                  </div>
                  <Link
                    href="/book-consultation"
                    target="_blank"
                  >
                    <Button
                      size="lg"
                      variant="secondary"
                      className="whitespace-nowrap"
                    >
                      Get Your Free AI Consultation
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
