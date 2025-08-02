import React, { useState } from 'react';
import { fetchUsers } from './githubService.js';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsers([]);
    setError(null);
    setLoading(true);

    try {
      const data = await fetchUsers(searchTerm, location, minRepos);
      setUsers(data.items);
    } catch (err) {
      setError('Error fetching users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="searchTerm">
            Search Term:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="searchTerm"
            type="text"
            placeholder="Enter username"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minRepos">
            Minimum Repositories:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="minRepos"
            type="number"
            placeholder="Enter minimum repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user.id} className="bg-white shadow-md rounded p-4">
            <img src={user.avatar_url} alt="User Avatar" className="mx-auto rounded-full w-24 h-24" />
            <h2 className="text-lg font-semibold mt-2 text-center">{user.login}</h2>
            <p className="text-center">Location: {user.location || 'N/A'}</p>
            <p className="text-center">Repositories: {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-500 text-center">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
