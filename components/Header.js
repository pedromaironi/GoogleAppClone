import { ViewGridIcon } from "@heroicons/react/solid";
import Image from "next/image";

function Header() {
  return (
    <header
      className="flex flex-row w-full p-5 justify-between
       text-sm text-gray-700"
    >
      {/* Left Section */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      {/* Right Section */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        {/* Icon */}
        <ViewGridIcon
          className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 
          cursor-pointer transition transform duration-110 hover:scale-110"
        />

        {/* Avatar */}

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
    </header>
  );
}

export default Header;
