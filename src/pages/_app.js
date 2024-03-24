import "@/styles/globals.css";
import { MemberProvider } from "@/context/MemberContext";

export default function App({ Component, pageProps }) {
  return (
    <MemberProvider>
      <Component {...pageProps} />
    </MemberProvider>
  );
}
