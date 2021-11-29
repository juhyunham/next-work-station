import Image from "next/image";
import { ChatIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon, VideoCameraIcon } from "@heroicons/react/outline";

import HeaderIcon from "./HeaderIcon";

function Header() {
    return (
        <div className="flex items-center pt-5 pb-5">
            <h1 className="flex items-center text-2xl">
                <span className="font-extrabold">SW</span>
            </h1>

            <div className="flex justify-center flex-grow">
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input
                        className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
                        type="text"
                        placeholder="검색해 주세요~"
                    />
                </div>
            </div>

            <div className="flex">
                <div className="flex space-x-2 md:space-x-2">
                    <HeaderIcon Icon={ChatIcon} />
                    <HeaderIcon Icon={VideoCameraIcon} />
                </div>
            </div>
        </div>
    );
}

export default Header;
