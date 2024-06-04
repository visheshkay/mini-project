import React from 'react'
//import {useForm} from 'react-hook-form'
// import {useState,useEffect} from 'react';
import './Home.css'
import ProductCard from './ProductCard';
function Home(props) {
    //let {register,handleSubmit} = useForm();
    // function filter_search(searchObj){

    // }
    // let [prod,setProd]=useState([]);
    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products')
    //     .then(res=>res.json())
    //     .then(p=>setProd(p))
    // },[]);
    let prod = props.pro;
    return (
        <div className="maincontainer">
            
            <div className="textfield">
            <input type="text" className="textfieldbar" placeholder="Search Products"/>
            <div className="input-group-append">
                <button className="btn but" type="button">Search</button>
            </div>
            </div>
            <div className="mainfield">
                <div className="container">
                    <div className="row">
                        {prod.map(p=><div className="col-sm-12 col-md-4 col-lg-3"><ProductCard p={p}/></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
