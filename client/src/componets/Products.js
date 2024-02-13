import React, { useEffect, useState } from 'react'
import axios from "axios"
import Table from 'react-bootstrap/Table';
import  {Link} from "react-router-dom"
export const Products = () => {
    const [products, setproducts] = useState([ ])

    useEffect(()=>{
        axios.get("http://localhost:3001")
        .then(response=>{
            setproducts(response.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


const handleDelete=(id)=>{
axios.delete("http://localhost:3001/DeleteProduct/"+id)
.then(deleteproduct=>{
    console.log(deleteproduct)
    window.location.reload()
}).catch(err=>{
    console.log(err)
})
    }

    return (
        <div >
            <div>
                <Link to='/Create' className="btn btn-success">ADD PRODUCTS</Link>
                <Table>
                    <thead>
                        <tr>
                            <th>product name</th>
                            <th>product price$</th>
                            <th>product detail</th>
                            <th>product rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => {
                                return (
                                    <tr>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.details}</td>
                                        <td>{product.rating}</td>
                                        <Link className='btn btn-success bg-success' to={`/Update/${product._id}`}>update</Link>
                                        <button className='btn btn-danger bg-danger'onClick={(e)=>handleDelete(product._id)}>delete</button>
                                    </tr>
                                   
                                )
                            })
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    )
}
