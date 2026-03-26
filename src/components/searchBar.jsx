import { useState } from "react";
import ProductCard from "./productCard";
const Input = ({products}) => {
    
    
    
const  [produitFiltrer, setPdtsFlt] = useState(products);


const handelValue = (e) =>{
    
    
        setPdtsFlt(products.filter((produit) =>{
        let resultat = Object.values(produit).some((values) => {
            return values.toLowerCase().includes(e.target.value.toLowerCase().trim()) || values.toLowerCase() == e.target.value.toLowerCase().trim() 
        })
        
        return resultat ? produit : ''
    
    }) )
    
    
}











    return ( 
        <div className="container">
            <input type="text" className="form-control mt-3" onInput={handelValue} />
             
            
                
                {produitFiltrer.length != 0 ? <ProductCard products={produitFiltrer}/> : <p className="text-center text-muted mt-4" >Products not found...</p>}
            
        </div>
    );
}

export default Input;