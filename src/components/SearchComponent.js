import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import searchableContent from "./searchableContent";
import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const highlightContent = (content, term) => {
    const regex = new RegExp(`(${term})`, "gi");
    return content.replace(regex, '<span class="highlight">$1</span>');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setSearchResults([]);
      setIsVisible(false);
      return;
    }

    const results = searchableContent
      .map((entry) => {
        if (!entry.sections) return null;
        const sections = entry.sections
          .filter((section) => section.content.toLowerCase().includes(term))
          .map((section) => ({
            ...section,
            content: highlightContent(section.content, term),
          }));
        return { ...entry, sections };
      })
      .filter((entry) => entry && entry.sections.length > 0);

    setSearchResults(results);
    setIsVisible(true);
  };

  const handleResultClick = (page, sectionId) => {
    navigate(`/${page}`, { state: { searchTerm, sectionId } });
  };

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="rounded-full py-2 px-4 border border-gray-600 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button type="submit" className="searchbutton ml-6 px-4">
          <FaSearch />
        </button>
      </form>
      {isVisible && searchResults.length > 0 && (
        <div className="bg-gray-800 border border-gray-600 rounded shadow-lg p-4 absolute top-full mt-2 w-full max-h-60 overflow-y-auto">
          <h4 className="font-bold mb-2 text-gray-200">Search Results:</h4>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index} className="mb-2">
                {result.sections.map((section, sectionIndex) => (
                  <button
                    key={sectionIndex}
                    onClick={() =>
                      handleResultClick(result.page, section.sectionId)
                    }
                    className="block text-left w-full text-indigo-400 hover:text-indigo-500"
                  >
                    {Capitalize(section.id)} &rarr;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: section.content,
                      }}
                      className="block mt-1 text-gray-400"
                    />
                  </button>
                ))}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
