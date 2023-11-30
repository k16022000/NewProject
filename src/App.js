import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "./App.css"


function App() {
  const [list, setList] = useState(['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6']);

  function handleOnDragEnd(props) {
    if (!props.destination) return;

    const items = Array.from(list);
    const [reorderedItem] = items.splice(props.source.index, 1);
    items.splice(props.destination.index, 0, reorderedItem);

    setList(items);
  }
  return (
    <div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='ghjg'>
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {list.map((item, index) => {
                  return (
                    <Draggable
                    key={item}
                    draggableId={item}
                    index={index}
                    >
                      {(provided) => (
                        <div className="character" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          {item}
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          <h1>gdd</h1>
        </DragDropContext>
    </div>
  )
}
export default App