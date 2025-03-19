import { Testimonials } from "@/components/home/testimonials";
import React, { Suspense } from "react";

const TestimonialsPage = () => {
  return (
    <Suspense>
      <Testimonials />
    </Suspense>
  );
};

export default TestimonialsPage;
