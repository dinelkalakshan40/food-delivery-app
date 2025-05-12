import FoodDisplay from "../components/FoodDisplay.jsx";
import {useState} from "react";

const ExploreFood=()=>{
    const [category,setCategory]=useState('All')
    const [searchText,setSearchText] =useState('')
    return(

        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={(e)=>e.preventDefault()}>
                            <div className="input-group mb-3 mt-2" >
                                <select className="form-select mt-2" style={{'maxWidth': '150px'}} onChange={(e)=>setCategory(e.target.value)}>
                                    <option value={'All'}>All</option>
                                    <option value="Biryani">Biryani</option>
                                    <option value="Buger">Burger</option>
                                    <option value="Ice Creams">Ice Creams</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Rolls">Rolls</option>
                                </select>
                                <input type="text" className="form-control mt-2" placeholder="Search a Food..."
                                onChange={(e)=>setSearchText(e.target.value)} value={searchText} />
                                <button className="btn btn-primary mt-2" type="submit">
                                    <i className="bi bi-search"></i>
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FoodDisplay category={category} searchText={searchText}/>
        </>

    )
}
export default ExploreFood;