import './App.css'
import Menubar from "./components/Menubar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import ExploreFood from "./pages/ExploreFood.jsx";
import Header from "./components/Header.jsx";

function App() {

  return (
    <div>
      <Menubar/>

      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/Explore' element={<ExploreFood/>}/>
      </Routes>
    </div>
  )
}

export default App
