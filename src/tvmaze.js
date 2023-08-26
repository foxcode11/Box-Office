const BASE_URL = 'https://api.tvmaze.com';

const apiget = async searchquery => {
  const response = await fetch(`${BASE_URL}${searchquery}`);
  const body = await response.json();
  return body;
};

export const searchForShows = query => apiget(`/search/shows?q=${query}`);

export const searchForActors = query => apiget(`/search/people?q=${query}`);
