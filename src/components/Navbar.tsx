import React from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <SearchBar />
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="Logo" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="Logo" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full">
            <span className="text-xs">1</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3  font-medium">Basem Baddour</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="Avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
