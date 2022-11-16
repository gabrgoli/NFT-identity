import React from "react";
import { useState } from 'react';

const Form = () => {

    const[input,setInput]=useState({
        walletPool:'',
        amount:'',
        email:'',
        mobileNumber:'',
        walletAdress:'',
    })

    const [errors, setErrors] = useState({
        walletPool:'',        
        amount:'',
        email:'',
        mobileNumber:'',
        walletAdress:''
    }) 

    const validate=(ev:any)=>{

      //validate that mobile number its must be a number  
      if(ev.target.name==='mobileNumber'&&(!(/\d/.test(ev.target.value))&& ev.target.value!=='')){return}
      
      setInput((input)=>({...input,[ev.target.name]:ev.target.value}))
      setErrors((errors)=>({...errors,[ev.target.name]:""}))
    }
    
    const handleSubmit= async(e:any)=>{
        e.preventDefault();


        //WalletPool Validation
        if (input.walletPool===''){ 
            errors.walletPool = "WalletPool cannot be empty"
            setErrors({...errors,walletPool:"WalletPool cannot be empty"})
        } else{
            errors.walletPool = ""
            setErrors({...errors,walletPool:""})
        }

         //amount Validation
        if (input.amount===''){ 
            errors.amount = "Amount cannot be empty"
            setErrors((errors)=>({...errors,amount:"Amount cannot be empty"}))
        } else{
            errors.amount = ""
            setErrors((errors)=>({...errors,amount:""}))
        }
         //email Validation
        if (input.email===''){ 
            errors.email = "Email cannot be empty"
            setErrors((errors)=>({...errors,email:"Email cannot be empty"}))
        } else{
            if (!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/).test(input.email) ) {  
                errors.email = "Email its not a valid email"
                setErrors((errors)=>({...errors,email:"Email its not a valid email"}))
            }else{
                errors.email = ""
                setErrors((errors)=>({...errors,email:""}))
            }
        }
        //mobileNumber Validation
        if (input.mobileNumber===''){ 
            errors.mobileNumber = "Mobile number cannot be empty"
            setErrors((errors)=>({...errors,mobileNumber:"Mobile number cannot be empty"}))
        } else{
            if (!(/\d/).test(input.mobileNumber) ) {  
              errors.mobileNumber = "Mobile number must be a number"
              setErrors((errors)=>({...errors,mobileNumber:"Mobile number must be a number"}))
            }else{
            errors.mobileNumber = ""
            setErrors((errors)=>({...errors,mobileNumber:""}))
            }
        }
        //walletAdress Validation
        if (input.walletAdress===''){ 
            errors.walletAdress = "Wallet Adress cannot be empty"
            setErrors((errors)=>({...errors,walletAdress:"Wallet Adress cannot be empty"}))
        } else{
            errors.walletAdress = ""
            setErrors((errors)=>({...errors,walletAdress:""}))
        }

        console.log("errors mostrar:",errors)

        errors.amount||errors.email||errors.mobileNumber||errors.walletAdress||errors.walletPool?console.log("hay errores"):console.log("envio completo",input)  
    }

  return (
<form id="msform">
  <div>
    <h2 className="fs-title">Wallet Address Pool</h2>
    <h3 className="fs-subtitle">This is step 1</h3>
    <input  type="text" name="walletPool" value={input.walletPool}  placeholder="Wallet Address Pool" onChange={(ev)=>validate(ev)} style={errors.walletPool?{border:"2px solid red"}:{}} className={errors.walletPool&&"form2"}/>
    <input type="text" name="amount" value={input.amount}  placeholder="Amount of Beneficial Owners" onChange={(ev)=>validate(ev)} style={errors.amount?{border:"2px solid red"}:{}} className={errors.amount&&"form2"}/>
    <input type="text" name="email" value={input.email} placeholder="E-Mail" onChange={(ev)=>validate(ev)} style={errors.email?{border:"2px solid red"}:{}} className={errors.email&&"form2"} />
    <input type="text" name="mobileNumber" value={input.mobileNumber} placeholder="Mobile Number" onChange={(ev)=>validate(ev)} style={errors.mobileNumber?{border:"2px solid red"}:{}} className={errors.mobileNumber&&"form2"}/>
    <input type="text" name="walletAdress" value={input.walletAdress} placeholder="Wallet Adress" onChange={(ev)=>validate(ev)} style={errors.walletAdress?{border:"2px solid red"}:{}} className={errors.walletAdress&&"form2"}/>
    <input type="submit" onClick={(e)=>handleSubmit(e)} name="next" className="next action-button" value="Next" onChange={(ev)=>validate(ev)}  />
    <section className="errorsClass">
        {errors.walletPool?<>{errors.walletPool} <br/></>:<></>}
        {errors.amount?<>{errors.amount} <br/></>:<></>}
        {errors.email?<>{errors.email} <br/></>:<></>}
        {errors.mobileNumber?<>{errors.mobileNumber} <br/></>:<></>}
        {errors.walletAdress?<>{errors.walletAdress} <br/></>:<></>}
    </section>
  </div>
</form>
  );
};

export default Form;