import {Link} from "react-router-dom"
function Homepage() {
    return ( 
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <Link to="/customer/singin"><button className="btn btn-primary m-5">Customer Login</button></Link>
                <Link to="/admin/singin"><button className="btn btn-primary m-5">Admin Login</button></Link>
                </div>
            </div>
        </div>
       
        </>
     );
}

export default Homepage;