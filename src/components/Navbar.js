// src/components/Navbar.js

//import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="https://linktr.ee/chris_ak" className="ml-3 text-xl">
            Chris AK
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-300	flex flex-wrap items-center text-base justify-center">
          <a href="https://chrisak.medium.com/" className="mr-5 hover:text-black" target="_blank" rel="noopener noreferrer">
            Thinking
          </a>
          <a  href="https://github.com/Chris-AK/" className="mr-5 hover:text-black" target="_white" rel="noopener noreferrer">
            Building
          </a>
          <a href="https://opensea.io/collection/snappoetry/" className="mr-5 hover:text-white" target="_blank" rel="noopener noreferrer">
            Creating
          </a>
          <a href="https://us.movember.com/" className="mr-5 hover:text-white" target="_blank" rel="noopener noreferrer">
            Supporting
          </a>
        </nav>
      </div>
    </header>
  );
}