export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration2 from "@/components/page-illustration2";
import Hero from "@/components/hero-home";
import Hero2 from "@/components/hero-home2";
import Hero3 from "@/components/hero-home3";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration2 />
      <Hero3 />
      {/* <Hero />
      <Hero2 /> */}
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
