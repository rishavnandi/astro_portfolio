import type { AppProps } from "next/app";

// Analytics =>
import { Analytics } from "@vercel/analytics/react";

// Theme & global styles =>
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import NProgress from "@/components/nprogress";

// SEO =>
import { DefaultSeo } from "next-seo";
import nextSeoConfig from "next-seo.config";

// Other =>
import Header from "@/layout/header";
import Routing from "@/motions/routing";
import Warning from "@/components/warning";
import Footer from "@/layout/footer";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...nextSeoConfig} />
      <NProgress />
      <Header />
      <Routing key={router.route}>
        <Component {...pageProps} />
      </Routing>
      <Footer />
      <Analytics />
    </ThemeProvider>
  );
}

export const runtime = "edge";
