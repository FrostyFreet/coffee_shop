import {useEffect, useState} from 'react';
import axios from 'axios'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import WholeBeans from "./pages/WholeBeans.jsx";
import Cafetiere from "./pages/Cafetiere.jsx";
import HomePage from "./pages/HomePage.jsx";
import Checkout from './pages/Checkout.jsx';

function App() {
    const apiKey = "https://fake-coffee-api.vercel.app/api";
    const[response,setResponse]=useState([])
    const[cartItems,setCartItems]=useState([])
    const[searchTerm,setSearchTerm]=useState('')

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const { data } = await axios.get(apiKey);
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
            errorElement:<div>Page not found</div>
        },
        {
            path: "/WholeBeans",
            element: <WholeBeans items={response} setItems={setResponse} cartItems={cartItems} setCartItems={setCartItems} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />,
        },
        {
            path: "/Cafetiere",
            element: <Cafetiere items={response} setItems={setResponse} cartItems={cartItems} setCartItems={setCartItems} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />,
        },
        {
            path:"/Checkout",
            element:<Checkout cartItems={cartItems} setCartItems={setCartItems}/>
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