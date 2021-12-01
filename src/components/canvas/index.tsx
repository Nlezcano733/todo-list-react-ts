import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { I_initialState } from '../../state/interfaces/I_initialState';
import { DragDropContext } from 'react-beautiful-dnd';
import { milestones, tasks } from '../../state/types/context';
import { actionMilestone, actionTask } from '../../state';

type Props = {
};



const Canvas: React.FC<Props> = (props: Props) => {
  const milestones = useSelector<I_initialState>(state => state);
  const dispatch = useDispatch();


  return (
    <DragDropContext onDragEnd={(res) => console.log(res)}>
      <div className="w-48 bg-red-500 hover:bg-red-600 text-white px-4 py-2">
        <h1>Prueba</h1>
      </div>
    </DragDropContext>
  );
};

export default Canvas;