import Image from "next/image";
import { Inter } from "next/font/google";
import image from "@/components/ui/image";
import '@fontsource-variable/tourney';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-neutral-800 flex flex-col items-start">

        {/* header */}
        <nav className="flex flex-row justify-start p-5">
          <p className="text-3xl font-bold text-white font-tourney">ECE Webring</p>
        </nav>

        {/* body */}
        <div class="grid grid-cols-2 grid-rows-1 gap-10 justify-center bg-slate-500 p-8">
          <div class="p-5 rounded-md"><image></image></div>
          <div class="p-5 rounded-md">bro</div>
        </div>

      </div>

  );
}
