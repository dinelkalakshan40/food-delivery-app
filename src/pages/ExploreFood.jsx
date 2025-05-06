import FoodDisplay from "../components/FoodDisplay.jsx";

const ExploreFood=()=>{
    return(

        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="input-group mb-3 mt-2">
                                <select className="form-select mt-2" style={{'maxWidth': '150px'}}>
                                    <option value="Biryani">Biryani</option>
                                    <option value="Burger">Burger</option>
                                    <option value="Ice Creams">Ice Creams</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Rolls">Rolls</option>
                                </select>
                                <input type="text" className="form-control mt-2" placeholder="Search a Food..."/>
                                <button className="btn btn-primary mt-2" type="submit">
                                    <i className="bi bi-search"></i>
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FoodDisplay/>
        </>

    )
}
export default ExploreFood;