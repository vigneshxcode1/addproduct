import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import  axios from "axios"


const UpdateProduct = () => {
  const {id} = useParams()
  const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [details, setDetails] = useState('');
const [rating, setRating] = useState('');

const navigate = useNavigate()


useEffect(()=>{
  axios.get("http://localhost:3001/getuser/"+id)
  .then(response=>{
    setName(response.data.name)
    setPrice(response.data.price)
    setDetails(response.data.details)
    setRating(response.data.rating)
  }).catch(err=>console.log(err))
},[])

 
const Update=(e)=>{
  e.preventDefault()
  axios.put("http://localhost:3001/updateProduct/"+id,
  {name,price,details,rating})
  .then(result=>{
      navigate('/')
     
      
  })
  .catch(err=>console.log(err))
}



  return (
    <form onSubmit={Update}>
      
        <h1>UPDATE PRODUCTS</h1>
       
          <label >Product name</label>
          <input className='form-control'
            required
            type="text"
            placeholder="product Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
      
      
          <label>Product Price</label>
          <input
          className='form-control'
            required
            type="text"
            placeholder="product Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            />
       
       
          <label>Product Detail</label>
          <input
          className='form-control'
            required
            type="text"
            placeholder="product Detail"
            value={details}
            onChange={(e)=>setDetails(e.target.value)}
            />
       
  
          <label>Product Rating</label>
          <input
          className='form-control'
            required
            type="text"
            placeholder="product Rating"
            value={rating}
            onChange={(e)=>setRating(e.target.value)}
            />
    
       

      <button className='bg-success'>UPDATE CHANGES</button>
    </form>
  )
}

export default UpdateProduct