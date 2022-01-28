import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "../components/Avatar";
import HeaderResults from "../components/HeaderResults";

function Search() {

  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <HeaderResults />
    </div>
  );
}

export default Search;
