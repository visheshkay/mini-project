import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';
import Root from './components/Root.js'
import Home from './components/Home.js'
import Product from './components/Product.js'
import Error from './components/Error';
import {useState,useEffect} from 'react';
function App() {
  let [prod,setProd]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(p=>setProd(p))
    },[]);
  let router = createBrowserRouter([
    {
    path:'',
    element:<Root/>,
    errorElement:<Error/>,
    children :[
      {
        path:'',
        element:<Home pro={prod}/>
      },
      {
        path:'product/:id',
        element:<Product/>
      }
    ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
