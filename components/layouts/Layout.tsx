import Head from "next/head";
import React, { FC, useState } from "react";
import { Navbar } from "../ui";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Sidebar } from "../ui/Sidebar";
interface Props {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

export const Layout: FC<Props> = ({ title = "Open Trello", children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="flex-1 bg-lightPrimary dark:bg-darkPrimary dark:text-white">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar openSidebar={toggleDrawer} />
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
        <Sidebar />
      </Drawer>
      <div className="py-2 px-5"> {children}</div>
    </div>
  );
};
