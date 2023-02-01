import { getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Profile = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [formData, setFormData] = useState({
    email:auth.currentUser.email,
    name:auth.currentUser.displayName,
  });
  const {email, name} = formData;
  const onLogOut = ()=>{
    auth.signOut();
    navigate('/');
  }
  return (
    <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-6'>
          <form >
            {/* name input */}
            <input type="text" id='name' value={name} disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out '/>
            {/* email part */}
            <input type="email" id='email' value={email} disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out '/>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
              <p className='flex items-center'>Do you want to change your name?
                <span className='text-red-600 hover:text-red-800 transition duration-200 ease-in-out cursor-pointer ml-1'>Edit</span>
              </p>
              <p className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer' onClick={onLogOut}>Sign Out</p>
            </div>
            
          </form>
        </div>
      </section>
    </>
  )
}

export default Profile
