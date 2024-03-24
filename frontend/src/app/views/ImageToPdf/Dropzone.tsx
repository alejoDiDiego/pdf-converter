import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const MyDropzone = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="w-1/2 border-4 border-dashed border-white flex justify-center items-center h-48 rounded-lg text-white text-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default MyDropzone;
