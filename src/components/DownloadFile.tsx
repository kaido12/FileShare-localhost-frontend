import React from 'react'

const DownloadFile = ({downloadPageLink}) => {
  return (
    <div className='p-2'>
        <h1 className='mb-1 p-2 text-lg font-medium bg-purple-500 rounded-2xl'>Paste Download Link⏬ To Browser</h1>
        <div className='flex space-x-2'>
            <span className='break-all'>{downloadPageLink}</span>
            <img 
                src="/images/copy.png" 
                className='w-8 h-8 object-contain cursor-pointer rounded-md hover:bg-gray-300 ease-in-out duration-300' 
                onClick={() => navigator.clipboard.writeText(downloadPageLink)}
            />
        </div>
    </div>
  )
}

export default DownloadFile