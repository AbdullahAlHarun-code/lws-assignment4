import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import NewsPanel from "./NewsPanel";
import { NewsContex, NewsCategoryContext } from "../context";

export default function Page(){
    const { newsData, error, loading } = useContext(NewsContex)
    
    return (
        <>
            <Header />
            <NewsPanel />
            <Footer />
        </>
    );
}