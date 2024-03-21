import { Inter } from "next/font/google";
import Search from "@/components/ui/search";
import Head from 'next/head'
import '@fontsource-variable/tourney';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-neutral-900 flex flex-col items-start hover:cursor-cell inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]">
      <Head>
        <title>ECE Webring</title>
        <link rel="shortcut icon" href="/ece.ico"></link>
      </Head>

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
          <div>Made in&nbsp;</div>
          <a href="https://github.com/roozbehali/ece_webring/pulls" target="_blank" class="text-indigo-500 hover:text-indigo-600">Waterloo.</a>
        </div>

      </div>
  );
}
