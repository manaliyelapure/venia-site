
import './App.css';
import Navbar from './Components/Header/Navbar';
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./containers/ProductDetails";
import Footer from './Components/Footer/Footer';
import Cart from './containers/Cart';
import ShoppingCart from './ShoppingBag/ShoppingCart';



function App() {
  return (
    <div className="App">
      <Navbar />
         <Routes>
           
           <Route path="/venia-site/products/:productId" element={<ProductDetails/>} />
           <Route path="/venia-site/shoppingcart" element={<ShoppingCart/>} />
           <Route path="/" element={<Cart/>}/>
       </Routes>
     
      <Footer />
      
    
    </div>
  );
}

export default App;
