import { useState } from "react"

const useCounter = (min, max) => {
    const [count, setCount] = useState(min)

    const handleAdd = () => {
        if(count < max) {
            setCount(count + 1)
        }
    }

    const handleSubtract = () => {
        if(count > min) {
            setCount(count - 1)
        }
    }

    return {
        count,
        handleAdd,
        handleSubtract
    }
}

// un re-render se produce con un cambio de estado o de props - evento
const ItemCount = ({initial, stock, onAdd}) => { 

    const { count, handleAdd, handleSubtract } = useCounter(initial, stock)

    const handleOnAdd = () => {
        onAdd(count)
    }
    
    return (
        <center>
            <div className="container bg-secondary">
                  
                <label>
                    <div className="btn btn-dark">Productos acumulados:{ count }</div>
                </label>
                <button className="btn btn-warning" onClick={handleSubtract}> - 1 </button>
                <button className="btn btn-success" onClick={handleAdd}> + 1 </button> 
                <button onClick={handleOnAdd}> Agregar al carrito </button>
            </div>
        </center>
    )
} 

export default ItemCount