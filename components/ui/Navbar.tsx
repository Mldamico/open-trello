import NextLink from "next/link";
import React, { FC, useContext } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { UIContext } from "../../context/ui/UIContext";

export const Navbar: FC = () => {
  const { toggleSideMenu } = useContext(UIContext);
  return (
    <div className="sticky bg-[#4a148c]">
      <div className="py-3 px-6 flex items-center">
        <div>
          <HiOutlineMenuAlt1 size={24} onClick={toggleSideMenu} />
        </div>
        <NextLink href="/" passHref>
          <h1 className="text-xl md:text-2xl ml-3">Open Trello</h1>
        </NextLink>
      </div>
    </div>
  );
};
