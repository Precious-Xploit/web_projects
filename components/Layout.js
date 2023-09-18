import React from "react";
import Head from "next/head";
const Layout = ({ children, ...pageProps }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content={
            children.props.description
              ? children.props.description
              : pageProps.description
          }
        />
        <meta
          name="keywords"
          content={
            children.props.keywords
              ? children.props.keywords
              : pageProps.keywords
          }
        />
        <meta name="author" content={process.env.SITENAME} />
        <meta
          property="og:title"
          content={
            children.props.title ? children.props.title : pageProps.title
          }
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={children.props.img ? children.props.img : pageProps.img}
        />
        <meta
          property="og:url"
          content={children.props.link ? children.props.link : pageProps.link}
        />
        <meta
          name="twitter:card"
          content={
            children.props.description
              ? children.props.description
              : pageProps.description
          }
        />
        <meta
          property="og:description"
          content={
            children.props.description
              ? children.props.description
              : pageProps.description
          }
        />
        <meta property="og:site_name" content={process.env.SITENAME} />
        <meta
          name="twitter:image:alt"
          content={
            children.props.title ? children.props.title : pageProps.title
          }
        />
        <title>
          {children.props.title ? children.props.title : pageProps.title}
        </title>
      </Head>
      <main>{children}</main>
    </>
  );
};
Layout.defaultProps = {
  title: "Iskysoftic:Buy websites and Apps get value for your money",
  description:
    "Buy world class websites/themes and apps for your business needs.Buy E-commerce shops,company websites, school management sites, company websites, investment management websites, social media websites and apps etc at the best price even while getting the best value for your money.",
  img: "../assets/logo.png",
  keywords:
    "buy,webites,apps,e-commerce,cheap,company,investment,brokers,themes,school,management",
};
export default Layout;
