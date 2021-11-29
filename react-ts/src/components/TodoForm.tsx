import React, { FormEvent, useRef, useContext } from "react";
import classes from "./FormTodo.module.css";
import { TodoContext } from "../store/TodoContext";
// const TodoForm :React.FC<{ onAddTodo: (text: string) => void}> = (props) => {
// const newText = useRef<HTMLInputElement>(null)
// const handleSubmit=(e:FormEvent) => {
//     e.preventDefault();
//    const text=newText.current!.value;
//    if(!text.trim().length){
//        return;
//    }
//    props.onAddTodo(text)

// }
//     return (
//         <form onSubmit={handleSubmit} className={classes.form}>
//             <label htmlFor="text">Add Todo</label>
//             <input type="text" ref={newText}/>
//             <button>Add</button>

//         </form>
//     )
// };

const TodoForm: React.FC = () => {
  const newText = useRef<HTMLInputElement>(null);
  const cntx = useContext(TodoContext);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = newText.current!.value;
    if (!text.trim().length) {
      return;
    }
    cntx.addTodo(text);
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">Add Todo</label>
      <input type="text" ref={newText} />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
