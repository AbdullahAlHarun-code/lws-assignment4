import { useContext, useEffect, useState } from "react";
import { NewsCategoryContext } from "../context";

const useNewsQuery  = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  
  const { selectedCategory } = useContext(NewsCategoryContext)
  console.log(selectedCategory)
  const fetchNewsData = async (category) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching news data...",
      });

      const response = await fetch(
        `http://localhost:8000/v2/top-headlines?category=${category}`
      );

      if (!response.ok) {
        const errorMessage = `Fetching news data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log(data.articles)
      setNewsData(data.articles)

    //   const newNewsItem  = {
    //     source: {
    //         id: "",
    //         name: "",
    //       },
    //       author: "",
    //       title: data.,
    //       description: "",
    //       url: "",
    //       urlToImage: "",
    //       publishedAt: "",
    //       content: "",
    //   };
    //   setNewsData(newNewsItem );
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
    if(selectedCategory){
      console.log(selectedCategory)
      fetchNewsData(selectedCategory)
    }else{
      console.log(selectedCategory)
      fetchNewsData('general')
    }
    

    
  }, [selectedCategory]);

  return {
    newsData,
    error,
    loading,
  };
};

export default useNewsQuery ;
