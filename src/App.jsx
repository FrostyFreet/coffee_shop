import {useEffect, useState} from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import axios from 'axios'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import WholeBeans from "./pages/WholeBeans.jsx";
import Cafetiere from "./pages/Cafetiere.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
    const[response,setResponse]=useState([])
    const[cartItems,setCartItems]=useState([])
    const[searchTerm,setSearchTerm]=useState('')

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://fake-coffee-api.vercel.app/api');
                const updatedData = data.map(item => ({
                    ...item,
                    stock: 10
                }));
                setResponse(updatedData);

            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    },[])

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage items={response} setItems={setResponse} setCartItems={setCartItems} cartItems={cartItems} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />,
            ErrorPath: "/404",
        },
        {
            path: "/WholeBeans",
            element: <WholeBeans items={response}  cartItems={cartItems} setCartItems={setCartItems} />,
        },
        {
            path: "/Cafetiere",
            element: <Cafetiere items={response} cartItems={cartItems} setCartItems={setCartItems} />,
        }
    ]);

    return (
        <>
            <RouterProvider router={router} >
            </RouterProvider>
        </>
    );
}

export default App