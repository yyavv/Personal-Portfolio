// Searching makes text lowercase characters
// After seaching finishes the searched text stays yellow again and results not disappear
import React, { useState, useRef, useEffect } from "react";

const SearchHighlight = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const resultsRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.trim();
    if (!term) {
      setSearchResults([]);
      return;
    }

    const container = document.querySelector(".searchable-content");
    if (!container) return;

    const elements = container.querySelectorAll("*:not(script):not(style)");
    let foundResults = [];

    elements.forEach((element) => {
      if (element.children.length === 0) {
        const text = element.textContent;
        const lowerText = text.toLowerCase();
        const lowerTerm = term.toLowerCase();
        if (lowerText.includes(lowerTerm)) {
          const matchIndex = lowerText.indexOf(lowerTerm);
          const matchText = text.substring(
            matchIndex,
            matchIndex + term.length
          );
          foundResults.push({ text: matchText.trim(), element, matchIndex });
        }
      }
    });

    setSearchResults(foundResults);
  };

  const handleResultClick = (result) => {
    const { element, matchIndex } = result;
    const originalText = element.textContent;
    const highlightedText = `${originalText.substring(
      0,
      matchIndex
    )}<span class="highlight">${originalText.substring(
      matchIndex,
      matchIndex + searchTerm.length
    )}</span>${originalText.substring(matchIndex + searchTerm.length)}`;

    element.innerHTML = highlightedText;
    element.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      element.querySelector(".highlight").style.backgroundColor = "transparent";
      setTimeout(() => {
        element.innerHTML = originalText;
      }, 500); // Match the transition duration
    }, 2000);

    setSearchResults([]);
  };

  const handleClickOutside = (e) => {
    if (resultsRef.current && !resultsRef.current.contains(e.target)) {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container flex items-center relative">
      <form onSubmit={handleSearch} className="relative mb-4 flex items-center">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          type="text"
          className="rounded-full py-2 px-4 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white rounded-full p-1 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Search"
        >
          🔍
        </button>
      </form>
      {searchResults.length > 0 && (
        <div
          ref={resultsRef}
          className="bg-white text-black rounded p-4 shadow-lg absolute top-full mt-2 w-full max-h-40 overflow-y-auto"
        >
          <h4 className="font-bold mb-2">Search Results:</h4>
          <ul className="list-disc list-inside">
            {searchResults.map((result, index) => (
              <li
                key={index}
                className="overflow-hidden text-ellipsis whitespace-nowrap"
              >
                <button
                  className="text-blue-500 underline"
                  onClick={() => handleResultClick(result)}
                >
                  {result.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchHighlight;
