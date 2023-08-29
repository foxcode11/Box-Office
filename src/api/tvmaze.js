const BASE_URL = 'https://api.tvmaze.com';

const apiget = async searchquery => {
  const response = await fetch(`${BASE_URL}${searchquery}`);
  const body = await response.json();
  return body;
};

export const searchForShows = query => apiget(`/search/shows?q=${query}`);

export const searchForPeople = query => apiget(`/search/people?q=${query}`);

export const getShowById = showId =>
  apiget(`/shows/${showId}?embed[]=seasons&embed[]=cast`);

export const getShowsByIds = async showIds => {
  const promises = showIds.map(showId => apiget(`/shows/${showId}`));

  return Promise.all(promises);
};
