import React from "react"

const quotes = ["Do not go where the path may lead, go instead where there is no path and leave a trail",
                "Never let the fear of striking out keep you from playing the game",
                "Success usually comes to those who are too busy to be looking for it",
                "Succesful people do what unsuccesful people don't do",
                "Focus on your circle of influence not your circle of concern",
                "People will forget what you said, people will forget what you did, but people will never forget how you made them feel",
                "You need not to be great to start but you need to start to be great",
                "An unexamined life is not worth living.",
                "Who dares, wins",
                "There is no finish line"]


export default function Quote() {
    return (
      <section id="quote" >
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center" >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white italic ">
             {quotes[Math.floor(Math.random() * quotes.length)]}
            </h1>
          </div>
          
        </div>
      </section>
    );
  }


