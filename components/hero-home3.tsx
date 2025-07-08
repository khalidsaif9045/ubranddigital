import Image from "next/image";
import HeroImage from "@/public/images/hero-image-01.jpg";
import './heroStyle.css';

export default function HeroHome3() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#ffd7b3,#fda95c,#ffe8d5,#fda95c,#ffd7b3)] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Personal Branding That Actually Works
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We transform successful Entrepreneurs into Industry leaders through strategic LinkedIn Authority that builds Influence, Credibility, and Premium Positioning

              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                <div className="typewriter text-2xl text-white">Where thought leaders are made.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
