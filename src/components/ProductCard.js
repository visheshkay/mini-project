import React from 'react'
import './ProductCard.css'
import {useNavigate,Link} from 'react-router-dom'
function ProductCard(props) {
    let navigate = useNavigate();
    return (
        <div className="eachprod">
<Link onClick={(e)=>{
    e.preventDefault();
    navigate(`/product/${props.p.id}`,{state:props.p});

}} style={{ textDecoration: 'none' }}>
            <div className="card product">
  <img className="card-img-top" src={props.p.image} alt=""/>
  <div className="card-body" >
      <div className="titlecov">
    <h5 className="card-title" style={{textDecoration: 'none'}}>{props.p.title}</h5>
    </div>
    <h3 className="card-text" style={{textDecoration: 'none'}}>${props.p.price}</h3>
    <p>Click to visit</p>
  </div>
</div>
</Link>
        </div>
    )
}

export default ProductCard
