import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) =>{
        const userInfo={
           email:data.email,
           password:data.password,
        }
   
      await  axios.post("https://book-web-app-backend.onrender.com/api/user/login",userInfo)
       .then((res)=>{
           console.log(res.data);
           if(res.data){
              
               toast.success(' Login Successfully ');
               document.getElementById('my_modal_3').close();
               setTimeout(()=>{
                window.location.reload();
                localStorage.setItem("Users",JSON.stringify(res.data.user));
               },1000)
           }
          
       })
       .catch((error)=>{
          if(error.response){
           console.log(error);
           toast.error('Incorrect credentials');
           
          }
       })
       
   
   }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box   dark:bg-slate-900 dark:text-white">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
                    <h3 className="font-bold text-lg">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none py-1' {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder='Enter Your Password' className='w-80 px-3 border rounded-md outline-none py-1' {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-300'>Login</button>
                            <p>Not Registered <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
