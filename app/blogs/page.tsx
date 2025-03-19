"use client";

import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/constants/blog-data";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
// import { useState } from "react";

export default function Blogs() {
  const router = useRouter(); // Get router instance
  // const [selectedBlogId,setSelectedBlogId] = useState(null);

  // const blogPosts = [
  //   {
  //     id: 1,
  //     title:
  //       "Acumatica Summit AI: Revolutionizing ERP with Intelligent Solutions",
  //     date: "Jan 20, 2025",
  //     image: "https://picsum.photos/seed/acumatica/1200/800",
  //     category: "Enterprise",
  //   },
  //   {
  //     id: 2,
  //     title:
  //       "From AI DJs to Custom Playlists: How Spotify is Personalizing the Soundtrack of Your Life",
  //     date: "Nov 9, 2024",
  //     image: "https://picsum.photos/seed/spotify/1200/800",
  //     category: "Entertainment",
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Revolutionizing Pharma with AI: Inside Pfizer's AI-Driven Innovation",
  //     date: "Nov 9, 2024",
  //     image: "https://picsum.photos/seed/pfizer/1200/800",
  //     category: "Healthcare",
  //   },
  //   {
  //     id: 4,
  //     title:
  //       "Leading the AI Revolution in Finance: How JPMorgan Chase is Shaping the Future of Banking",
  //     date: "Nov 6, 2024",
  //     image: "https://picsum.photos/seed/jpmorgan/1200/800",
  //     category: "Finance",
  //   },
  //   {
  //     id: 5,
  //     title:
  //       "The Future of Customer Service: How Bella Santé Used AI to Drive $66K in Sales",
  //     date: "Oct 29, 2024",
  //     image: "https://picsum.photos/seed/bellasante/1200/800",
  //     category: "Customer Service",
  //   },
  //   {
  //     id: 6,
  //     title:
  //       "Smarter, Faster, Better: How Redfin Uses AI to Redefine Home Buying",
  //     date: "Oct 23, 2024",
  //     image: "https://picsum.photos/seed/redfin/1200/800",
  //     category: "Real Estate",
  //   },
  //   {
  //     id: 7,
  //     title:
  //       "Tech Over Tradition: How Keller Williams is Leading Real Estate with AI and Innovation",
  //     date: "Oct 23, 2024",
  //     image: "https://picsum.photos/seed/kellerwilliams/1200/800",
  //     category: "Real Estate",
  //   },
  // ];

  // interface BlogPost {
  //     id: number;
  //     title: string;
  //     date: string;
  //     image: string;
  //     category: string;
  // }

  interface HandleBlogClick {
    (blogId: number): void;
  }

  const handleBlogClick: HandleBlogClick = (blogId) => {
    console.log(blogId);
    // setSelectedBlogId(blogId);
    router.push(`/blogs/${blogId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Blogs
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover inspiring success stories made possible by AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                // delay: index%2 * 0.2,
                ease: "easeOut",
                amount:0.2,
              }}
              viewport={{ once: true }}
              key={post.id}
              onClick={() => handleBlogClick(post.id)}
              id={`bqigeb_${index}`}
            >
              <Card className="overflow-hidden shadow-none cursor-pointer group border-4 border-transparent hover:border-primary hover:scale-105 transition-all ease-in-out duration-300">
                <CardContent className="p-0" id={`lcdfb0_${index}`}>
                  <div
                    className="relative  overflow-hidden rounded-lg mb-4"
                    id={`jtmqzq_${index}`}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full lg:h-[350px] h-[250px] transition-transform duration-300 group-hover:scale-105"
                      id={`gogf6t_${index}`}
                    />
                  </div>
                  <div className="space-y-2 px-6 pb-6" id={`t2exey_${index}`}>
                    <p
                      className="text-sm text-muted-foreground"
                      id={`2j8nwh_${index}`}
                    >
                      {post.date}
                    </p>
                    <h2
                      className="text-2xl font-semibold leading-tight group-hover:text-primary transition-colors"
                      id={`rn36yu_${index}`}
                    >
                      {post.title}
                    </h2>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
