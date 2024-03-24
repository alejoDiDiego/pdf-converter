import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "../../models/Image";

const MyDropzone = ({
  images,
  setImages,
}: {
  images: Image[];
  setImages: (images: Image[]) => void;
}) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (acceptedFiles.length === 0) return;
      const files = acceptedFiles.map((file: File) => {
        return {
          id:
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15),
          file,
          preview: URL.createObjectURL(file),
        };
      });
      console.log(files);
      setImages([...images, ...files]);
    },
    [images, setImages]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <div
      {...getRootProps()}
      className="w-1/2 border-4 border-dashed border-white flex justify-center items-center h-48 rounded-lg text-white text-center cursor-pointer"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drop your images here, or click to select</p>
      )}
    </div>
  );
};

export default MyDropzone;
