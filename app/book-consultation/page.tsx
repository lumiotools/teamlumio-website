"use client";

import BookConsultationForm from "@/components/book-consultation/form";
import React from "react";
import { motion } from "framer-motion";

const BookConsultationPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-20 flex flex-col md:flex-row gap-8">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="flex-[2] py-4 space-y-4"
      >
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
          Lumio AI Intake Form
        </h1>
        <p className="font-semibold text-xl text-muted-foreground">
          Transform your organization
        </p>
        <p className="text-xl text-muted-foreground">
          Team Lumio delivers cutting-edge AI solutions tailored to your
          business needs, ensuring faster innovation and measurable results.
        </p>
        <p className="text-xl text-muted-foreground">
          Our world-class experts combine technical mastery with practical
          industry experience. We help you scale smarter, automate processes,
          and stay ahead in today’s digital landscape.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="flex-[3]"
      >
        <BookConsultationForm />
      </motion.div>
    </div>
  );
};

export default BookConsultationPage;
