import Head from "next/head";
import React, { FC, useContext, useState } from "react";
import { Navbar } from "../ui";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Sidebar } from "../ui/Sidebar";
import { UIContext } from "../../context/ui/UIContext";
interface Props {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

export const Layout: FC<Props> = ({ title = "Open Trello", children }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleDrawer = () => {
  //   setIsOpen((prevState) => !prevState);
  // };
  const { sidemenuOpen, toggleSideMenu } = useContext(UIContext);
  return (
    <div className="flex-1 bg-lightPrimary dark:bg-darkPrimary dark:text-white">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Drawer open={sidemenuOpen} onClose={toggleSideMenu} direction="left">
        <Sidebar />
      </Drawer>
      <div className="py-2 px-5"> {children}</div>
    </div>
  );
};
