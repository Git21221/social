import React from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/button/Button'
import './Signup.css'

function Signup() {
  return (
    <>
      <div className="box flex bg-[url(background.jpg)] bg-no-repeat bg-cover bg-center">
        <div className="layer">
          <div className="form flex flex-col w-min p-10 h-screen text-white">

            <div className="logo">
              <img src="/logo.jpg" alt="" srcset="" className='w-10'/>
            </div>

            <div className="text">
              <h2 className='font-bold'>Create an account</h2>
              <h2>Sign up to continue</h2>
            </div>

            <div className="forms flex flex-col gap-4">
              <p className='font-bold'>NAME</p>
              <Input />
              <p className='font-bold'>EMAIL</p>
              <Input />
              <p className='font-bold'>PASSWORD</p>
              <Input />
              <Button content="Create an account" className="bg-violet-500 text-white font-normal" />
            </div>
              <h3>Or connect with socials</h3>
            <div className="connection">
              <Button content=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup