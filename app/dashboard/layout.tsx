import React from "react";
import Sidebar from "../components/sidebar";
import { ReactNode } from "react";
type props = {
  children: ReactNode;
};

export default function layout({ children }: props) {
  return (
    <div className="space-y-6 text-sm h-full">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 h-full">
        <aside className="w-[18rem] p-5 h-full border-r-2 bg-[#191b1a]">
          <Sidebar></Sidebar>
        </aside>
        <div className="grow p-3 w-full max-w-full">{children}</div>
      </div>
    </div>
  );
}
