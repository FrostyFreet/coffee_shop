import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

export default function Navbar({cartItems,searchTerm,setSearchTerm}) {

    function searchBar(e){
        setSearchTerm(e.target.value)
    }
    function searchSubmit(e){
        e.preventDefault()



        console.log("Searchterm:"+searchTerm)
    }
    return(
        <>
            <nav className="navbar navbar-expand-lg pb-3 pt-3 " style={{backgroundColor: "#B7999C"}}>
                <div className="container-fluid ">
                    <span className="navbar-brand"><FontAwesomeIcon icon={faCoffee}/></span>
                    <Link to={'/'} className="navbar-brand navbar-text fs-4 fw-bolder fst-italic"
                          style={{color: "#DFE0E2"}}> Brewed Awakening</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link to={"/WholeBeans"} className="nav-link active navbar-text fs-5"
                                      aria-current="page"
                                      style={{color: "#DFE0E2"}}>Whole Beans</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/Cafetiere"} className="nav-link active navbar-text fs-5 "
                                      style={{color: "#DFE0E2"}}>Cafetiere</Link>
                            </li>

                        </ul>

                    </div>

                </div>

                <form className="form-inline my-2 my-lg-0 me-lg-5" onSubmit={searchSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={searchBar}/>
                    <button className="btn btn-outline-success my-2 my-sm-0 me-lg-5" type="submit">Search</button>
                </form>

                <div className="dropdown me-2 mt-4" style={{position: "relative"}}>
                    <button
                        style={{backgroundColor: "#B7999C"}}
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <FontAwesomeIcon icon={faShoppingCart}/> Cart
                    </button>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        {cartItems.length > 0 ?
                            (
                                <ul>
                                    {cartItems.map((cartItem, index) => (
                                        <li className="dropdown-item" key={`${cartItem._id}-${index}`}>
                                            <img src={cartItem.image_url}
                                                 style={{width: "100px", height: "100px"}}/> {cartItem.name} -
                                            ${cartItem.price}
                                        </li>
                                    ))}
                                    Total={cartItems.reduce((acc, item) => acc + item.price, 0)}
                                </ul>

                            ) : (<span className="dropdown-item disabled">Your cart is empty</span>)
                        }

                    </div>


                </div>


            </nav>

        </>
    )
}