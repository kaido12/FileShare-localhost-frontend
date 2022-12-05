import sizeInMegaBytes from 'libs/sizeInMegaBytes';
import { IFile } from 'libs/types';
import { FunctionComponent } from 'react'

const RenderFile: FunctionComponent<{file: IFile}> = ({file:{format,name,sizeInBytes}}) => {
  return (
    <div className='flex items-center w-full p-4 my-2'>
        <img src={`/images/${format}.png`} className='w-14 h-14' />
        <span className='mx-2'>{name}</span>
        <span className='ml-auto'>{sizeInMegaBytes(sizeInBytes)}</span>
    </div>
  )
}

export default RenderFile;