import React,{useContext} from "react";
// import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
import {TodoContext} from '../store/TodoContext'
// const Todos: React.FC<{ items: Todo[],onRemove: (id: string) => void}> = (props) => {
//   return (
//     <ul className={classes.todos}>
//       {props.items.map((item) => (
//         <TodoItem  key={item.id} text={item.text} onTodoRemoved={props.onRemove.bind(null,item.id)} />
//       ))}
//     </ul>
//   );
// };

const Todos: React.FC= () => {
  const cntx=useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {cntx.items.map((item) => (
        <TodoItem  key={item.id} text={item.text} onTodoRemoved={cntx.removeTodo.bind(null,item.id)} />
      ))}
    </ul>
  );
};

export default Todos;
