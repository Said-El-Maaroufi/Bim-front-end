
const AddForm = () => {
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
                <div className="container">

                <div className="my-4 ">
                    <label htmlFor="" className="form-label">Nom en Français:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label">Nom en Arabe:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label">Marque:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label">code:</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label">barre code:</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label">Image:</label>
                    <input type="file" className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label">Prix:</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label">Qte:</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="d-grid">
                    <button className=" btn btn-outline-success ">Ajouter</button>
                </div>
                </div>
            </form>
        </div>
     );
}
 
export default AddForm;