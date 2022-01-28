import Head from "next/head";
import Avatar from "../components/Avatar";
import Google from "../components/Google";
import Footer from "../components/Footer";
import Header  from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*  Header */}
      <Header />

      {/* Body */}
      <Google />

      <Footer />
      {/* Footer */}
    </div>
  );
}
