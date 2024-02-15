import { NewsContex } from "../context";
import { useNewsQuery } from "../hooks";

const NewsProvider = ({ children }) => {
    const { newsData, error, loading } = useNewsQuery();
    return (
        <NewsContex.Provider value={{ newsData, error, loading }}>
            {children}
        </NewsContex.Provider>
    );
};

export default NewsProvider;