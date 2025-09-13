import Image from "next/image";
import FounderImg from "@/public/images/Hashim.jpg";
import CoFounderImg from "@/public/images/Mariyum.jpg";

export default function FoundersSection() {
  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold">Founders</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Founder Card - Yellow */}
          <div className="mx-auto max-w-md w-full">
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-black p-px 
              before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 
              before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] 
              before:rounded-full before:bg-[#fec400]/80 before:opacity-0 before:blur-3xl 
              before:transition-opacity before:duration-500 
              after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 
              after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] 
              after:rounded-full after:bg-[#fec400] after:opacity-0 after:blur-3xl 
              after:transition-opacity after:duration-500 hover:after:opacity-20 
              group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-black border border-[#fec400]">
                <div className="flex justify-center pt-4">
                  <div className="rounded-xl shadow-[0_0_30px_#fec400]">
                    <Image
                      src={FounderImg}
                      alt="Founder"
                      width={360}
                      height={220}
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="p-6 text-white text-left mt-5">
                  <h3 className="text-2xl font-bold mb-1">Mohd Hashim</h3>
                  <p className="text-sm text-gray-200">Founder</p>
                  <p className="mt-3 text-base leading-relaxed">
                    Visionary entrepreneur driving innovation and excellence, laying the foundation for industry leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Co-Founder Card - Pink */}
          <div className="mx-auto max-w-md w-full">
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-black p-px 
              before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 
              before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] 
              before:rounded-full before:bg-[#fa099b]/80 before:opacity-0 before:blur-3xl 
              before:transition-opacity before:duration-500 
              after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 
              after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] 
              after:rounded-full after:bg-[#fa099b] after:opacity-0 after:blur-3xl 
              after:transition-opacity after:duration-500 hover:after:opacity-20 
              group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-black border border-[#fa099b]">
                <div className="flex justify-center pt-4">
                  <div className="rounded-xl shadow-[0_0_30px_#fa099b]">
                    <Image
                      src={CoFounderImg}
                      alt="Co-Founder"
                      width={360}
                      height={220}
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="p-6 text-white text-left mt-5">
                  <h3 className="text-2xl font-bold mb-1">Mariyum Hafeez</h3>
                  <p className="text-sm text-gray-200">Co-Founder</p>
                  <p className="mt-3 text-base leading-relaxed">
                    Strategic partner focused on growth, partnerships, and scaling operations to maximize impact and reach.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
