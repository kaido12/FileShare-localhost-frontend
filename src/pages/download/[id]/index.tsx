import RenderFile from '@components/RenderFile';
import axios from 'axios';
import { IFile } from 'libs/types';
import { GetServerSidePropsContext, NextPage } from 'next';
import fileDownload from "js-file-download";

const index: NextPage<{file: IFile}> = ({ file: {format, name, sizeInBytes,id} }) => {

  const handleDownload = async() => {
    const {data} = await axios.get(`/api/files/${id}/download`, {
      responseType: "blob",
    });
    fileDownload(data, name);
  };

  return (
    <div className='flex flex-col items-center justify-center py-4 space-y-2 bg-stone-dark rounded-xl shadow-xl w-96'>
        { !id ?
            (<span>
                Oops! File doesn't exist!😲 
                <br/>
                Check the URL 
            </span>) :
            <>
                <h1 className='text-xl text-green-500'>Ready to download</h1>
                <img src="/images/download.png" className='w-16 h-16' />
                <RenderFile file={{format, name, sizeInBytes}} />
                <button 
                  className='btn'
                  onClick={handleDownload}
                >
                  Download
                </button>
            </>
        }
    </div>
  )
}

export default index;

export async function getServerSideProps(context: GetServerSidePropsContext) {

    const { id } = context.query;
    let file;
    try {
        const { data } = await axios.get(`${process.env.API_BASE_ENDPOINT}/api/files/${id}`);
        file = data;
    } catch (error) {
        console.log(error.response.data);
        file = {};
    }
    return {
      props: {
        file,
      }, // will be passed to the page component as props
    }
  }