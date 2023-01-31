import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import OAuth from '../components/OAuth';
const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
  });
  const {name,email, password} = formData;
  const onChange = (e)=>{
    setFormData((prevState)=>({
      ...prevState, 
      [e.target.id]:e.target.value,
    }))
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="key-image" 
          className='w-full rounded-2xl'
          />
        </div>
        <div  className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input className=' mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' type="text" id='name'placeholder='Enter name' value={name} onChange = {onChange} />
            <input className=' mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' type="email" id='email'placeholder='Email address' value={email} onChange = {onChange} />
            <div className='relative mb-6'>
            <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' type={showPassword?"text":"password"}id='password'placeholder='Password ' value={password} onChange = {onChange} />
            {showPassword?(
              <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword(!showPassword)}/>
            ):
            (
              <AiFillEye  className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword(!showPassword)}/>
            )}
            </div>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>Have an account?
                <span onClick={()=>navigate('/signin')} className = 'cursor-pointer text-red-500 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Login</span>
              </p>
              <p>
                <span onClick={()=>navigate('/forgotpassword')} className='cursor-pointer text-blue-500 hover:text-blue-800 transition duration-200 ease-in-out ml-1'>Forgot password?</span>
              </p>
            </div>
            <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800' type="submit">Sign up</button>
            <div className='  flex items-center my-4 before:border-t before:flex-1  before:border-gray-300 after:border-t after:flex-1  after:border-gray-300'>
            <p className='text-center font-semibold mx-4'>OR</p>
          </div>
          <OAuth/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUp
