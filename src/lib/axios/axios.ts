import axios from 'axios';

const API_ORIGIN = process.env.REACT_APP_BASE_URL;
const API_GITHUB = 'https://api.github.com';

const API_GITHUB_TOKEN = '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';

export const apiAxios = axios.create({
  baseURL: API_ORIGIN,
  timeout: 3000,
});

export const githubAxios = axios.create({
  baseURL: API_GITHUB,
  timeout: 3000,
  headers: {
    Authorization: `token ${API_GITHUB_TOKEN}`,
  },
});
