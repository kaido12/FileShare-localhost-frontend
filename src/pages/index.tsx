import DropzoneComponent from "@components/DropzoneComponent";
import RenderFile from "@components/RenderFile";
import  { useState }  from "react";
import axios from "axios";
import DownloadFile from "@components/DownloadFile";
import EmailForm from "@components/EmailForm";

export default function Home() {
  const [file, setFile] = useState(null);
  const [id, setId] = useState(null);
  const [downloadPageLink, setDownloadPageLink] = useState(null);
  const [uploadState, setUploadState] = useState<
    "Upload"|"Uploaded" | "Uploading" | "Upload Failed"
  >("Upload");


  const resetComponent = () => {
    setFile(null);
    setDownloadPageLink(null);
  }

  const handleUpload = async () => {
    if (uploadState === "Uploading") return;
    setUploadState("Uploading");
    const formData = new FormData();
    formData.append("myFile", file);
    try {
      const { data } = await axios({
        method: "POST",
        data: formData,
        url: "api/files/upload",
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Content-Type": "multipart/form-data",
        },
      });
      setDownloadPageLink(data.downloadPageLink);
      setId(data.id);
    } catch (error) {
      console.log(error?.response?.data);
      setUploadState("Upload Failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-2 text-3xl font-medium">Choose a file & Upload it!</h1>
      <div className="flex flex-col items-center justify-center bg-stone-dark shadow-xl w-96 rounded-xl">
        {!downloadPageLink && <DropzoneComponent setFile={setFile} />}

        {/* renderfile */}
        {file && (
          <RenderFile
            file={{
              format: file.type.split("/")[1],
              name: file.name,
              sizeInBytes: file.size,
            }}
          />
        )}
        {/* upload button */}
        {!downloadPageLink && file && (
          <button
          onClick={handleUpload} 
          className="btn"
          >
            {uploadState}
          </button>
        )}

        {
          downloadPageLink && (
            <div className="p-2 text-center">
              <DownloadFile downloadPageLink={downloadPageLink}/>
              <EmailForm id={id}/>
              <button 
                className="p-4 my-2 bg-gray-800 rounded-2xl hover:bg-green-800 focus:ouline-none"
                onClick={resetComponent}
              >
                Upload New File
              </button>
            </div>
        )}
      </div>
    </div>
  );
}
