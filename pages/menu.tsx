import React from "react";
import Menu from "../components/Menu";
import Navbar from "@/components/Navbar";

const menu = () => {
  return (
    <div className=" bg-gray-400">
      <Navbar />
      <div className="mb-20">
        <Menu />
      </div>
    </div>
  );
};

export default menu;
