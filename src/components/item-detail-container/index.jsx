import React from "react"
import {useState} from "react"
import {useEffect} from "react"
import { getProductById } from "../../pages/products"
import ItemDetail from "../item-detail"
import "./index.css"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
const [product, setProduct] = useState(0)

const {itemId} = useParams()

useEffect (() => {
    getProductById(itemId)
    .then(response => {
        setProduct(response)
    })
    .catch(error => {
        console.log(error)
    })
}, [itemId])

return (
    <div className="detailContainer">
        <ItemDetail {...product}/>
    </div>
)
}

export default ItemDetailContainer