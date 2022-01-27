import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { useRouter } from "next/router";

function Google() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    // console.log(term);

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <form
      className="flex flex-col items-center mt-44
        flex-grow w-4/5"
    >
      <Image
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={100}
        width={300}
      />

      <div
        className="flex w-full mt-5 hover:shadow-lg 
        focus-within:shadow-lg max-w-md rounded-full 
        border border-gray-200 px-5 py-3 items-center
        sm:max-w-xl lg:max-w-2xl
        "
      >
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          className="focus:outline-none flex-grow"
        />
        <MicrophoneIcon className="h-5 ml-3 text-gray-500" />
      </div>

      <div
        className="flex flex-col w-1/2 space-y-2 justify-center mt-8
        sm:space-y-0 sm:flex-row sm:space-x-4
        "
      >
        <buttons className="btn text-center" onClick={search}>
          Google Search
        </buttons>
        <buttons className="btn text-center" onClick={search}>
          I'm Feeling Lucky
        </buttons>
      </div>
    </form>
  );
}

export default Google;
