
import React from "react"

import Navbar from "./components/Navbar"
import Scratch from "./components/Scratch"
import Quote from "./components/Quote"
import About from "./components/About"


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font" > 
      <Navbar />
      <Quote />
      <About />
    </main>
  );
}
