import { useEffect, useState } from "react";
import DragAndDrop from "./DragAndDrop";
import MyDropzone from "./Dropzone";
import Image from "../../models/Image";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const ImageToPdf = () => {
  const [images, setImages] = useState<Image[]>([]);

  const convertToPdf = async () => {
    const doc = new jsPDF();
    const margin = 10; // Establece el margen en unidades de medida del PDF (por defecto, milímetros)

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const response = await fetch(image.preview);
      const blob = await response.blob();
      const img = await createImageBitmap(blob);
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const imgData = canvas.toDataURL("image/png");

        const pdfPageWidth = doc.internal.pageSize.getWidth();
        const pdfPageHeight = doc.internal.pageSize.getHeight();

        const imageAspectRatio = img.width / img.height;
        const pdfPageAspectRatio = pdfPageWidth / pdfPageHeight;

        let width = pdfPageWidth - 2 * margin; // Resta el margen del ancho
        let height = pdfPageHeight - 2 * margin; // Resta el margen de la altura

        // Ajusta el ancho o la altura según la relación de aspecto
        if (imageAspectRatio > pdfPageAspectRatio) {
          height = width / imageAspectRatio;
        } else {
          width = height * imageAspectRatio;
        }

        // Calcula las coordenadas x e y para centrar la imagen en la página
        const x = (pdfPageWidth - width) / 2;
        const y = (pdfPageHeight - height) / 2;

        // Añade la imagen al PDF en las coordenadas x e y
        doc.addImage(imgData, "PNG", x, y, width, height);
      }

      if (i < images.length - 1) {
        doc.addPage();
      }
    }

    doc.save("download.pdf");
  };

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
      <button
        onClick={convertToPdf}
        className="bg-blue-500 text-white px-3 py-1 rounded-md"
      >
        Convert to PDF
      </button>
    </div>
  );
};

export default ImageToPdf;
