import "@/styles/globals.css";
import { MemberProvider } from "@/context/MemberContext";
import { Analytics } from "@vercel/analytics/react";  

export default function App({ Component, pageProps }) {
  return (
    <MemberProvider>
      <Component {...pageProps} />
      <Analytics />
    </MemberProvider>
  );
}
