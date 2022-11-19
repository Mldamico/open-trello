import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

export const Layout: FC<Props> = ({ title = "Open Trello", children }) => {
  return (
    <div className="flex-1 bg-lightPrimary dark:bg-darkPrimary dark:text-white">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="py-2 px-5"> {children}</div>
    </div>
  );
};
