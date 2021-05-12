import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [product, setProduct]= useState([]);
  useEffect(() => {
    axios.get('/api').then(
      (res)=>{
        setProduct(res.data)
      }
    ).catch(err=>{
      console.log(err)
    })
  })
  return (
    <div className="App">
    <ul>
      {product.map((p,index)=><li key={index}>
        {p}
      </li>)}
    </ul>      
    </div>
  );
}

export default App;
