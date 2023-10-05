

import { useState } from "react"
import { useCartContext } from "../Context/CartContext"
import ItemCount from "../ItemCount"
import { Link} from "react-router-dom"


const ItemDetail = ({product}) => {
    const [isInCount, setisInCount] = useState (true)
    const {addProduct} = useCartContext()
    const onAdd = (quantity) => {
        addProduct( {...product, quantity } )
        setisInCount (false)    
    }

    return (
        <div className="container">
            <h2>Tu carrito</h2>
            <div className="row">
                <img className="w-50" src={product.imageUrl} alt="imagen" />
                <div className="col">
                    <p>Nombre: {product.name}</p>
                    <p>Descripción: {product.description}</p>
                    <p>Precio: {product.price}</p>
                    <p>Stock: {product.stock}</p>
                </div>
            </div>
            <div className="container text-center bg-secondary">
                {
                    isInCount ? 
                        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                    :
                        <>
                            <Link to={'/cart'}>
                                <button className="btn btn-info">Ir al carrito</button>
                            </Link>
                            <Link to={'/'}>
                                <button className="btn btn-success">Seguir comprando</button>
                            </Link>
                        </>
                }
            </div>
        </div>
    )
}

export default ItemDetail