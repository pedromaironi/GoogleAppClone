import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

function Search() {
  const router = useRouter();
  const searchHandlerRef = useRef();
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form
          className="flex px-6 py-3 ml-10 mr-3 w-full border-gray-200 
        rounded-full shadow-lg max-w-3xl items-center"
        >
          <input
            type="text"
            ref={searchHandlerRef}
            className="flex-grow 
          focus:outline-none "
          onChange={()=>console.log(searchHandlerRef.current.value)}
          />
          {searchHandlerRef.current.value & (
            <XIcon
              className="h-7 mr-3 text-gray-500 cursor-pointer 
        transition duration-100 transform hover:scale-125"
              onClick={() => (searchHandlerRef.current.value = "")}
            />
          )}
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-5 ml-2 mr-3 text-gray-500" />
        </form>
      </header>
    </div>
  );
}

export default Search;
