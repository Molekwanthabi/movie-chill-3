import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const onSearchHandler = () => {
    alert(123);
  };

  return (
    <div className="h-screen bg-slate-400 pt-6">
      <div className="w-full flex items-center justify-center">
      <input 
        type="text"
        placeholder="Search for a movie..."
        className="text-[19] mr-4 p-2 w-[30%] border rounded"
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
