import Header from "../components/Header.jsx";
import ExploreMenu from "../components/ExploreMenu.jsx";
import FoodDisplay from "../components/FoodDisplay.jsx";


const Home=()=>{
    return(
        <main className="container">
            <Header/>
            <ExploreMenu/>
            <FoodDisplay/>
        </main>
    )
}
export default Home;