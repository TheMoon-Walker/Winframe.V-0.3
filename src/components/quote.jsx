import { useState, useEffect } from "react";

function Quote() {
  const [quote, setQuote] = useState("default citation");
  const [author, setAuthor] = useState("No one");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./quote.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        const rnd = Math.floor(Math.random() * json.length);
        // rnd = 8
        setQuote(json[rnd].quote);
        setAuthor(json[rnd].author);
      } catch (error) {
        console.error("Erreur lors de la récupération des citations :", error);
      }
    };

    fetchData();
  }, []);



  // function getAuthor({author}){
  //   const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(author)}`;
  // }

  function handleSearchClick({author}){
    return alert('hell is cold',{author})
    //ce que j'essayait de faire avant d'aller reprendre
    //la formation javasript : diriger le user vers une page google avec 
    //la recherche de l'auteur

  }

  return (
    <blockquote className="p-5 h-full flex flex-col bg-slate-800 md:flex-row md:p-9">
      <div className="flex-grow lg:pl-8 text-gray-50">{quote}</div>
      <a href='#' onClick={handleSearchClick}><cite className="flex justify-end items-center pr-4 text-sky-300">{author}</cite></a>
    </blockquote>
    // <div className="p-5 h-full flex flex-col bg-slate-800 md:flex-row md:p-9">
    //   <div className="flex-grow lg:pl-8 text-gray-50">
    //     {quote}
    //   </div>
    //   <div className="flex justify-end items-center pr-4 text-sky-300">
    //     {author}
    //   </div>
    // </div>
  );
}

export default Quote;
