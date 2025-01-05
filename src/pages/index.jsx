import Head from 'next/head';
import Search from '@/components/layouts/Search';
import Image from '@/components/layouts/Image';
import Navbar from '@/components/layouts/Navbar';
import '@fontsource-variable/tourney';

export default function Home() {
  return (
    <>
      <div className="inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]
                      space-y-16 pt-12 px-16 min-h-screen min-w-screen bg-stone-900 flex flex-col justify-between hover:cursor-cell">
        <Head>
          <title>ECE Webring</title>
        </Head>
        
        <Navbar />

        <main className="flex flex-row justify-center gap-[100px] flex-wrap h-min !mt-18">
          <Search />
          <Image />
        </main>

        <footer className="flex justify-center h-10 font-mono text-white">
          <p>
            Made in&nbsp;
            <a
              href="https://github.com/roozbehali/ece_webring/pulls"
              target="_blank"
              rel="noreferrer"
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
