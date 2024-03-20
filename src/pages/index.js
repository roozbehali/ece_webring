import Image from "next/image";
import { Inter } from "next/font/google";
import image from "@/components/ui/image";
import Search from "@/components/ui/search";
import '@fontsource-variable/tourney';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-neutral-800 flex flex-col items-start">

        {/* header */}
        <nav className="flex flex-row justify-start p-5 pb-10">
          <p className="text-3xl font-bold text-white font-tourney">ECE Webring</p>
        </nav>

        {/* body */}
        <div class="grid grid-cols-2 grid-rows-1 gap-40 flex items-center justify-center p-40 pt-20 w-screen space-x-4 mb-auto">
          <div class="p-5 rounded-lg flex items-center justify-start p-8">
            <Search></Search>
          </div>
          <div class="p-5 rounded-lg flex items-center justify-center p-8 text-white">
            <p>wip</p>
          </div>
        </div>

        {/* footer */}
        <div class="h-10 flex items-center justify-center w-full font-mono text-neutral-300">
          <div>Made in Waterloo.</div>
        </div>

      </div>

  );
}
