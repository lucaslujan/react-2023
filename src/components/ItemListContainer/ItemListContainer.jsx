// import { mFetch } from "../../utils/mockFetch";
import {Query, collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

 
const ItemListContainer = () =>{
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)
    const {cid} = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection (db, 'products')

        if (cid){
            const queryCollectionFilter = query(queryCollection, where ('category', '==' , cid))

            getDocs (queryCollectionFilter)
            .then (resp =>
                 setProducts(resp.docs.map(prod =>({ id: prod.id, ...prod.data()}))))
                .catch(err => console.log(err))
                    .finally(() => setLoading(false))      
                          
            } else { 
                getDocs (queryCollection)
                .then (resp =>
                     setProducts(resp.docs.map(prod =>({ id: prod.id, ...prod.data()}))))
                    .catch(err => console.log(err))
                        .finally(() => setLoading(false))         
            }            
            }, [cid])
    

        return (
        <center>
            <div className="row">
                <h1>Bienvenidos!</h1>
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