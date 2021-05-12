import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [product, setProduct]= useState([])
  useEffect(() => {
    axios.get('/api')
    .then(
      (res)=>{
        setProduct(res.data)
      }
    )
    .catch((err)=>{
      console.log(err)
    })
    })

  return(
    <div className="App">
      <li>{product[1]}</li>
    </div>
  );
}

export default App;
