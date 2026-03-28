import { Link } from "react-router-dom";
const AddMethods = () => {
    return ( 
        <div className="container mt-3">
            <div className="d-flex justify-content-center align-items-center vh-100 gap-3">
                    <Link to="/imageField " className="btn btn-primary">with Image</Link>
                    <Link to="/formField" className="btn btn-success">with Form</Link>
                
            </div>
        </div>
    );
}
 
export default AddMethods;