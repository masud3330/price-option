
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
        <nav>
            <div className="md:hidden" onClick={()=> setOPen(!open) }>
             {
                open=== true ? 
                <AiFillCaretRight className="text-3xl "></AiFillCaretRight>
                :  <AiFillCaretDown className="text-3xl " ></AiFillCaretDown>
            }
           
       
            </div>
            <ul className="md:flex">
            {
                routes.map( route => <Links key={route.id} route={route}></Links> )
            }
            </ul>
        </nav>
    );
};

export default Navbar;