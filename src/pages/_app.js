import "@/styles/globals.css";
import "@/styles/styles.css";
import { AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Providers";
import { Suspense } from "react";
// import Layout from "@/components/Layout";

const Loading = () => <div className="flex items-center justify-center h-screen">Loading...</div>;

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Providers>
        <div className='main'>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <Suspense fallback={<Loading />}>
            <AnimatePresence mode="wait">
              <Component key={router.route} {...pageProps} />
            </AnimatePresence>
          </Suspense>
          <Analytics />
        </div >
      </Providers>
    </>
  ); ``
}