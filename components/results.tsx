"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Plugins (already included in main package)
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const slides = [
  { src: "/images/1.png" },
  { src: "/images/2.png" },
  { src: "/images/3.png" },
  { src: "/images/4.png" },
  { src: "/images/5.png" },
  { src: "/images/6.png" },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
    <div className="p-6 flex flex-col items-center">
      <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          {/* <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex text-[#fa099b]">
                A Custom Approach to Your Success
              </span>
            </div> */}
            <h2
              className="text-white pb-4 font-nacelle text-3xl font-semibold md:text-4xl"
            >
              Proof Over Promises, <br />Real Results. Real Impact.
            </h2>
            <p className="text-lg text-white">
            See how people like your transformed their brand with our strategies. We don’t just talk results, we deliver them. Here’s the evidence.
            </p>
          </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center w-full max-w-5xl">
        {slides.map((slide, i) => (
          <div key={i} className="cursor-pointer">
            <Image
              src={slide.src}
              alt={`Image ${i + 1}`}
              width={300}
              height={200}
              className="rounded-lg shadow"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Fullscreen, Zoom, Thumbnails]}
      />
    </div>
    </div>
    </div>
  );
}
