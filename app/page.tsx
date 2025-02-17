"use client";
import { AboutUs } from "@/components/home/about-us";
import { Benefits } from "@/components/home/benefits";
import ChatBot from "@/components/home/chat-bot";
import { CTA } from "@/components/home/cta";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Newsletter } from "@/components/home/newsletter";
import { TechPlatforms } from "@/components/home/tech-platforms";
import { Testimonials } from "@/components/home/testimonials";
import React, { useState } from "react";

const HomePage = () => {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  return (
    <>
      <Hero setIsChatBotOpen={setIsChatBotOpen}/>
      <AboutUs />
      <Features
        isChatBotOpen={isChatBotOpen}
        setIsChatBotOpen={setIsChatBotOpen}
      />
      <Testimonials />
      <Benefits />
      <TechPlatforms />
      <HowItWorks />
      <Newsletter />
      <CTA />
      <ChatBot
        isChatBotOpen={isChatBotOpen}
        setIsChatBotOpen={setIsChatBotOpen}
      />
    </>
  );
};

export default HomePage;
