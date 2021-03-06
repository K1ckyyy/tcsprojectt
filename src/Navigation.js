import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
const Navigation =()=> {
  let navStyle={
    marginBottom: 80
  };
 
        return (
          <div style={navStyle}>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-back fixed-top"  >
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-item nav-link " to="/Head">Head </Link>
                <Link className="nav-item nav-link " to="/Teacher">Teacher </Link>
                <Link className="nav-item nav-link " to="/Student">Student </Link>
              </div>
          </div>
        </nav>
        </div>
          );
}
 
export default Navigation;