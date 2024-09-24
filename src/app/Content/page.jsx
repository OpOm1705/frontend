"use client";

import React, { useState } from "react";
import MessagePerson from "@/components/MesssagePerson";

const Home = () => {
  // State to store typed message and sent messages
  const [typedMessage, setTypedMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Function to handle sending message
  const handleSendMessage = () => {
    if (typedMessage.trim() !== "") {
      setMessages([...messages, { id: Date.now(), text: typedMessage }]);
      setTypedMessage(""); // Clear the input field
    }
  };

  // Function to handle deleting a message
  const handleDeleteMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <div className="h-screen py-[2%] text-white flex flex-row justify-between overflow-hidden scrollbar-hide bg-gradient-to-r from-cyan-900 via-cyan-900 to-cyan-900">
      <div className="w-[35.5%] h-[95%] overflow-auto scrollbar-hide bg-cyan-800 rounded-l-3xl ml-[2%] flex flex-col">
        <div className="flex flex-row rounded-tl-3xl h-[150px] items-center justify-between px-[4%] py-[5%]">
          <div className="flex justify-evenly items-center w-[50%]">
            <a href="/">
            <img src="/images/profile.svg" className="w-[50px] h-[50px]   rounded-full flex justify-center items-center">
            </img></a>
            <h1 className="text-4xl font-semibold">Chats</h1>
          </div>
          <div className="flex flex-row justify-between w-[15%]">
            <img src="/images/Msg.svg" alt="" />
            <img src="/images/more.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col">
          <hr />
          <div className="h-[90px] w-[100%] flex items-center pl-[5%]">
            <input
              className="flex w-[96%] border-2 rounded-xl bg-cyan-900 me-2 h-[40px] pl-[4%]"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <hr />
          <div className="flex justify-between px-[5%] h-[60px] items-center">
            <div className="flex w-[30%] justify-between">
              <img src="/images/archive.svg" alt="" />
              <a href="/">Archived</a>
            </div>
          </div>
          <hr />
          {/* You can replace with dynamic users */}
          <MessagePerson Name="John Doe" Last="Last message content here" />
          <hr />
          <MessagePerson Name="Jane Smith" Last="Another message here" />
        </div>
      </div>

      <div className="w-[60%] h-[95%] bg-cyan-800 rounded-r-3xl mr-[2%] flex flex-col">
        <div className="flex flex-row h-[80px] items-center">
          <div className="ml-[5%] h-[50px] w-[50px] rounded-full flex justify-center items-center mr-[4%]">
            img
          </div>
          <div className="flex flex-col mr-[60%]">
            <div>Name</div>
            <div>Online</div>
          </div>
          <div className="flex justify-between w-[15%]">
            <a href="/"><img src="/images/call.svg" alt="" /></a>
            <a href="/"><img src="/images/video_call.svg" alt="" /></a>
            <a href="/"><img src="/images/more.svg" alt="" /></a>
            
          </div>
        </div>
        <hr />

        {/* Main Content: Display Sent Messages */}
        <div className="h-[78%] px-[4%] overflow-y-auto">
          {messages.length === 0 ? (
            <p className="text-white text-center text-3xl mt-[10%] ">No messages yet. Start chatting!</p>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className="flex justify-between  w-[50%] items-center bg-cyan-900 p-2 my-2 rounded-lg"
              >
                <span className="text-white overflow-y-auto">{message.text}</span>
                <img
                  src="/images/delete.svg"
                  alt="Delete"
                  className="cursor-pointer w-[20px] h-[20px]"
                  onClick={() => handleDeleteMessage(message.id)}
                />
              </div>
            ))
          )}
        </div>
        <hr />

        {/* Input Section to Send Message */}
        <div className="flex flex-row items-center h-[10%] px-[4%] w-[100%]">
         <a href="/"> <img src="/images/add_reaction.svg" className="pr-[2%]" alt="" />
         </a>
          <div className="w-[100%] h-[100%]">
            <div className="h-[100%] w-[100%] flex items-center pl-[5%]">
              <input
                className="flex w-[96%] rounded-xl bg-cyan-900 h-[60%] pl-[4%] text-white"
                type="text"
                placeholder="Type message"
                aria-label="Message"
                value={typedMessage}
                onChange={(e) => setTypedMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <a href="/">
              <img
                src="/images/send.svg"
                className="pr-[2%] cursor-pointer"
                alt="Send"
                onClick={handleSendMessage}
              /></a>
              
            </div>
          </div>
          <a href="/">
          <img src="/images/mic.svg" className="pr-[2%] pl-[2%]" alt="" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Home;

