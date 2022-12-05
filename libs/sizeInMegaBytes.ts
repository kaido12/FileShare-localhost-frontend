import React from 'react'

const sizeInMegaBytes = (bytes: number):String => (
    `${(bytes /1024 / 1024).toFixed(2)} MB`
)
 


export default sizeInMegaBytes