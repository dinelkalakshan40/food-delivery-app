import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchFoodDetails} from "../service/foodService.js";
import {toast} from "react-toastify";

const FoodDetails=()=>{
    const {id} = useParams();
    const [data,setData] =useState({})


    useEffect(()=>{
        const loadFoodDetails =async ()=>{
            try {
                const foodData=await fetchFoodDetails(id);
                console.log('Food data:', foodData); //
                setData(foodData);
            }catch (error){
                toast.error("error food  details")
                console.log("error food details page", error)
            }
        }
        loadFoodDetails();
    },[id])
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        {data?.imageBase64 ? (
                            <img
                                className="card-img-top mb-5 mb-md-0"
                                src={`data:image/png;base64,${data.imageBase64}`}
                                alt="Food"
                            />
                        ) : (
                            <p>Image not available</p>
                        )}
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1">Category:<span
                            className="badge text-bg-warning">{data.category}</span></div>
                        <h1 className="display-5 fw-bolder">Name:{data.name}</h1>
                        <div className="fs-5 mb-5">
                            <span>{data.price}</span>
                        </div>
                        <p className="lead">{data.description}</p>
                        <div className="d-flex">
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FoodDetails;
