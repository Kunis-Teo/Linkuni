import { useState, useEffect } from "react";
import API from "@/utils/API";
import { Tag } from "@/types";

const useGetTagList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (() => {
      API.get<Tag[]>("/tag/list", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      })
        .then((response) => {
          setLoading(false);
          setData(response.data);
        })
        .catch((e) => {
          setError(e);
        });
    })();
  }, []);

  return { data, loading, error };
};

export default useGetTagList;
