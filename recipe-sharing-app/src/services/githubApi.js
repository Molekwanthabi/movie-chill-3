import axios from 'axios';
import { fetchUsers } from './services/githubService';

const GITHUB_API_URL = 'https://api.github.com';

export const fetchUsers = async (searchTerm, location = '', minRepos = '') => {
  let query = searchTerm;

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>${minRepos}`;
  }

  try {
    const response = await axios.get(`${GITHUB_API_URL}/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};