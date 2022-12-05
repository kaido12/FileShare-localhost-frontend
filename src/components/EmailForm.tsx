import axios from 'axios';
import React, { FunctionComponent, useState } from 'react'

const EmailForm: FunctionComponent<{
  id: string;
}> = ({ id }) => {

  const [emailFrom , setEmailFrom] = useState("");
  const [emailTo , setEmailTo] = useState("");
  const [message , setMessage] = useState(null);

  const handleEmail = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios({
        method: "POST",
        url: "api/files/email",
        data: {
          id,
          emailFrom,
          emailTo,
        },
      });
      setMessage(data.message);
    } catch (error) {
      setMessage(error.data.response.message);
    }
  }

  return (
    <div className='flex flex-col items-center justify-center w-full p-2 space-y-2'>
      <h3 className='mb-1 p-2 text-lg font-medium bg-purple-500 rounded-2xl'>Also can send file through mail</h3>
      <form 
        className='flex flex-col items-center justify-center w-full p-2 space-y-2' 
        onSubmit={handleEmail}
      >
        <input  
          className='p-2 text-white bg-gray-700 border-2 border-blue-500 rounded-md focus:outline-none' 
          type="email" 
          placeholder='Email From'
          required
          onChange={(e) => setEmailFrom(e.target.value)}
          value={emailFrom} 
        />

        <input  
          className='p-2 text-white bg-gray-700 border-2 border-blue-500 rounded-md focus:outline-none' 
          type="email" 
          placeholder='Email To'
          required
          onChange={(e) => setEmailTo(e.target.value)}
          value={emailTo}         
        />
        <button 
          className='btn'
          type="submit"
        >
          Send Email
        </button>
      </form>
    {
      message && <p className='font-medium text-red-500'>{message}</p>
    }  
    </div>
  )  
}

export default EmailForm