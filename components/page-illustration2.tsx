import Image from "next/image";

export default function ImageColumnsSection() {
  const imagesColumn1 = [
    "https://cdn.prod.website-files.com/67b8601df718fa2c5bd47fa5/67b86f9f65e5f3f894a53317_image%203.png",
    "https://cdn.prod.website-files.com/67b8601df718fa2c5bd47fa5/67b86f9e46115ace8314d88f_image%208.png",
    "https://cdn.prod.website-files.com/67b8601df718fa2c5bd47fa5/67b86f9f65e5f3f894a53317_image%203.png",
    "https://cdn.prod.website-files.com/67b8601df718fa2c5bd47fa5/67b86f9e46115ace8314d88f_image%208.png",
  ];

  const imagesColumn2 = [
    "https://cdn.prod.website-files.com/67b8601df718fa2c5bd47fa5/67b86f9e51391e1ff161531f_image%205.png",
    "https://cdn.prod.website-files.com/67b8601df718fa2c5bd47fa5/67b86780994b0e3cc6cc11d9_image%201.png",
    "https://cdn.prod.website-files.com/67b8601df718fa2c5bd47fa5/67b86f9e51391e1ff161531f_image%205.png",
    "https://cdn.prod.website-files.com/67b8601df718fa2c5bd47fa5/67b86780994b0e3cc6cc11d9_image%201.png",
  ];

  const imagesColumn3 = [
    "https://cdn.prod.website-files.com/67b8601df718fa2c5bd47fa5/67b86f9e46115ace8314d88f_image%208.png",
    "https://cdn.prod.website-files.com/67b8601df718fa2c5bd47fa5/67b86f9ed874c045dc2b8ffb_image%207.png",
    "https://cdn.prod.website-files.com/67b8601df718fa2c5bd47fa5/67b86f9e46115ace8314d88f_image%208.png",
    "https://cdn.prod.website-files.com/67b8601df718fa2c5bd47fa5/67b86f9ed874c045dc2b8ffb_image%207.png",
  ];

  const renderImageList = (images: string[]) => (
    <div className="flex flex-col gap-4 animate-scroll-vertical">
      {images.map((src: string, idx: number) => (
        <div key={idx} className="overflow-hidden rounded-lg">
          <Image
            src={src}
            alt="scrolling"
            width={250}
            height={250}
            className="object-cover w-full h-auto rounded-xl"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden bg-black py-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-10 px-4 max-w-7xl mx-auto">
          <div className="opacity-30 backdrop-brightness-50">{renderImageList(imagesColumn1)}</div>
          <div className="opacity-30 backdrop-brightness-50">{renderImageList(imagesColumn2)}</div>
          <div className="opacity-30 backdrop-brightness-50">{renderImageList(imagesColumn3)}</div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white py-20 px-4">
        <p className="text-sm uppercase tracking-widest text-gray-300">I help founders and coaches build a powerful presence on LinkedIn, <br /> so they stop being invisible and start getting noticed by the right people.</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">You're Great at <br /> What You Do But No One Knows It Yet.</h1>
        <p className="text-lg text-gray-300 mt-4">Worked with founders, coaches & experts across the UK, US, and Middle East.</p>
        <button className="mt-8 px-6 py-3 border border-[#fec400] text-white rounded-full hover:bg-[#fec400] hover:text-black transition">
        Book a Free Strategy Call →
        </button>
      </div>
    </div>
  );
} 
