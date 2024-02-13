
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Products } from './componets/Products';
import CreateProduct from './componets/CreateProduct';
import UpdateProduct from './componets/UpdateProduct';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products/>}></Route>
          <Route path='/Create' element={<CreateProduct/>}></Route>
         <Route path='/Update/:id' element={<UpdateProduct/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
