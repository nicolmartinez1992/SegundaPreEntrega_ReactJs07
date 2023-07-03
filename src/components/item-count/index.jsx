import React from "react"
import { useState } from "react"
import Button from '@mui/material/Button';
import "./index.css"

const ItemCount = ({stock, initial}) => {
    const [items, setItems] = useState(initial)

    const onAddProduct = () => {
        console.log("Cantidad de productos agregados al carrito", items)
      }

    const increment = () => {
        if (items < stock) {
            setItems(items + 1)
        }
    }

    const decrement = () => {
        if (items > 1) {
            setItems(items - 1)
        } 
    }

    return (
        <div>
            <div className="globalCounter">
            <div className="counterContainer">
                <button className="button" onClick={decrement}>-</button>
                <h4 className="quantity" style={{color: "black"}}>{items}</h4>
                <button className="button" onClick={increment}>+</button>
            </div>
            </div>
            <div className="addButtonContainer">
            <Button style={{ color: "black", fontWeight: "bold", fontFamily: "unset"}} size="small" onClick={() => onAddProduct()} disabled={!stock}>Add to cart</Button>
            </div>
        </div>
    )
}

export default ItemCount