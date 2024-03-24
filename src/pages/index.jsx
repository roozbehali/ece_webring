import { Source_Code_Pro } from 'next/font/google';
import Search from '@/components/ui/search';
import Image from '@/components/ui/image';
import Head from 'next/head';
import '@fontsource-variable/tourney';
import Navbar from '@/components/layouts/Navbar';

const source_code_pro = Source_Code_Pro({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="space-y-16 py-12 px-16 min-h-screen min-w-screen bg-stone-900 flex flex-col items-start hover:cursor-cell inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]">
        <Head>
          <title>ECE Webring</title>
          <link rel="shortcut icon" href="/ece.ico"></link>
        </Head>
        <Navbar />

        <main className="grid w-full h-full !mt-18 lg:grid-cols-2">
          <Search />
          <Image />
        </main>

        {/* Centered vs. left aligned */}
        {/* <footer className="absolute bottom-0 left-0 flex items-center justify-center h-10 w-full font-mono bottom-4 text-neutral-300"> */}
        <footer className="absolute flex items-center justify-center h-10 font-mono bottom-4 text-neutral-300">
          <p>
            Made in&nbsp;
            <a
              href="https://github.com/roozbehali/ece_webring/pulls"
              target="_blank"
              className="text-yellow-500 hover:text-yellow-700"
            >
              Waterloo.
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
