import ItemCount from "../ItemCount";

const ItemDetail = ({product}) => {
  console.log(product);
  const onAdd = (count =>{
    console.log ('productos seleccionados:', count)
  })

    return (
    <div className="col">
      <div className="row">
        <h2>Vista de detalle</h2>
        <img className="w-25" src={product.imageUrl} alt='imagen'/>
        <div>
          <p>Nombre:{product.name}</p>
          <p>Descripción:{product.description}</p>
          <p>Precio:{product.price}</p>
          <p>Stock:{product.stock}</p>
        </div>
      </div>
       <div className="col">
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
       </div> 

    </div>
  )
}

export default ItemDetail
