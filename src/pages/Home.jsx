import Header from "../components/Header.jsx";
import ExploreMenu from "../components/ExploreMenu.jsx";
import FoodDisplay from "../components/FoodDisplay.jsx";
import {useState} from "react";


const Home=()=>{
    const [category,setCategory] =useState('All');
    return(
        <main className="container">
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category} searchText={''}/>
        </main>
    )
}
export default Home;