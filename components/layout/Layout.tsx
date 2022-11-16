import Head from "next/head";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import {useState, useEffect} from 'react'

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ title = "", children }: Props) => {
  const theme = {
    colors: {
      primary: "#0081FF",
      secondaryText: "#606265",
      gray2: "#8a8d90",
      gray5: "#f4f5f5",
    },
  };

  // This is just to to Solve a React Alert
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])

  return (
    <>
      <Head>
        <title>IAMX - NFT-Identity</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="NFT-Identity" />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    {  
    mounted&&
      <div>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </div>
    }
    </>
  );
};

export default Layout;
