"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RotateCcw } from "lucide-react"
// import { useState } from "react"

export default function Custom404() {
  // const [rotation, setRotation] = useState(0)

  // const spinCompass = () => {
  //   setRotation((prev) => prev + 360)
  // }

  return (
    <div className="flex flex-col items-center px-5 justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-secondary/20 text-foreground">
      <div className="text-center space-y-6 max-w-md">
        {/* <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse"></div>
          <Compass
            className="w-32 h-32 sm:w-40 sm:h-40 text-primary relative"
            style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.5s ease-out" }}
          />
        </div> */}

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          4<span className="text-primary inline-block">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold">Not Found</h2>

        <p className="text-lg sm:text-xl text-muted-foreground">
          Oops! The page you&apos;re looking for doesn&apos;t exist
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/" passHref>
            <Button size="lg" className="w-full sm:w-auto">
              <RotateCcw className="mr-2 h-4 w-4" /> Go back home
            </Button>
          </Link>
          {/* <Button variant="outline" size="lg" onClick={spinCompass} className="w-full sm:w-auto">
            Spin the compass
          </Button> */}
        </div>
      </div>
    </div>
  )
}

