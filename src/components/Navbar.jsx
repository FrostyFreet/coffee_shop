import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

export default function Navbar({cartItems=[],setCartItems,searchTerm,setSearchTerm}) {

    function searchBar(e){
        setSearchTerm(e.target.value)
    }
    function searchSubmit(e){
        e.preventDefault()

    }
    function removeElement(id) {
        console.log(id);
        const index = cartItems.findIndex(item => item.id === id);
        console.log(index);
        
        if (index > -1) {
            const newCartItems = [...cartItems];
            const item = newCartItems[index];

            if (item.quantity > 1) {
                item.quantity -= 1;// Decrease quantity
                console.log(`Decreased quantity of ${item.name} to ${item.quantity}`);
            } else {
                newCartItems.splice(index, 1); // Remove the item
                console.log(`${item.name} removed from cart`);
            }

            setCartItems(newCartItems); // Update state
        }
    }

    const itemMap = cartItems.reduce((acc, item) => {
        if (acc[item.id]) {
            acc[item.id].quantity += 1;
        } else {
            acc[item.id] = { ...item, quantity: 1 };
        }
        return acc;
    }, {});
    const uniqueItems = Object.values(itemMap);
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

                <form className="d-flex form-inline me-lg-5" onSubmit={searchSubmit}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        style={{height: '45px', width: '200px'}} // Adjust width as needed
                        value={searchTerm}
                        onChange={searchBar}
                    />
                    <button
                        className="btn btn-outline-secondary text-white"
                        style={{backgroundColor: "#B7999C", height: '45px'}} // Match height to input
                        type="submit"
                    >
                        Search
                    </button>
                </form>

                <div className="dropdown me-2 mt-0 text" style={{position: "relative"}}>
                    <button
                        style={{backgroundColor: "#B7999C", height: '45px'}} // Match height to input
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
                        {uniqueItems.length > 0 ?
                            (
                                <ul>
                                    {uniqueItems.map((cartItem, index) => (
                                        <li className="dropdown-item" key={`${cartItem._id}-${index}`}>
                                            <img src={cartItem.image_url}style={{width: "100px", height: "100px"}}/> 
                                            {cartItem.name} -${cartItem.price} Quantity:{cartItem.quantity}
                                            
                                             <button style={{
                                                    background: "transparent",
                                                    border: "none",
                                                    marginLeft: "15px",
                                                    color: "black",
                                                    fontSize: "24px",
                                                }} onClick={()=>removeElement(cartItem.id)}
                                            >X</button>



                                        </li>
                                    ))
                                    }
                                    <b>Total</b>={cartItems.reduce((acc, item) => acc + item.price,0).toFixed(2)}
                                    
                                    <Link to={"/Checkout"}>
                                    <button className="btn btn-primary" style={{ marginBottom:"15px",marginRight:"10px",float:"right"}}>Checkout</button></Link>
                                </ul>

                            ) : (<span className="dropdown-item disabled">Your cart is empty</span>)                       
                        }
                        
                        
                    </div>


                </div>


            </nav>

        </>
    )
}