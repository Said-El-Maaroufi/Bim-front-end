const ProductCard = ({products}) => {
    
    return ( 
        <div>

        <div className="container">
        <div className="row p-5">

        {products.map((pdt) => {
    return(


        <div className=" col-12 col-sm-6 col-lg-4 col-xl-3 rounded-3 mb-3  " >

                    <div className="card w-75   text-center m-auto  shadow" style={{ minWidth: '196px' }}>
                        <div className="ratio ratio-21x9 ">
                            <img  src="" alt="BIM-IMAGE" className="card-img-top object-fit-contain " />
                        </div>
                    <div className="card-body card-product">
                        <h3 className=" custom-badge badge-soft-amber">{pdt.code.substr(0, 3)} </h3>
                        <div className="mb-3">

                            <span className="custom-badge badge-soft-blue"
                            style={{ backgroundColor: '#E0E7FF', color: '#4338CA', borderRadius: '8px' }}
                            >{pdt.code}</span>
                        </div>
                        <p className="card-text text-muted small">{pdt.nomFrance}</p>
                        <a href="#" className="btn btn-dark w-100 rounded-3">Voir détails</a>
                    </div> 
                    </div>
                </div>
        )
    })}
    </div>
        </div>

        </div>

    );
}

export default ProductCard;