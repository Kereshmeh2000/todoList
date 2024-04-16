import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'


const iniState = [
  {id:1, text: 'Task 1', completed: false},
  {id:2, text: 'Task 2', completed: false},
  {id:3, text: 'Task 3', completed: false},
  {id:3, text: 'Task 4', completed: false}
]

const todos = (state= iniState, action) => {
  switch(action.type){
    case 'Add':
      return [
        ...state,
        {id:action.id, text: action.text, completed: false}
      ]
    case 'Toggle':
      return state.map(todo =>{
        if (todo.id !== action.id) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default: return state;
  }
}

const store = createStore (todos)

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
