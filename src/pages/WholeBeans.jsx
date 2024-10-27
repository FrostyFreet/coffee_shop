import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navbar from '../components/Navbar.jsx'
import Footer from "../components/Footer.jsx";
import Content from "../components/Content.jsx";
export default function WholeBeans({items,cartItems,setCartItems}){
    const filtered=items.filter((item)=>!(item.grind_option.includes('Whole Bean' || 'Whole bean')))
    return(
        <>
            <Navbar cartItems={cartItems}/>
            <Content items={filtered} setCartItems={setCartItems} cartItems={cartItems} />
            <Footer/>
        </>
    )
}