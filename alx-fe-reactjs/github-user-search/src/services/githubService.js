import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/username/';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};