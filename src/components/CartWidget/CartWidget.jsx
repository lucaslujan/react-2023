import { Cart3 } from 'react-bootstrap-icons';
import { useCartContext } from '../Context/CartContext';

const CartWidget = () => {
  const {cantidadTotal} = useCartContext()
  return (
    <div>
      {cantidadTotal() != 0 && cantidadTotal()}
      < Cart3 color="black" size={35} />
    </div>
  )
}

export default CartWidget

