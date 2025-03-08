"use client";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   DatabaseIcon,
//   FilterIcon,
//   PlayIcon,
//   PresentationIcon,
// } from "lucide-react";
import { motion } from "framer-motion";

export const MethodologyContent = () => {
  // const frameworkSteps = [
  //   {
  //     id: "data",
  //     letter: "D",
  //     title: "Data Aggregation",
  //     icon: DatabaseIcon,
  //     description: [
  //       "For small businesses, managing data from multiple tools—such as customer databases, invoicing systems, and sales reports—can be overwhelming. Our Custom AI Workers seamlessly connect with any digital data source, including CRM tools, e-commerce platforms, cloud apps, and even spreadsheets, to gather critical business data automatically.",
  //       "We don't just integrate data; we ensure that the AI Worker understands the unique context of your business, organizing customer interactions, sales trends, and operational data in a way that makes AI-driven automation relevant and useful.",
  //     ],
  //   },
  //   {
  //     id: "refinement",
  //     letter: "R",
  //     title: "Refinement",
  //     icon: FilterIcon,
  //     description: [
  //       "Raw data from different sources is often messy or inconsistent. The Refinement phase ensures that the AI Worker processes data correctly, eliminating duplicates, errors, and irrelevant information. By applying smart filters, automation rules, and industry-specific AI knowledge, Lumio AI helps small businesses:",
  //     ],

  //     bullets: [
  //       "Unify data across multiple platforms (e.g., QuickBooks, Shopify, Mailchimp, Google Workspace)",
  //       "Detect patterns in customer behavior and sales trends",
  //       "Ensure clean, structured data for more accurate AI-driven decisions",
  //     ],
  //   },
  //   {
  //     id: "operation",
  //     letter: "O",
  //     title: "Operation",
  //     icon: PlayIcon,
  //     description: [
  //       "Once the data is refined, the AI Worker performs its processing before generating any output. This includes using deterministic rule-based algorithms, custom machine learning models, and Large Language Models (LLMs) to extract insights, automate decision-making, and enhance workflows.",
  //       "We leverage LLMs (Large Language Models), predictive analytics, and automated workflows to help small businesses:",
  //     ],

  //     bullets: [
  //       "Automate customer service responses with AI-powered chatbots",
  //       "Predict inventory needs based on sales history",
  //       "Streamline task management by automating repetitive admin work",
  //     ],
  //   },
  //   {
  //     id: "presentation",
  //     letter: "P",
  //     title: "Presentation & Action",
  //     icon: PresentationIcon,
  //     description: [
  //       "Small business owners don't have time to analyze complex AI reports. That's why the Presentation & Action phase focuses on delivering clear, simple, and actionable insights in a user and workflow-friendly manner, on any channel of their choice.",
  //       "Lumio AI ensures that small businesses can:",
  //     ],

  //     bullets: [
  //       "Access AI-powered insights on their preferred platforms—whether through email, an ERP system, an online dashboard, a chatbot, or mobile notifications",
  //       "Enable autonomous actions—such as sending follow-up emails to customers, updating CRM records, making phone calls, and submitting forms—without manual effort",
  //       "Ensure real-time responsiveness with AI-driven alerts, automated workflow triggers, and intelligent notifications to keep business operations running smoothly",
  //     ],
  //   },
  // ];

  return (
    <div className="container mx-auto px-4 py-16 space-y-20">
      {/* Introduction */}
      {/* <motion.section
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
        className="max-w-4xl mx-auto space-y-6"
      >
        <h2 className="text-3xl font-bold">Introduction</h2>
        <p className="text-lg text-muted-foreground leading-relaxed text-justify">
          Small businesses today face growing challenges in managing operations
          efficiently, keeping up with technology, and staying competitive. At
          Lumio AI, we specialize in Custom AI Workers that help small
          businesses streamline workflows, reduce manual tasks, and enhance
          decision-making without requiring a dedicated IT team. To guide small
          businesses through AI adoption, we introduce the DROP
          <span className="mr-2 font-normal">™</span>Framework—a structured
          approach that ensures AI integration is simple, effective, and
          delivers real business value. DROP
          <span className="mr-2 font-normal">™</span>stands for Data
          Aggregation, Refinement, Operation, and Presentation & Action, a
          step-by-step methodology tailored for small business needs.
        </p>
      </motion.section> */}

      {/* Framework Overview */}
      {/* <motion.section
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
        className="max-w-4xl mx-auto space-y-6 "
      >
        <h2 className="text-3xl font-bold ">
          Understanding the DROP<span className="mr-2 font-normal">™</span>
          Framework
        </h2>
        <p className="text-lg text-justify text-muted-foreground leading-relaxed">
          The DROP<span className="mr-2 font-normal">™</span>Framework is
          designed specifically for small businesses looking to harness AI for
          automation and smarter decision-making. Each phase ensures that AI is
          easy to implement, adaptable, and provides immediate benefits.
        </p>
      </motion.section> */}

      {/* Framework Steps */}
      {/* <section className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
        {frameworkSteps.map((step, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.1 * index,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            key={step.id}
            id={`vi9vba_${index}`}
          >
            <Card className="p-5 sm:p-8 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <CardContent className="space-y-6 p-0" id={`pr4bna_${index}`}>
                <div className="flex items-center gap-4" id={`jlr3e2_${index}`}>
                  <div
                    className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center"
                    id={`7dmz3i_${index}`}
                  >
                    <step.icon
                      className="h-7 w-7 text-primary"
                      id={`4g04en_${index}`}
                    />
                  </div>
                  <h3 className=" text-xl sm:text-2xl font-bold" id={`cyfgoq_${index}`}>
                    {step.letter} - {step.title}
                  </h3>
                </div>
                <div className="space-y-4 pl-0 sm:pl-[4.5rem]" id={`jadp5j_${index}`}>
                  {step.description.map((desc, index) => (
                    <p
                      key={index}
                      className="text-muted-foreground text-justify leading-relaxed"
                      id={`kyqg9m_${index}`}
                    >
                      {desc}
                    </p>
                  ))}
                  {step.bullets && (
                    <ul
                      className="list-disc pl-6 space-y-2 text-justify text-muted-foreground"
                      id={`qqfqy5_${index}`}
                    >
                      {step.bullets.map((bullet, index) => (
                        <li key={index} id={`hz6jvc_${index}`}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section> */}

      {/* Conclusion */}
      <motion.section
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
        className="max-w-4xl mx-auto space-y-6"
      >
        <h2 className="text-3xl font-bold text-center">
          The Role of DROP<span className="mr-2 font-normal">™</span>in SMB&apos;s AI Adoption
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed text-justify">
          With the DROP<span className="mr-2 font-normal">™</span>Framework,
          SMBs can integrate AI into their workflows without the
          need for extensive technical expertise or expensive enterprise
          solutions. Whether it&apos;s automating tasks, improving customer
          engagement, or making data-driven decisions, AI is now accessible and
          practical for SMB owners.
        </p>
      </motion.section>
    </div>
  );
};
