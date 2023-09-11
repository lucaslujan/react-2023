
import { useEffect } from "react";
import { mFetch } from "../../utils/mockFetch";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  // api manejo de estados etc
  const [product, setProduct] = useState ({})
  const {pid} = useParams()

   useEffect(()=>{ 
      // llamada a la api
      mFetch(Number(pid))
      .then(resp => setProduct(resp))
      .catch (err=> console.log(err))
      // .finally (set loading)
  },[])
  return (
    <div>
      <ItemDetail product = {product}/>
    </div>
  )
}

export default ItemDetailContainer
