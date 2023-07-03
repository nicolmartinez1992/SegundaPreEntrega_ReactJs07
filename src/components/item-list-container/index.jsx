import React from "react";
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../pages/products"
import ItemList from "../item-list";
import Title from "../title";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
        .then(response=> {
            setProducts(response)
        })
        .catch(error=>{
            console.log(error)
        })
    },[categoryId])
    
    return (
        <div>
            <Title greeting="Bienvenidos a TRACTO!" />
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;