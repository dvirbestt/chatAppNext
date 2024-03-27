import "@/styles/form.css"
import Loginform from '@/components/loginform';
import React from 'react';
import sideImage from "/public/twitter.jpg"
import Image from "next/image";

export const metadata = {
    title: "Login"
}

function page() {
    return (
        <div>
            <div className='form-container'>
                <Loginform />
                <Image src={sideImage} style={{borderRadius: "0px 10px 10px 0px"}} />
            </div>

        </div>
    );
}

export default page;