import './Menubar.css'
import {assets} from '../assets/assets.js'
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {StoreContext} from "../context/StoreContext.jsx";



const Menubar=()=>{

    const {quantities} = useContext(StoreContext);

    const uniqueItemsInCart =Object.values(quantities).filter(qty => qty >0).length;

    const navigate=useNavigate();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to="/"><img src={assets.logo} alt="" className="mx-4" height={48} width={48}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/explore">Explore</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-4">
                        <Link to={`/cart`}>
                            <div className="position-relative">
                                <img src={assets.cart} alt="" width={32} height={32} className="position-relative"/>
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{uniqueItemsInCart}</span>
                            </div>
                        </Link>
                        <button className="btn btn-outline-primary" onClick={()=>navigate('login')}>Login</button>
                        <button className="btn btn-outline-success" onClick={()=>navigate('/register')}>Register</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Menubar;