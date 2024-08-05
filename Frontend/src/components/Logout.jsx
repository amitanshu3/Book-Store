import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
    const[authUser,setAuthUser]=useAuth()

    const handaleLogout=()=>{
        try{
        setAuthUser(
            {
                ...authUser,
                user:null
            }
        )
        localStorage.removeItem("Users");
        toast.success("Logout sucessfully");
         setTimeout(()=>{
            window.location.reload();
         },2000)
        }
        
        catch(error){
            toast.error("error")
        }
    }
  return (
    <div>
     <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"  onClick={handaleLogout}>
  Logout
</button>

    </div>
  )
}

export default Logout
