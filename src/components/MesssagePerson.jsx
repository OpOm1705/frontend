"use client";

import React, { useState } from "react";

const MesssagePerson = ({Name , Last }) => {
  return (
    <div className=" w-[100%] h-[70px] pl-[5%]  flex items-center">
        
      <div className="w-[55px] h-[55px] mr-[5%]  rounded-full flex justify-center items-center ">
        img
      </div>
      <div className="flex flex-col ">
        <a className="text-xl font-semibold">{Name}</a>
        <a className="text-xs font-thin">{Last} </a>
      </div>
      <a href="/" className="ml-[50%] pr-[4%] ">
        <img src="/images/call.svg"  alt="" />
      </a>
      
    </div>
  );
};

export default MesssagePerson;
