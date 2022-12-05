import { useCallback, Dispatch, FunctionComponent } from 'react'
import { useDropzone } from 'react-dropzone'

const DropzoneComponent: FunctionComponent <{ setFile: Dispatch<any>}> = ({setFile}) => {
    
      const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles); 
        setFile(acceptedFiles[0]);       
      }, []); 
    

    const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({ 
        onDrop, 
        multiple:false,
        accept: {
            'image/*': ['.png','.jpeg', '.jpg'],
            "audio/*": ['.mpeg','.mp3'],
        }
    })
    
    return (
        <div className='p-4 w-full'>
            <div 
                {...getRootProps()} 
                className="h-80 rounded-md cursor-pointer focus:outline-none"
            >
                <input {...getInputProps()} />
                <div 
                    className={'flex flex-col items-center justify-center border-2 border-indigo-500 h-full space-y-2 rounded-3xl ' 
                    //put space after rounded-3xl at end to use addition functionality
                    + (isDragReject === true ? "border-red-500" : "") 
                    + (isDragAccept === true ? "border-green-500" : "")
                }>
                    
                    <img src="/images/folderr.png" alt="folder" className='w-16 h-16'/>
                {
                    isDragReject ? (
                        <p>Sorry, this app doesn't accept this format</p>
                    ):(
                        <div>
                            <p className='text-center font-semibold'>Drop files here...</p>
                            <p className='mt-2 text-base text-gray-300'>Only jpeg, png & mp3 files</p>
                        </div>
                    )
                }   
                </div>
            </div>
        </div>
    )
}

export default DropzoneComponent;