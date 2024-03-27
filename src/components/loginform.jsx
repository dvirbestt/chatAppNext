'use client'

import { logIn } from '@/redux/features/auth-slice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';


function Loginform(props) {

    const dispatch = useDispatch()
    const router = useRouter()


    const onSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target);
        const data = {
            username: formData.get("username"),
            uid: "123"
        }
        dispatch(logIn(data))
        router.push("/")
    }



    return (
        <form onSubmit={(event)=> onSubmit(event)}>
            <h2>Login</h2>
            <input type="text" placeholder='usernamme' name='username' />
            <input type='password' placeholder='password' name='password'/>
            <button type='submit'>submit</button>
            
        </form>
    );
}

export default Loginform;