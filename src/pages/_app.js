import "@/styles/globals.css";
import "@/styles/styles.css";
import { AnimatePresence } from 'framer-motion';
import Layout from "@/components/Layout";

export default function App({ Component, pageProps, router }) {
  return (
    <Layout>
      <div className='main'>
        <AnimatePresence mode='wait'>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </div>
    </Layout>
  );
}