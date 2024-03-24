import MyDropzone from "./Dropzone";

const ImageToPdf = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl font-semibold text-white text-center">
        Image to PDF
      </h1>
      <MyDropzone />
    </div>
  );
};

export default ImageToPdf;
