import Content from "../components/Content.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";


export default function HomePage({items,setItems,cartItems,setCartItems,searchTerm,setSearchTerm}) {

    return(
        <>
            <Navbar  cartItems={cartItems} setCartItems={setCartItems} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
            <Content items={items} setItems={setItems} setCartItems={setCartItems} cartItems={cartItems} searchTerm={searchTerm} />
            <Footer />
        </>
    )
}