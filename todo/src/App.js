import Todo from './Todo.css';
import { useEffect, useState } from "react"

let todoId = 0;

export default function App({store}) {

    const [, forceUpdate] = useState(0)

    useEffect ( () => {
        const unSub = store.subscribe( () => forceUpdate( c => c+1))
        return () => unSub
    }, store)

    const handleKey = (event) => {
        if('Enter' === event.code){
            
        const {target} = event;
        store.dispatch({
        type: 'Add',
        id:todoId++,
        text: event.target.value,
        
     })
     target.value = ''
   }
}
    const todo = store.getState().map (todo => (
        <li 
        onClick={()=> store.dispatch({
            type: 'Toggle',
            id: todo.id,
         } )}
        key={todo.id} 
        style={{textDecoration : todo.completed ? 'line-through' : 'none'}}>
            {todo.text}
        </li>
    ))
    return (
    <div>
        <section className="todoHeader">
        <h2 className="todoTitle">To Do List</h2>
      </section>
      <section className="todoBody">
         <input onKeyDown={handleKey} type="text" placeholder="Add Task And Press 'Enter'"/>
         <ul>
              {todo}
         </ul>
      </section>
    </div>
    )
}
