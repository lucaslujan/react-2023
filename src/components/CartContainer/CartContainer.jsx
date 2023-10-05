
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../Context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"

const CartContainer = () => {

  const [dataForm, setDataForm] = useState ({
    name: '',
    phone: '',
    email:''
    }
  )
  
  const [id, setId] =useState ('')
  const {cartList, deleteCart, precioTotal, eliminarProducto} = useCartContext()

  const handleAddOrder = async (evt)=> {
    evt.preventDefault()
    const order = {}
    order.buyer = dataForm
    order.items = cartList.map (prod =>{
      return {id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}
    })
    // order.total = precioTotal()

    const queryDB = getFirestore()
    const ordersCollection = collection(queryDB, 'orders')
    addDoc (ordersCollection, order)
    .then(({id}) => setId (id))
    .catch(err => console.log(err))
    .finally (() => {
      setDataForm ({ 
      name: '',
      phone: '',
      email:''
      })
      deleteCart()
    })
    


  }

    const handleOnChange = (evt) =>{
    setDataForm ( {
      ...dataForm,
    [evt.target.name] : evt.target.value

    })
  }

  console.log(dataForm)
  return (
    <>
    {id != '' && <h5> Se ha generado la orden de compra:{id} </h5>}
    {cartList.length > 0 ?
    <div>
      {cartList.map(prod => <div key={prod.id}>
          <img src={prod.imageUrl} className="w-25"/>
          {prod.name} - ${prod.price} - Cantidad: {prod.quantity}
          <button onClick={() => eliminarProducto(prod.id)}> X </button>
    </div>)}
      <button className="btn btn-danger" onClick={deleteCart}>Vaciar Carrito</button>

          {precioTotal () != 0 && <h2>Precio total:{precioTotal()} </h2> }
          <form onSubmit=  {handleAddOrder}>
            <input
             type="text"
             name="name"
             placeholder="ingresar el nombre"
             value={dataForm.name}  
             onChange={handleOnChange}
             />
            <input
             type="text" name="phone"
             placeholder="ingresar el teléfono"
             value={dataForm.phone}
             onChange={handleOnChange}

             />
            <input type="text"
             name="email"
             placeholder="ingresar el email"
             value={dataForm.email}
             onChange={handleOnChange}

             />

             <button className="btn btn-success">Terminar compra</button>
          
          </form>
    </div>
    :
    <center>
      <h2>No hay productos en el carrito.</h2>
      <Link to='/'>Ir a la tienda</Link>
    </center>
    }
    </>
  )
}

export default CartContainer