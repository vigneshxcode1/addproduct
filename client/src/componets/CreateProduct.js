import axios from 'axios';
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';


const CreateProduct = () => {
  const [name,setName]=useState()
  const [price,setPrice]=useState()
  const [details,setDetail]=useState()
  const [rating,setRating]=useState()
const navigate = useNavigate()


  const Submit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/CreateProduct",
    {name,price,details,rating})
    .then(result=>{
      navigate("/")
      console.log(result.data)
    }).catch(err=>console.log(err))

  }

  return (
    <form onSubmit={Submit}>
      
        <h1>CREATE PRODUCTS</h1>
       
          <label >Product name</label>
          <input className='form-control'
            required
            type="text"
            placeholder="product Name"
            onChange={(e)=>setName(e.target.value)}
            />
      
      
          <label>Product Price</label>
          <input
          className='form-control'
            required
            type="text"
            placeholder="product Price"
            onChange={(e)=>setPrice(e.target.value)}
            />
       
       
          <label>Product Detail</label>
          <input
          className='form-control'
            required
            type="text"
            placeholder="product Detail"
            onChange={(e)=>setDetail(e.target.value)}
            />
       
  
          <label>Product Rating</label>
          <input
          className='form-control'
            required
            type="text"
            placeholder="product Rating"
            onChange={(e)=>setRating(e.target.value)}
            />
    
       

      <button>Create Product</button>
    </form>
  )
}

export default CreateProduct