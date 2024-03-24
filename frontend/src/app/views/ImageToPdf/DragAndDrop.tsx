import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Image from "../../models/Image";

const ImagesList = SortableContainer(({ images }: { images: Image[] }) => {
  return (
    <div className=" bg-blue-300 rounded p-2 flex flex-wrap justify-center w-full gap-5">
      {images.map((image: Image, index: number) => (
        <SortableItem key={image.id} index={index} i={index} image={image} />
      ))}
    </div>
  );
});

const SortableItem = SortableElement(
  ({ image, i }: { image: Image; i: number }) => (
    <div className="relative">
      <p className="absolute top-0 right-0 bg-black bg-opacity-50 text-white p-1 rounded-md">
        {i + 1}
      </p>
      <img src={image.preview} alt="preview" className="w-72 rounded-md" />
    </div>
  )
);

const DragAndDrop = ({
  images,
  setImages,
}: {
  images: Image[];
  setImages: (images: Image[]) => void;
}) => {
  function moveArrayItem(array: any[], oldIndex: number, newIndex: number) {
    if (newIndex >= array.length) {
      let k = newIndex - array.length + 1;
      while (k--) {
        array.push(undefined);
      }
    }
    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
    return array; // for testing purposes
  }

  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    setImages(moveArrayItem(images, oldIndex, newIndex));
  };

  return <ImagesList images={images} onSortEnd={onSortEnd} axis="xy" />;
};

export default DragAndDrop;
