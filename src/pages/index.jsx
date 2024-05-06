import { Source_Code_Pro } from 'next/font/google';
import Search from '@/components/layouts/Search';
import Image from '@/components/layouts/Image';
import Head from 'next/head';
import '@fontsource-variable/tourney';
import Navbar from '@/components/layouts/Navbar';

const source_code_pro = Source_Code_Pro({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div
        className="inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]
                      space-y-16 pt-12 px-4 md:px-16 min-h-screen min-w-screen bg-stone-900 flex flex-col justify-between hover:cursor-cell"
      >
        <Head>
          <title>ECE Webring</title>
          <link rel="shortcut icon" href="/ece_ascii.svg"></link>
        </Head>
        <Navbar />

        <main
          className="flex items-center flex-col justify-center gap-[100px] h-min !mt-18 
                     lg:items-start lg:flex-row "
        >
          <Search />
          <Image />
        </main>

        {/* Centered vs. left aligned */}
        <footer className="flex justify-center h-10 font-mono text-white">
          <p>
            Made in&nbsp;
            <a
              href="https://github.com/roozbehali/ece_webring/pulls"
              target="_blank"
              className="text-yellow-500 transition duration-200 hover:text-yellow-700"
            >
              Waterloo.
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
