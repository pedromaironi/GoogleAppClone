import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "../components/Avatar";

import HeaderOptions from "./HeaderOptions";

function HeaderResults() {
  const router = useRouter();
  const searchHandlerRef = useRef();
  const search = (e) => {
    e.preventDefault();

    const term = searchHandlerRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form
          className="flex flex-grow px-6 py-3 ml-10 mr-3 w-full border-gray-200 
        rounded-full shadow-lg max-w-3xl items-center "
        >
          <input
            type="text"
            ref={searchHandlerRef}
            className="flex-grow focus:outline-none "
          />
          <XIcon
            className="h-7 mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchHandlerRef.current.value = "")}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300          cursor-pointer" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Image
          loading="lazy"
          src="https://media.discordapp.net/attachments/936073527155654696/936360288276611142/unknown.png?width=566&height=566"
          className="h-10 rounded-full cursor-pointer
       transition duration-150 transform hover:scale-110 ml-auto"
          alt="profile pic"
          width={44}
          height={44}
        />
      </div>

      {/* Header options */}
      <HeaderOptions />
    </header>
  );
}

export default HeaderResults;
