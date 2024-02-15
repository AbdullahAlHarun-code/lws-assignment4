import { useState } from "react";
import { NewsCategoryContext } from "../context";

export default function NewsCategoryProvider({children}){
    const [selectedCategory, setSelectedCategory] = useState(null)
    return (
        <NewsCategoryContext.Provider value={{selectedCategory, setSelectedCategory}}>
            {children}
        </NewsCategoryContext.Provider>
    );
}