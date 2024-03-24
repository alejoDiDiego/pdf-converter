import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Image from "../../models/Image";

const ImagesList = SortableContainer(
  ({
    images,
    handleDelete,
  }: {
    images: Image[];
    handleDelete: (id: string) => void;
  }) => {
    return (
      <div className=" rounded p-2 flex flex-wrap justify-center items-center w-1/2 gap-5">
        {images.map((image: Image, index: number) => (
          <SortableItem
            key={image.id}
            index={index}
            i={index}
            image={image}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    );
  }
);

const SortableItem = SortableElement(
  ({
    image,
    i,
    handleDelete,
  }: {
    image: Image;
    i: number;
    handleDelete: (id: string) => void;
  }) => {
    return (
      <div className="relative flex justify-center items-center bg-white w-[127px] h-[180px] rounded-md transition-[outline] hover:outline hover:outline-4 outline-blue-500 cursor-move">
        <div className="absolute top-2 left-2 bg-black bg-opacity-50 rounded-md flex justify-center items-center gap-1">
          <img
            src="drag.png"
            className="w-6 h-6 cursor-pointer select-none pointer-events-none"
          />
        </div>

        <div className="absolute top-2 right-2 bg-black bg-opacity-50 px-2 rounded-md flex justify-center items-center gap-1 select-none">
          <img
            onClick={(event: any) => {
              event.stopPropagation();
              handleDelete(image.id);
            }}
            src="cross.png"
            className="w-5 h-5 cursor-pointer"
          />
          <span className=" text-white ">{i + 1}</span>
        </div>
        <img
          src={image.preview}
          alt="preview"
          className="w-auto max-w-[90%] h-[90%] object-contain select-none pointer-events-none"
        />
      </div>
    );
  }
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

  const handleDelete = (id: string) => {
    const newImages = images.filter((img) => img.id !== id);
    setImages(newImages);
  };

  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    setImages(moveArrayItem(images, oldIndex, newIndex));
  };

  return (
    <ImagesList
      shouldCancelStart={(e) =>
        (e.target as HTMLElement).tagName.toLowerCase() === "img"
      }
      handleDelete={handleDelete}
      images={images}
      onSortEnd={onSortEnd}
      axis="xy"
    />
  );
};

export default DragAndDrop;

{
  /* <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by icon wind - Flaticon</a> */
}

{
  /* <a href="https://www.flaticon.com/free-icons/drag-and-drop" title="drag and drop icons">Drag and drop icons created by fulmal - Flaticon</a> */
}
