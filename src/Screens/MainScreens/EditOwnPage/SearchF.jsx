import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchCSS.css";
import { getTemplatesAPI } from "../../../utils/APIcall";
import { useSelector } from "react-redux";
// import "./SearchResultsList.css";
// import "./SearchResult.css";

const SearchF = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const token = useSelector((state) => state.token)

  const fetchData = async (value) => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(filteredResults);
      });


    try {
      const res = await getTemplatesAPI(token)
      console.log("<><", res.data.Data)
    }
    catch (e) {
      console.log("Hello", e)
    }
    finally {
      console.log("sda")
    }


  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const SearchResult = ({ result }) => {
    return (
      <div
        className="search-result"
      // onClick={() => alert(`You selected ${result.name}!`) }
      // onClick={()=>{} }
      >
        {result.name}
      </div>
    );
  };

  const SearchResultsList = ({ results }) => {
    return (
      <div className="results-list h-[135px]">
        {results.map((result, id) => (
          <SearchResult result={result} key={id} />
        ))}
      </div>
    );
  };

  return (

    <div className="search-bar-container  w-[40%] sm:w-[80%] h-[50px] gap-[35px] left-0 bottom-0 right-0 top-0 px-[40px] m-auto text-black-900_cc tracking-[1.00px] font-outfit text-xl bg-white-A700 shadow-sm absolute rounded-[10px] z-0">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          className="ms-2"
        />
      </div>
      {/* {results && results.length > 0 && <SearchResultsList results={results} />} */}
    </div>

  );
};

export default SearchF;
