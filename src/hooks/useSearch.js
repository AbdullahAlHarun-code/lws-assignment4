import { useContext, useEffect, useState } from "react";
import { NewsContex } from "../context";

const useSearch = () => {
  
  const { newsData, setNewsData } = useContext(NewsContex);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchNewsData = async (searchItem) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching news data...",
      });

      const response = await fetch(
        `http://localhost:8000/v2/search?q=${searchItem}`
      );

      if (!response.ok) {
        const errorMessage = `Fetching news data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log(data.articles);
      setNewsData(data.articles);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Loading News...",
    });
    if (searchItem) {
      fetchNewsData(searchItem);
    }
  }, [searchItem]);

  return {
    newsData,
    error,
    loading,
  };
};

export default useSearch;
