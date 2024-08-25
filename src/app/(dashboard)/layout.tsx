import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex">
      {/* left sidebar */}
      <div className="w-[60px] lg:w-[170px] xl:w-[250px] flex-shrink-0  p-4 ">
        <Logo />
        <Menu />
      </div>
      {/* main content */}
      <div className="flex-grow bg-[#F7F8FA] overflow-y-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
