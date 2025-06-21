import Image from "next/image";
import HeroImage from "@/public/images/hero-image-01.jpg";

export default function HeroHome2() {
    return (
        <section className="min-h-[70vh] flex items-center">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-x-16 py-10 md:py-16">

                    {/* Right Side - Text Content (since we reversed the flex direction) */}
                    <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                        <h1
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#ffe5f0,#fbb6d5,#fff0f7,#fbb6d5,#ffe5f0)] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                            data-aos="fade-up"
                        >
                            Empower your team with automation
                        </h1>



                        <p
                            className="mb-8 text-xl text-indigo-200/65"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            Our platform lets your team automate repetitive tasks, freeing time
                            for creative work and better product decisions. Get started in
                            minutes and see immediate results.
                            Our platform lets your team automate repetitive tasks, freeing time
                            for creative work and better product decisions. Get started in
                            minutes and see immediate results.
                            Our platform lets your team automate repetitive tasks, freeing time
                            for creative work and better product decisions. Get started in
                            minutes and see immediate results.
                        </p>

                        <div className="flex flex-col sm:flex-row sm:justify-start">
                            <div data-aos="fade-up" data-aos-delay={400}>
                                <a
                                    className="btn group mb-4 sm:mb-0 sm:mr-4 bg-[#fa099b] text-white py-[10px] px-6 rounded shadow-md hover:bg-[#ff7a1b] transition-all duration-200"
                                    href="#0"
                                >
                                    <span className="relative inline-flex items-center">
                                        Get Started
                                        <span className="ml-1 tracking-normal text-white/70 transition-transform group-hover:translate-x-0.5">
                                            -&gt;
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div data-aos="fade-up" data-aos-delay={600}>
                                <a
                                    className="btn w-full sm:w-auto bg-gray-800 text-gray-300 border border-gray-700 py-[10px] px-6 rounded hover:bg-gray-700 transition-all duration-200"
                                    href="#0"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Left Side - Image */}
                    <div className="md:w-1/2 flex justify-center md:justify-start">
                        <Image
                            src={HeroImage}
                            alt="Hero Illustration"
                            width={550}
                            height={400}
                            className="rounded-lg shadow-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
