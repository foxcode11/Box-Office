import { useState } from 'react';
import { searchForShows, searchForActors } from '../tvmaze';
import SearchForm from '../components/SearchForm';
const Home = () => {
  const [apiData, setapiData] = useState(null);
  const [apiDataError, setapiDataError] = useState(null);

  const onSearch = async (q, searchOption) => {
    try {
      setapiDataError(null);

      let result;
      if (searchOption === 'shows') {
        result = await searchForShows(q);
      } else {
        result = await searchForActors(q);
      }
      setapiData(result);
    } catch (error) {
      setapiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured: {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
