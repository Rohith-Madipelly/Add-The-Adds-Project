import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchCSS.css";
import { getTemplatesAPI } from "../../../utils/APIcall";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import "./SearchResultsList.css";
// import "./SearchResult.css";

const SearchF = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [toDisplay, setToDisplay] = useState();
  const navigate = useNavigate();
  const fetchData = async (value) => {

  


    try {
      setToDisplay(true)

      const res = await getTemplatesAPI()
      console.log("<><", res.data.Data)
      const Data = res.data.Data
      console.log(Data)
      const filteredResults = Data.filter((user) => {
        return (
          value &&
          user &&
          user.img_name &&
          user.img_name.toLowerCase().includes(value.toLowerCase())
        );
      });
      console.log("msdhgf", filteredResults)
      setResults(filteredResults);
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
    console.log("searchRes", result)
    if (result.length === 0) {
      console.log("avunu anta ga")
      return (
        <div
          className="search-result"

        >
          No Data Found
        </div>
      );
    }

    return (
      <div
        className="search-result"
        // onClick={() => alert(`You selected ${result.img_name}!`) }
        onClick={() => { navigate(`/Edit Own Page/${result._id}`); }}
      >
        {result.img_name}
      </div>
    );
  };



  useEffect(() => {
    setToDisplay(false)
  }, [])

  const SearchResultsList = ({ results }) => {
    console.log("Asalu data unda sir", results)
    if (toDisplay) {
      if (results.length === 0) {
        console.log("No data found");
        return (
          <div className="results-list h-[50px]">
            <SearchResult result={results} />
          </div>
        );
      }
    }


    if (toDisplay) {
    return (
      <div className="results-list h-[135px]">
        {results.map((result, id) => (
          // console.log("RR",result.img_name)
          <SearchResult result={result} key={id} />
        ))}
      </div>
    );
  }
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
      {results && <SearchResultsList results={results} />}
      {/* {results && results.length > 0 ?<SearchResultsListNODATA />:""} */}
    </div>

  );
};

export default SearchF;
