import "@/styles/globals.css";
import "@/styles/styles.css";
import { AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Providers";
// import Layout from "@/components/Layout";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Providers>
        <div className='main'>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <AnimatePresence mode='wait'>
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
          <Analytics />
        </div >
      </Providers>
    </>
  ); ``
}