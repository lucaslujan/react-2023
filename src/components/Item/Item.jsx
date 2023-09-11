import { Link } from "react-router-dom"

const Item = ({product} ) => {
  return (
 
       <div className="card-w25">
            <div className="card-body">
              <img className="w-50 card" src={product.imageUrl} alt="imagen" />
              <p>Nombre:{product.name}  </p>
              <p>Description{product.description} </p>
              <p>Precio{product.price} </p>
            </div> 
            <div className="card-footer">
            <Link to={`/detalle/${product.id}`}>
                <button className="btn btn-outline-dark">Detalle</button>
              </Link>
            </div>
                                           
        </div>

  )
}

export default Item
