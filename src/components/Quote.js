import API from '../API/QuoteAPI';

const Quote = () => {
  const {
    res, loading, error, author,
  } = API(
    'https://api.api-ninjas.com/v1/quotes?category=education',
  );
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Failed to fetch quote</p>;
  }
  return (
    <div className="quote">
      <p>{`${res} - ${author}`}</p>
    </div>
  );
};

export default Quote;
