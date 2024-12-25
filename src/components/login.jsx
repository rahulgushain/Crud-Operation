import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [emaildata, setEmailData] = useState("")
    const [passdata, setPassData] = useState("")



    const navigation = useNavigate()
 
   
    localStorage.setItem("email","rahulg252002@gmail.com")
    localStorage.setItem("password","12345")

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");


    const clickHandler =(e)=>{
      e.preventDefault()
       if(email === emaildata && password===passdata ){
        toast.success('Successfully login')
        setEmailData("")
        setPassData("")

        navigation("/Crud")
        
        
       }
       else{
        toast.error('Not Login')

       }
       
    }
    return(
        <div className=" flex justify-center items-center h-[100vh] w-full "
        style={{
            backgroundImage : 'url(https://t3.ftcdn.net/jpg/09/61/27/48/360_F_961274808_fX06eKzHJDCX9LO1Uew8YsL8Gk7RDZBu.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'right'
        }}>
            <form 
            className="flex flex-col justify-center items-center h-[60%] w-[80%] md:w-[50%] bg-black bg-opacity-50 p-5 rounded-xl ">
                <label className="text-start text-white w-full text-xl">
                Email   
                </label>
                <input type="text" className="w-full mt-2 rounded-xl p-2" onChange={(e)=>setEmailData(e.target.value)}/>
                <label className="text-start text-white w-full mt-4 text-xl">
                Password 
                </label> 
                <input type="password" className="w-full mt-2 p-2 rounded-xl" onChange={(e)=>setPassData(e.target.value)}/>
                <p className=" text-blue-600 text-end w-full">Forget Password?</p>

                <button className="w-full bg-red-500 text-white p-2 mt-4 text-xl font-bold rounded-xl" onClick={clickHandler}>Login</button>

            </form>
        </div>
    )
}