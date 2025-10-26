import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-[100px] bg-black text-white">
      <h1 className="text-4xl md:text-6xl mb-8 font-semibold font-public-sans">
        Not your average UI library
      </h1>

      <p className="max-w-2xl text-gray-300 text-lg md:text-xl mb-10 font-roboto">
        Where all UI looks similar make something different. Use Silver UI to
        build stunning, unique interfaces with ease.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link
          href="#components"
          className="px-6 py-3 border border-white text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          Browse Components
        </Link>
        <Link
          href="#docs"
          className="px-6 py-3 bg-white text-black rounded-lg border border-white hover:bg-transparent hover:text-white transition-colors duration-200"
        >
          Documentation &gt;
        </Link>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 opacity-80">
        <Image
          src="/logos/nextjs.svg"
          alt="Next.js"
          width={80}
          height={80}
          className="object-contain"
        />
        <Image
          src="/logos/tailwindcss.svg"
          alt="TailwindCSS"
          width={80}
          height={80}
          className="object-contain"
        />
        <Image
          src="/logos/motion.svg"
          alt="Motion"
          width={80}
          height={80}
          className="object-contain"
        />
        <Image
          src="/logos/shadcnui.svg"
          alt="shadcn/ui"
          width={80}
          height={80}
          className="object-contain"
        />
        <Image
          src="/logos/react.svg"
          alt="React"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
    </section>
  );
};
