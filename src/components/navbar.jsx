'use client'

import "@/styles/navbar.css"
import React, { useEffect } from 'react';
import { UseDispatch,useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { FaHome, FaSearch, FaTwitter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Navbar() {
    
    const user = useSelector((state)=> state.authReducer.value)
    const router = useRouter();
    

    return (
        <div className='navbar'>
            
            <div className="info">
                <div><FaTwitter /></div>
                <div><FaHome/> Home</div>
                <div><IoSearch/> Explore</div>
            </div>
            
           <div className="user-data">
                {user?.hasImage ? <div></div>: <div className="no-image">{user.username.substring(0,1)}</div>}
                <div>
                    <div>{user.username}</div>
                <div>Logout</div>
                </div>
                
           </div>
        </div>
    );
}

export default Navbar;