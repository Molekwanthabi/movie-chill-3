import React, { useState } from 'react';
import axios from "axios";
import { apikey } from '/.Api/ombdID';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState({});

    const onSearchHandler = () => {
        if (!searchTerm) {
            return;
        }
        axios({
            method: "GET",
            url: `https://api.?api_key=${apikey}&query=${searchTerm}`
        })
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error("Error fetching data", error);
        });
    };

    return (
        <div className="h-screen bg-slate-900 w-full">
            <div className="w-full items-center justify-center flex p-4">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="p-2 w-full max-w-md border border-gray-300 rounded"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                    className="ml-2 p-2 bg-purple-500 text-white rounded"
                    onClick={onSearchHandler}>
                    Search
                </button>

            </div>
            {data.Title && (
                <div className="mt-10 w-full flex-col items-center justify-center text-white">
                    {data.Poster && (
                        <img src={data.Poster} alt="Movie Poster" className="w-40px h-60px" />
                    )}
                    <div className="items-center justify-center text-white">
                        <h1>Title: {data.Title}</h1>
                        <p>Actors: {data.Actors}</p>
                        <p>Genre: {data.Genre}</p>
                        <p>Year: {data.Year}</p>
                        <p>Language: {data.Language}</p>
                        <p>tmdb Rating: {data.tmdbRating}</p>
                        <p>Plot: {data.Plot}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;





























