import React from 'react'
import {useLocation,Link} from 'react-router-dom'
import './Product.css'
function Product() {
    let {state}=useLocation();
    return (
        <div className="Container">
            <div className="cont1">
                <div className="subcont1">
                    <img src={state.image} alt=""/>
                </div>
                <div className="subcont2">
                    <h4>{state.title}</h4>
                    <h5 className="about">About</h5>
                    <p className="des">{state.description}</p>
                    <h3 className="price">${state.price}</h3>
                    <p className="rate">rating: {state.rating.rate}({state.rating.count})</p>
                    <div className="ssubcont">
                        <button className="btn but" type="button">Buy Now</button>
                        <button className="btn but" type="button">Add to Cart</button>
                    </div>
                </div>
                
            </div>
            <div class="endbut">
                <Link to="/" className="link">
                <button className="btn but" type="button">Go Back</button>
                </Link>
                </div>
        </div>
    )
}

export default Product
