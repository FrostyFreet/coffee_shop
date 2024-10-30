import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
export default function Checkout({cartItems,setCartItems}){

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

    // Convert the map back to an array
    const uniqueItems = Object.values(itemMap);

    

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            city: formData.get('city'),
            zip_code: formData.get('zip'),
            cardName: formData.get('cardName'),
            cardNumber: formData.get('cardNumber'),
          };
        console.log(data);
          
        
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2 className="mb-4">Checkout</h2>
                <div className="row">
                    {/* Cart List */}
                    <div className="col-md-6">
                        <h4 className="mb-4">
                            <FontAwesomeIcon icon={faShoppingCart} /> Your Cart
                        </h4>
                        <div className="card">
                            <div className="card-body">
                                <ul className="list-group">
                                    {uniqueItems.length > 0 ? (
                                        uniqueItems.map((item, index) => (
                                            <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={item.image_url}
                                                        alt={item.name}
                                                        style={{ width: '50px', height: '50px', marginRight: '10px' }}
                                                    />
                                                    <b>{item.name}</b> - ${item.price} Quantity: {item.quantity}
                                                    <button
                                                        style={{
                                                            background: "transparent",
                                                            border: "none",
                                                            marginLeft: "15px",
                                                            color: "black",
                                                            fontSize: "24px",
                                                        }}
                                                        onClick={() => removeElement(item.id)}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </li>
                                        ))
                                    ) : (
                                        <span style={{ fontSize: "24px", marginLeft: "43%" }}>Your cart is empty</span>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Checkout Form */}
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            {/* User Information */}
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h5>User Information</h5>
                                </div>
                                <div className="card-body">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="firstName">First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                name="firstName"
                                                required
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                name="lastName"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h5>Shipping Address</h5>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            name="address"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="city"
                                            required
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="zip">Zip Code</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="zip"
                                                name="zip"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Details */}
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h5>Payment Details</h5>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="cardName">Name on Card</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cardName"
                                            name="cardName"
                                            required
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="cardNumber">Card Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="cardNumber"
                                                name="cardNumber"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Complete Order</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

