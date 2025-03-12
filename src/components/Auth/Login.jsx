import React, { useState } from 'react';

const Login = ({HandleLogin}) => {

    const [ email, setEmail] = useState('')
    const[ password, setPassword]=useState('')
    
    const SubmitHandler=(e)=>{

        e.preventDefault()
        HandleLogin(email,password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-black text-white' >
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form onSubmit={(e)=>{
                    SubmitHandler(e)
                }} className='flex flex-col items-center justify-center'>
                    <input value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} required className=' outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Email'></input>
                    <input value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} required className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type='password' placeholder=' Enter Password'></input>
                    <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
                 </form>
            </div>
        </div>
    );
};

export default Login;