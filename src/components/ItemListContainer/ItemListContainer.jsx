import { mFetch } from "../../utils/mockFetch";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
// import Col from 'react-bootstrap/Col';

/* function PasaProp(props){
    console.log(props) */
   /*  return(
        <h5>{props.titulo}</h5>
// /*     ) */
// } */
 
const ItemListContainer = () =>{
    const [products, setProduct] = useState ([])
    const [loading, setLoading] = useState (true)
    const {cid} = useParams()

    useEffect(()=>{   
     if (cid){    
            mFetch()
            .then (respuesta=>setProduct(respuesta.filter(product => cid === product.category)))
            .catch(err => console.log(err))
            .finally (()=> setLoading(false))

         } else {
            mFetch()
            .then (respuesta=>setProduct(respuesta))
            .catch(err => console.log(err))
            .finally (()=> setLoading(false))
            }
            
        }, [cid])

        return (
        <center>
            <div className="row">
                <h1>ItemlistContainer</h1>
                    { loading ?
                    <h2>Loading...</h2>
                     : 
                     <ItemList products={products}/>       
                     }
            </div>           
        </center>
    )
}

export default ItemListContainer