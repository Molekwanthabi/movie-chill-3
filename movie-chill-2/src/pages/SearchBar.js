import React, { useState } from "react";
import axios from "axios";
import { apikey } from "../API";



const SearchBar = () => {
  const [searchTerm, setSearchTerm] = ("");
  const [data, setData] = useState({});
  const onSearchHandler = () => {
    if(!searchTerm) {
      return;
    }
    axios({
      method:"GET",
      url:`http://www.omdbapi.com/?t=${searchTerm}&&apiKey=${apikey}`
    }).then(response => {
      console.log(response.data);
    });
  };

  return (
    <div className="h-screen bg-slate-400 pt-6">
      <div className="w-full flex items-center justify-center">
      <input 
        type="text"
        placeholder="Search for a movie..."
        className="text-[19] mr-4 p-2 w-[30%] border rounded"
        value={searchTerm}
        onChange={(e)=>searchTerm(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"onClick={onSearchHandler}
      >
        Search
      </button>
      </div>
    </div>
  );
};

export default SearchBar;
