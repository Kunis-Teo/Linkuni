import { useState, useEffect } from "react";

const useGetTagList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (() => {
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/tag/list`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          setLoading(false);
          setData(json);
        })
        .catch((error) => {
          setError(error);
        });
    })();
  }, []);

  return { data, loading, error };
};

export default useGetTagList;
