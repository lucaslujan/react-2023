
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import { CartContextProvider } from './components/Context/CartContext';



function App() { 
    return (
        <div>
        <Router>
            <CartContextProvider>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer/> }/>
                <Route path='/category/:cid' element={<ItemListContainer/> }/>
                <Route path='/detalle/:pid' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<CartContainer/>}/>
            </Routes>
          </CartContextProvider>
        </Router>          
        </div>
    )
}

export default App

