import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <meta name="robots" content="index, follow" />
        <meta name="author" content="RentalMotorKudus" />
        <meta name="keywords" content="rental motor, sewa motor, motorbike rental, affordable bike rental, Indonesia bike rental" />
        <meta
          name="description"
          content="Sewa motor dengan mudah dan cepat. Temukan motor terbaik untuk perjalanan Anda dengan harga terjangkau. Rental motor terpercaya di Indonesia."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rental Motor | Sewa Motor Terbaik & Terpercaya" />
        <meta property="og:description" content="Sewa motor cepat dan mudah dengan harga terbaik di Indonesia." />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:site_name" content="Rental Motor" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rental Motor | Sewa Motor Terbaik & Terpercaya" />
        <meta name="twitter:description" content="Sewa motor cepat dan mudah dengan harga terbaik di Indonesia." />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />

        <link rel="canonical" href="https://yourwebsite.com" /> */}

        <title>Rental Motor | Sewa Motor Terbaik & Terpercaya</title>
        <meta name="description" content="Sewa motor cepat dan mudah dengan harga terbaik di Indonesia." />

        <meta property="og:url" content="https://rentalmotorkudus.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rental Motor | Sewa Motor Terbaik & Terpercaya" />
        <meta property="og:description" content="Sewa motor cepat dan mudah dengan harga terbaik di Indonesia." />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/1057ab70-9c60-4bec-9d0c-7f9bfb5fcedf.png?token=3dGvTwu1K8VS6M6MY_q_4uKrRr_FPVUUgfIVotjeZd4&height=604&width=1200&expires=33276373810" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rentalmotorkudus.vercel.app" />
        <meta property="twitter:url" content="https://rentalmotorkudus.vercel.app/" />
        <meta name="twitter:title" content="Rental Motor | Sewa Motor Terbaik & Terpercaya" />
        <meta name="twitter:description" content="Sewa motor cepat dan mudah dengan harga terbaik di Indonesia." />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/1057ab70-9c60-4bec-9d0c-7f9bfb5fcedf.png?token=3dGvTwu1K8VS6M6MY_q_4uKrRr_FPVUUgfIVotjeZd4&height=604&width=1200&expires=33276373810" />

      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
