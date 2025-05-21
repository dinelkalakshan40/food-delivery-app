import './App.css'
import Menubar from "./components/Menubar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import ExploreFood from "./pages/ExploreFood.jsx";
import Header from "./components/Header.jsx";
import FoodDetails from "./pages/FoodDetails.jsx";
import Cart from "./pages/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

function App() {

  return (
    <div>
      <Menubar/>

      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/explore' element={<ExploreFood/>}/>
            <Route path='/food/:id' element={<FoodDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<PlaceOrder/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
