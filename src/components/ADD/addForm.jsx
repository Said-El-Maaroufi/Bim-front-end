import { useState } from "react";
const AddForm = ({products, setproducts}) => {
    const [error, setError] = useState('')
    const [formData, setFormdata] = useState(
        {
            nomFr : '', 
            nomAr:'', 
            marque:'', 
            code:'',
            brCode:'',
            img:'',
            prix:'',
            Qte:''
        }
    )

    const handelValue = (e) => {
        let nom = e.target.name
        setFormdata({...formData, [nom] : e.target.value})
    }

    const add = () => {
        console.log('im herre')
        let res = Object.values(formData).some((value) => value.trim() === '')
        if(res === true ){
            setError("<p className='alert alert-danger'>il ya un champ vide</p>")
        } else{
            setError("<p className='alert alert-success'>le produit a ete ajouter avec succeess</p>")
            setproducts([...products, formData])
        }
        setError('')
    }


    return ( 

        /*
        { 
            nomFrance: "Baguette complet",
            nomArabe: "", 
            marque: "CHOPAIN", 
            code: "20400460", 
            bareCode: "", 
            image: "", 
            prix: "3.5", 
            Qte: "" 
        },
 */
        <div className="container mt-3">
            <form action="" className="border m-3 p-2">
                <h2 className="text-center bg-secondary p-2 text-light">Ajouter un Produit</h2>
                {error||<p className="alert alert-danger">hi</p>}
                <div className="container">

                <div className="my-4 ">
                    <label htmlFor=""  className="form-label">Nom en Français:</label>
                    <input type="text" name="nomFr" value={formData.nomFr} onChange={handelValue} className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label">Nom en Arabe:</label>
                    <input type="text" name="nomAr" value={formData.nomAr} onChange={handelValue} className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label">Marque:</label>
                    <input type="text" name="marque" value={formData.marque} onChange={handelValue} className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label">code:</label>
                    <input type="number" name="code" value={formData.code} onChange={handelValue} className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label">barre code:</label>
                    <input type="number" name="brCode" value={formData.brCode} onChange={handelValue} className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label">Image:</label>
                    <input type="file" name="image" value={formData.img} onChange={handelValue} className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label">Prix:</label>
                    <input type="number" name="prix" value={formData.prix} onChange={handelValue} className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label">Qte:</label>
                    <input type="number" name="Qte" value={formData.Qte} onChange={handelValue} className="form-control" />
                </div>
                <div className="d-grid">
                    <button type="button" className=" btn btn-outline-success " onClick={add}>Ajouter</button>
                </div>
                </div>
            </form>
        </div>
     );
}
 
export default AddForm;