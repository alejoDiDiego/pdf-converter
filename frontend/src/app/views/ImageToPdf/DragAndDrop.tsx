import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DragDropContextProps,
  DropResult,
} from "react-beautiful-dnd";

const data = [
  {
    id: "weqndi21idn219d82db1o0b",
    name: "Image 1",
  },
  {
    id: "2e12dsdasdwdw1dwd2e",
    name: "Image 2",
  },
  {
    id: "dikwqndi21ndi12neindso",
    name: "Image 3",
  },
];

const DragAndDrop = () => {
  const [images, setImages] = useState(data);

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
            className="flex"
          >
            {images.map((image, index) => (
              <Draggable draggableId={image.id} key={image.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    key={image.id}
                    className="flex gap-2 bg-white rounded-md mx-1"
                  >
                    <p>{image.name}</p>
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
