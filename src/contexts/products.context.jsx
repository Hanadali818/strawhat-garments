import { createContext, useState, useEffect} from "react";

import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
    products: [],
});

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getCategoriesMap = async () => {
           const categoryMap = await getCategoriesAndDocument();
           console.log(categoryMap);
        };
        getCategoriesMap();
    }, []);

    const value = {products};
    return (
        <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
    )
}