import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="application-name" content="Rjwada" />
				<meta name="author" content="Web Team @Rjwada" />
				<meta
					name="description"
					content="Rjwada is an e-commerce experience company which develops an augmented reality fitting model where a person can try on the clothes in his/her app directly by simulating their body and fitting the desired cloth on them. We are building a B2B2C company, providing end-to-end 3D, AR and Virtual Try-on solutions.
					We help online sellers in creating customer experiences to get better retention, improved conversation rates & reduction in returns.

					Today, Rjwada stands as the most known startup in IITD, curating fashion, values, and tech to beautify the lives of the targeted customer base."
				/>
				<meta name="generator" content="Hugo 0.80.0" /> <meta name="mobile-web-app-capable" content="yes" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="android-chrome-512x512" sizes="512x512" href="/android-chrome-512x512.png" />
				<link rel="android-chrome-512x512" sizes="192x192" href="/android-chrome-512x512.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<meta name="theme-color" content="#7952b3" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<body className="App">
				<Main />
				<NextScript />

				<Script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js" strategy="beforeInteractive" />
				<Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" strategy="beforeInteractive" />
				<Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
			</body>
		</Html>
	);
}
