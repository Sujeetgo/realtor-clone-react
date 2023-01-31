import React from 'react'
import { useNavigate } from 'react-router';
import {FcGoogle} from 'react-icons/fc'
import { toast } from 'react-toastify'
import {getAuth, signInWithPopup} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
const OAuth = () => {
  const navigate =  useNavigate();
  const onGoogleClick = async()=>{
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result =  await signInWithPopup(auth,provider);
      const user = result.user;
      // console.log(user);
      const docRef = doc(db,"users",user.uid);
      const docSnap = await getDoc(docRef);
      if(!docSnap.exists()){
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp:serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorized with Google");
      console.log(error);
      
    }
  }
  return (
    <button type='button' onClick={onGoogleClick} className=' w-full flex items-center justify-center bg-red-700 text-white px-7 py-3 rounded uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'>
      <FcGoogle className='text-2xl bg-white rounded-full mr-2' />Continue with Google
    </button>
  )
}

export default OAuth
