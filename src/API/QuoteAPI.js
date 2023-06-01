import { useEffect, useState } from 'react';

function QuoteAPI(link) {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState(null);
  const key = '31pKldHwW4agSkbBzYtoog==n32gWFTak0XZvWay';
  useEffect(() => {
    if (res === null) {
      setLoading(true);
      fetch(link, {
        method: 'GET',
        headers: {
          'X-Api-Key': key,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setRes(result[0].quote);
          setAuthor(result[0].author);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [res, link, key]);
  return {
    res,
    loading,
    error,
    author,
  };
}

export default QuoteAPI;
