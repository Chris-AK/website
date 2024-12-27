// src/components/Navbar.js

//import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

const navigation = [
    { name: "Chris AK", href: "https://linktr.ee/chris_ak"},
    { name: "Thinking", href: "https://chrisak.medium.com/" },
    { name: "Building", href: "https://github.com/Chris-AK/"},
    { name: "Creating", href: "https://on.soundcloud.com/zqsUmn726FoHA7336/"},
    { name: "Supporting", href: "https://us.movember.com/"},
  ];

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-4 md:flex-row items-center">
        <div className = "flex-none w-32">
        
            <a href={navigation[0].href} className="ml-3 text-xl text-white no-underline hover:underline"  target="_blank" rel="noopener noreferrer" >
            {navigation[0].name}
            </a>
        
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-300	flex flex-wrap items-center text-base justify-between text-white">
            <div className="flex-auto">
          <a href={navigation[1].href} className="mr-5 no-underline hover:underline text-white " target="_blank" rel="noopener noreferrer">
            {navigation[1].name}
          </a>
          </div><div className="flex-auto">
          <a  href={navigation[2].href}  className="mr-5 no-underline hover:underline text-white flex-auto" target="_blank" rel="noopener noreferrer">
            {navigation[2].name}
          </a>
          </div><div className="flex-auto">
          <a href={navigation[3].href} className="mr-5 no-underline hover:underline text-white flex-auto" target="_blank" rel="noopener noreferrer">
            {navigation[3].name}
          </a>
          </div><div className="flex-auto">
          <a href={navigation[4].href}  className="mr-5 no-underline hover:underline text-white flex-auto" target="_blank" rel="noopener noreferrer">
            {navigation[4].name}
          </a>
          </div>
        </nav>
      </div>
    </header>
  );
}