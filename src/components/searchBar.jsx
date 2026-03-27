import { useState } from "react";
import ProductCard from "./productCard";
import { Link } from "react-router-dom";
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
            <div className="input-group mt-3">

            <input type="text" className="form-control " onInput={handelValue} />
            <Link to="/addProduit" className="btn btn-primary">Ajouter</Link>
            </div>
             
            
                
                {produitFiltrer.length != 0 ? <ProductCard products={produitFiltrer}/> : <p className="text-center text-muted mt-4" >Products not found...</p>}
            
        </div>
    );
}

export default Input;