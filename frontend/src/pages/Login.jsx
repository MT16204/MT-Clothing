import React, {useState} from 'react'
import Title from '../components/Title';
import NewSletterBox from '../components/NewsletterBox'

const SignIn = () => {
  const [currentState, setCurrentState] = useState('Login');
  const onSubmitHandler = async(event) => {
    event.preventDefault();
  }
  return (
    <div>
    <form onSubmitHandler={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-[#4f4e4e]'>
        <div className='text-3xl inline-flex items-center gap-2 mb-2 mt-10 '>
            <Title text1={`${currentState}`}/>
        </div>
      {currentState === 'Login' ? '' : <input type="text" placeholder='Name' className='w-full px-3 py-2 border border-gray-800'required/>}
      <input type="email" placeholder='Email' className='w-full px-3 py-2 border border-gray-800'required/>
      <input type="password" placeholder='Password' className='w-full px-3 py-2 border border-gray-800'required/>

      <div className='w-full flex justify-between text-sm mb-8'>
      <p className='cursor-pointer'>Forgot password?</p>
        {
          currentState === 'Login'  
          ?<p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
          :<p onClick={()=>setCurrentState('Login')} className='cursor-pointer flex items-center justify-center'>Login here</p>
        }
      </div>
      <button className='bg-black text-white px-8 py-2 mt-0'>{currentState === 'Login' ? 'Login' : 'Sign Up'}</button>
    </form>
    <NewSletterBox/>
  </div>
  )
}

export default SignIn