import ShowCard from './ShowCard';

const ShowGrid = shows => {
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          img={data.show.image ? data.show.image.medium : '/download.png'}
          summary={data.show.summary}
        />
      ))}
    </div>
  );
};
export default ShowGrid;
