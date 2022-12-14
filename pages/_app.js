import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50 bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      {/* Gives access to the authentication on the whole app */}

      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
