import { Source_Code_Pro } from 'next/font/google';
import Search from '@/components/ui/search';
import Head from 'next/head';
import '@fontsource-variable/tourney';

const source_code_pro = Source_Code_Pro({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="space-y-16 py-12 px-16 min-h-screen min-w-screen bg-zinc-950 flex flex-col items-start hover:cursor-cell inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]">
        <Head>
          <title>ECE Webring</title>
          <link rel="shortcut icon" href="/ece.ico"></link>
        </Head>
        <nav className="flex flex-row justify-start">
          <p className="text-3xl font-bold text-white font-tourney">
            ECE Webring
          </p>
        </nav>

        <main className="grid w-full h-full !mt-36 lg:grid-cols-2">
          <Search />
          <div className="flex items-center justify-center p-8 text-white rounded-lg">
            <p>wip</p>
          </div>
        </main>

        <footer className="fixed flex items-center justify-center h-10 max-w-full font-mono bottom-4 text-neutral-300">
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
