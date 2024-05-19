import React from "react";
import { useState, useEffect } from "react";



function Quote() {
  const [quote, setQuote] = useState("default citation");
  const [author, setAutor] = useState("No ondvdvvde");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./learning.json");
        const json = await response.json();
        const rnd = Math.floor(Math.random() * json.length);
        setQuote(json[rnd].quote);
        setAutor(json[rnd].author);
       
      } catch (error) {
        console.error("Erreur lors de la récupération des citations :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=" p-5  h-full flex flex-col bg-slate-800 md:flex md:flex-row md:flex-grow md:p-9 md:pl-5 ">
        <div className=" flex-grow   text-gray-50 ">{quote}</div>
        <div className="h-1/6 flex justify-end items-center pr-4 md:p-3 md:pt-20  text-sky-300">{author}</div>
      </div>
    </>
  );
}

export default Quote;
