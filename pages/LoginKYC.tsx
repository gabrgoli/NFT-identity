import React from 'react'
import type { NextPage } from "next";
import { useRouter } from "next/router";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

interface State {
    email:string,
    password: string;
    showPassword: boolean;
  }


const LoginKYC: NextPage = () => {
    const [error,setError]= React.useState<boolean>(false)
    const [input,setInput]= React.useState<State>({
        email:"",
        showPassword: false,
        password:""
    })


    const router = useRouter();

    const handleCancelClick = () => {
            router.push('/')
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log("input:",input)
}

    const handleChange=(e:any)=>{
        e.preventDefault();
        setError(()=>false)

        if(e.target.name==='email'){
            setInput((input)=>({...input,email:e.target.value}))
        }

        if(e.target.name==='password'){
            setInput((input)=>({...input,password:e.target.value}))
        }

  

    }


  return (
    <form
        onSubmit={(e)=>handleSubmit(e)}
    >
        <div className='boxLogin'>

            <img className='logo-Login' src="IAMX_Logo_Blue.svg" alt="iamx"></img>
            <div className='textLogin1'>Own your identity  </div> 
            <div  className='textLogin2'>Welcome to IAMX - your next generation passport! Where you have control over your identity.</div>
            <input className='inputLogin' placeholder="Email" name='email' value={input.email} onChange={(e)=>handleChange(e)}></input>
            <input className='inputLogin' type="password" placeholder="Password" name='password' value={input.password} onChange={(e)=>handleChange(e)}></input>

            <button className='buttonLogin' onClick={(e)=>handleSubmit(e)}>   Login   </button>
            <button  className='buttonCancel' onClick={handleCancelClick}>   Cancel   </button>

        </div>
    </form>

  )
}

export default LoginKYC;