import { useEffect, useState } from "react";
import DragAndDrop from "./DragAndDrop";
import MyDropzone from "./Dropzone";
import Image from "../../models/Image";

const ImageToPdf = () => {
  const [images, setImages] = useState<Image[]>([]);
  useEffect(() => {
    console.log(images);
  }, [images]);
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl font-semibold text-white text-center">
        Image to PDF
      </h1>
      <MyDropzone images={images} setImages={setImages} />
      <DragAndDrop images={images} setImages={setImages} />
    </div>
  );
};

export default ImageToPdf;
