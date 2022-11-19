import React, { FC } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

type Props = {
  openSidebar: () => void;
};

export const Navbar: FC<Props> = ({ openSidebar }) => {
  return (
    <div className="sticky bg-[#4a148c]">
      <div className="py-3 px-6 flex items-center">
        <div>
          <HiOutlineMenuAlt1 size={24} onClick={openSidebar} />
        </div>
        <h1 className="text-xl ml-3">Open Trello</h1>
      </div>
    </div>
  );
};
