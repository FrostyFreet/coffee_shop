import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import LazyLoad from 'react-lazyload';
import {useLocation} from "react-router";

export default function Content({ items,setItems,cartItems,setCartItems,searchTerm}) {
    const location=useLocation();

    let filteredItems = location.pathname === "/"
        ? items.filter(item => item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : items;

    const addToCart = (item) => {
        if (item.stock > 0) {
            setCartItems([...cartItems, item]);
            const updatedItems = items.map((i) => {
                if (i._id === item._id) {
                    return { ...i, stock: i.stock - 1 };
                }
                return i
            })
            setItems(updatedItems)
        }
    };
    return (
        <div className="container mt-4">
            <div className="row">
                {filteredItems.map((item) => (
                    <div className="col-md-3 col-sm-4 mb-4" key={item._id}>
                        <div className="card h-100" style={{ color: "#FFFFF"}}>
                            <LazyLoad height={200} offset={100}>
                                <img src={item.image_url} className="card-img-top" alt={item.name}  />
                            </LazyLoad>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><b>Flavor:</b> {item.flavor_profile[0]}</p>
                                <p className="card-text"><b>Roast Level:</b> {item.roast_level}</p>
                                <p className="card-text"><b>Weight:</b> {item.weight}</p>
                                <p className="card-text"><b>Price:</b> ${item.price}</p>
                                <div className="mt-auto">
                                    <button
                                        className="btn btn-outline-dark"
                                        style={{ float: 'right' }}
                                        onClick={() => addToCart(item)}
                                        disabled={item.stock <= 0}>
                                        <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                    </button>
                                    <p style={{ float: 'left' }}>
                                        <FontAwesomeIcon icon={faBox} /> Stock: {item.stock || 0} {/* Default to 0 if undefined */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
