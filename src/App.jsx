import Input from "./components/searchBar"
import AddMethods from "./components/ADD/addMethods";
import AddImg from "./components/ADD/addImg";
import AddForm from "./components/ADD/addForm";
import { useState } from "react";
import {  Routes, Route } from "react-router-dom";
import { data } from "./components/data";

function App() {
  
  const [products, setProducts] = useState(data)

  return (

      <Routes>
        <Route path="/" element={<Input products={products} setProducts={setProducts}/>}/>
        <Route path="/addMethods" element={<AddMethods products={products} setProducts={setProducts}/>}/>
        <Route path="/imageField" element={<AddImg products={products} setProducts={setProducts}/>}/>
        <Route path="/formField" element={<AddForm products={products} setProducts={setProducts}/>}/>
        <Route path="*" element={<Input products={products} setProducts={setProducts}/>}/>

      </Routes>
    // <>
    //   <Input products={products} setProducts={setProducts}/>
     
    // </>
  )
}

export default App
