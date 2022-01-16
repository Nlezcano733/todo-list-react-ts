import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

type Props = {
};

const Canvas: React.FC<Props> = (props: Props) => {

  return (
    <DragDropContext onDragEnd={(res) => console.log(res)}>
      <div className="w-48 bg-red-500 hover:bg-red-600 text-white px-4 py-2">
        <h1>Prueba</h1>
      </div>
    </DragDropContext>
  );
};

export default Canvas;