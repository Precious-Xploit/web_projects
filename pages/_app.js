import React from "react";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";
import "../styles/globals.css";
const app = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      {" "}
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};
export default app;
