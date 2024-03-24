import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import Image from "../../models/Image";

// const data = [
//   {
//     id: "weqndi21idn219d82db1o0b",
//     name: "Image 1",
//   },
//   {
//     id: "2e12dsdasdwdw1dwd2e",
//     name: "Image 2",
//   },
//   {
//     id: "dikwqndi21ndi12neindso",
//     name: "Image 3",
//   },
// ];

const DragAndDrop = ({
  images,
  setImages,
}: {
  images: Image[];
  setImages: (images: Image[]) => void;
}) => {
  const handleDragDrop = (result: DropResult) => {
    const { source, destination, type } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const newImages = [...images];
      const [removed] = newImages.splice(source.index, 1);
      newImages.splice(destination.index, 0, removed);

      setImages(newImages);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      <Droppable droppableId="ROOT" type="group" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex w-96 flex-wrap items-center"
          >
            {images.map((image, index) => (
              <Draggable draggableId={image.id} key={image.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="flex gap-2 bg-white rounded-md m-2"
                  >
                    <img
                      src={image.preview}
                      alt="preview"
                      className="w-20 h-20 rounded-md"
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragAndDrop;
