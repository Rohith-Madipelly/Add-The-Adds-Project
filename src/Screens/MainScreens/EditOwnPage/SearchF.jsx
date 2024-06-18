import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchCSS.css";
import { getTemplatesAPI, searchAPI } from "../../../utils/APIcall";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import "./SearchResultsList.css";
// import "./SearchResult.css";

const SearchF = () => {
  const [results, setResults] = useState([]);
  const [additional, setAddtional] = useState([]);
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
      toast.error('User Not Found',)
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
      if (error.response) {
        if (error.response.status === 401) {

        } else if (error.response.status === 404) {

          toast.error('User Not Found', { position: toast.POSITION.TOP_CENTER })
        } else if (error.response.status === 500) {
          toast.error('Internal server error', { position: toast.POSITION.TOP_CENTER })
        } else {
          toast.error('An error occurred during .', { position: toast.POSITION.TOP_CENTER })
        }
      } else if (error.request) {
        toast.error('No response received from the server.', { position: toast.POSITION.TOP_CENTER })
      } else {
        toast.error('Error setting up the request.', { position: toast.POSITION.TOP_CENTER })
      }
    }
    finally {
      console.log("sda")
    }


  }








  const fetchUserData = async (value) => {
    try {
      const res = await searchAPI(value)

      if(res)
        {
          const extractedPageNames = res.data.map(item => item.pageName);
          setAddtional(extractedPageNames)
          console.log(extractedPageNames)
        }
  


    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);

    // useEffect(() => {
    fetchUserData(value)
    // }, [])
  };

  const SearchResult = ({ result, api }) => {
    console.log("searchRes", result, ">>>>", api)
    
    if (!result) {

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
        // onClick={() => { navigate(`/Edit Own Page/${result._id}`); }}
        onClick={() => { navigate(`/Add Page/${result}`); }}
      >
        {/* {result ? result.img_name : result}cars */}
        {result}'s  Page
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
            <SearchResult result={results} api={additional} />
          </div>
        );
      }
      // else if (additional.length === 0) {
      //   console.log("No data found");
      //   return (
      //     <div className="results-list h-[50px]">
      //       <SearchResult result={results} api={additional} />
      //     </div>
      //   );
      // }
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


  const SearchResultsListforAPi = ({ results }) => {
    console.log("madam pai a>>>>>>>>>>>>>>>>>>>>>>", results)
    if (toDisplay) {
      if (results.length === 0) {
        console.log("No data found");
        return (
          <div className="results-list h-[50px]">
            <SearchResult api={results} />
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
          placeholder="Search here for users page"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          className="ms-2"
        />
      </div>
      {/* {results && <SearchResultsList results={results} />} */}
      {additional && <SearchResultsListforAPi results={additional} />}

      {/* {results && results.length > 0 ?<SearchResultsListNODATA />:""} */}
    </div>

  );
};

export default SearchF;
