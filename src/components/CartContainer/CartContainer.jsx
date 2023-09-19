

import { useCartContext } from "../Context/CartContext"

const CartContainer = () => {

  const {cartList, deleteCart} = useCartContext()
  return (
    <div>
      {cartList.map(prod => <div key={prod.id}>
          <img src={prod.imageUrl} className="w-25"/>
          {prod.name} - ${prod.price} - Cantidad: {prod.quantity}
          <button> X </button>
      </div>)}
      <button onClick={deleteCart}>Vaciar Carrito</button>
    </div>
  )
}

export default CartContainer