"use client";

import { Button } from "@/components/ui/button";
import {  blogPosts, type BlogPost } from "@/constants/blog-data";
import {  ArrowRightIcon } from "lucide-react";
import { useParams } from "next/navigation";
import  ReactMarkdown  from 'react-markdown';
import {motion} from 'framer-motion';
import Link from 'next/link'
import { notFound } from "next/navigation"

export default function BlogPost() {
  // const router = useRouter();
  const params = useParams();
  const blogId = Number(params.blogId);  // Extract blog ID from URL params

  // Find the blog post based on the ID
  const post = blogPosts.find((post) => post.id === blogId);
  console.log(post, blogId);

  if(!post){
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-background">
      <article className="container px-4 py-20">
        {/* Back to Blogs Button */}
        {/* <Button
          variant="ghost"
          className="mb-8 group hover:bg-transparent"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          />
          <span
            className="text-sm font-medium transition-colors group-hover:text-primary"
          >
            Back to All Blogs
          </span>
        </Button> */}

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, x:-100 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center"
          >
            {post?.title}
          </motion.h1>

          {/* Featured Image */}
          <motion.div initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }} className="relative w-full overflow-hidden mb-12">
            <img
              src={post?.image}
              alt={post?.title}
              // fill
              className="object-cover aspect-[16/9] w-full rounded-lg"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }} className="text-justify w-full items-center flex flex-col justify-center">

          <ReactMarkdown className="prose lg:prose-xl">{post?.content}</ReactMarkdown>
            </motion.div>

          {/* Introduction
          <p className="text-lg text-muted-foreground mb-12">
            {post?.content?.introduction}
          </p>

          {/* Main Content *
          <section className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                What Can AI Do for Acumatica Users?
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Collections & AR Follow-Up AI:
                  </h3>
                  <p className="text-muted-foreground">
                    Tired of chasing overdue invoices? Our AI solution
                    integrates seamlessly with Acumatica&apos;s AR data to automate
                    reminders, schedule calls, adjust payment terms, and
                    escalate issues when needed. Spend less time on follow-ups
                    and more on growing your business.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Sales Pipeline & Lead Engagement:
                  </h3>
                  <p className="text-muted-foreground">
                    Let AI handle inbound leads. From qualifying prospects to
                    scheduling follow-up tasks, our AI-powered sales assistant
                    keeps your pipeline moving so your team can focus on closing
                    deals. Integration with Acumatica&apos;s CRM ensures no
                    opportunity slips through the cracks.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Invoice Processing Co-Pilot:
                  </h3>
                  <p className="text-muted-foreground">
                    Reduce manual data entry and error rates. Our AI co-pilot
                    scans, validates, and matches invoices to purchase orders
                    within Acumatica. It even flags inconsistencies for human
                    review and learns from each interaction to improve accuracy
                    over time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Proactive Inventory Management:
                  </h3>
                  <p className="text-muted-foreground">
                    Never worry about stockouts or overstock again. Our AI agent
                    monitors stock levels, demand trends, and supplier
                    performance to autonomously generate purchase orders or send
                    reorder alerts. Stay ahead with predictive inventory
                    insights.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Key Benefits
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong>Efficiency:</strong> Automate mundane
                  tasks and free up valuable time for strategic planning.
                </li>
                <li>
                  <strong>Accuracy:</strong> Eliminate errors and
                  make informed decisions with real-time data.
                </li>
                <li>
                  <strong>Scalability:</strong> Adapt quickly to
                  changing business needs with flexible AI solutions.
                </li>
                <li>
                  <strong>Cost Savings:</strong> Optimize processes
                  to reduce operational expenses and increase ROI.
                </li>
                <li>
                  <strong>Acumatica Summit AI:</strong> Your Key to
                  Future-Ready ERP.
                </li>
              </ul>
            </div>

            <div>
              <p className="text-lg mb-8">
                Whether you&apos;re attending Acumatica Summit 2025 or searching for
                innovative ways to enhance your ERP, AI solutions tailored for
                Acumatica can redefine how you work. From collections automation
                to proactive inventory management, we provide powerful tools to
                empower your business.
              </p>

             
            </div>
          </section> */}
           <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }} className="flex justify-center mt-10">
                
                <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfiMB-IkhNT95tBWyC6du56ENayUlBPEZ4G6QGa5s3aEYKsNw/viewform?usp=sharing"
              target="_blank"
            >
              <Button size="lg" className="rounded-full">
                Book a Free Consultation
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Button>
            </Link>
              </motion.div>
        </div>
      </article>
    </div>
  );
}
