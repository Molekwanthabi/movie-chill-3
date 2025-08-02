// src/services/githubService.js
import axios from 'axios';

// 🔍 Construct a dynamic search query for GitHub users
export const advancedSearchUsers = async (username, location, minRepos, page = 1) => {
  let query = '';

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`;

  const response = await axios.get(url);
  return response.data;
};

// 👤 Fetch full GitHub user profile data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
