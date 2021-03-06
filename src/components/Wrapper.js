import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import List from './List';
import store from '../utils/store';
import StoreApi from '../utils/storeApi';
import InputContainer from './Input/InputContainer';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext } from 'react-beautiful-dnd';


const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    //background: 'grey',
    width: '100%',
    overflowY:'auto',
  },
  listContainer: {
    display: 'flex',
  },
}));

export default function App() {
  const [data, setData] = useState(store);
  const [open, setOpen] = useState(false);
  const [backgroundUrl, setBackgroundUrl] = useState('');


  const classes = useStyle();
  const addMoreCard = (title, listId) => {
    //console.log(title, listId);

    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

 const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log('destination', destination, 'source', source, draggableId);
    if(!destination){
      return;
    }
    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      //console.log(sourceList)
      sourceList.cards.splice(source.index, 1); /* Removing 1 the card from cource.index */
      destinationList.cards.splice(destination.index, 0, draggingCard); /* Add all draggableCard which have same card id as draggable */
      //console.log(sourceList)
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    }else{
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id] : destinationList
        },
      };
      setData(newSate);
    }
  };
  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
       <div
        className={classes.root}
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <div className={classes.listContainer}>
            {data.listIds.map((listId) => {
              const list = data.lists[listId];
              return <List list={list} key={listId} />;
            })}
            <InputContainer type="list" />
          </div>
        </DragDropContext>
      </div>
    </StoreApi.Provider>
  );
}
