
import { useState } from "react";
import Links from "./Links";
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai';

const Navbar = () => {
    const routes=[
        {id: 1, name: 'Home', path: '/'},
        {id: 1, name: 'Contact', path: '/contact'},
        {id: 1, name: 'Blog', path: '/blog'},
        {id: 1, name: 'Services', path: '/services'},
        {id: 1, name: 'Log in', path: '/login'},
    ]

    const [open, setOPen]= useState(false)
    return (
        <nav className="p-2">
            <div className="md:hidden" onClick={()=> setOPen(!open) }>
             {
                open=== true ? 
                <AiFillCaretRight className="text-3xl "></AiFillCaretRight>
                :  <AiFillCaretDown className="text-3xl " ></AiFillCaretDown>
            }
           
       
            </div>
            <ul className={`md:flex md:static md:justify-center bg-orange-500 absolute p-5  text-white duration-1000 ${open ? 'top-8': '-top-60'}`}>
            {
                routes.map( route => <Links key={route.id} route={route}></Links> )
            }
            </ul>
        </nav>
    );
};

export default Navbar;