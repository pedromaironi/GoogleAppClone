import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "../components/Avatar";

function Search() {
  const router = useRouter();
  const searchHandlerRef = useRef();
  const search = (e) => {
    e.preventDefault();

    const term = searchHandlerRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
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
          <Avatar
            className="ml-auto"
            url="https://media.discordapp.net/attachments/936073527155654696/936360288276611142/unknown.png?width=566&height=566"
          />
        </div>

        {/* Header options */}

        <HeaderOption />
      </header>
    </div>
  );
}

export default Search;
