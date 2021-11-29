import TodoForm from "./components/TodoForm";
// import { useState } from "react";
import Todos from "./components/Todos";
// import Todo from "./models/Todo";
// const initialState = new Todo("Learn Javascript");
export default function App() {
  // const [todolist, setTodoList] = useState<Todo[]>([initialState]);
  // const handleAddTodo = (text: string) => {
  //   const items=new Todo(text)
  //   setTodoList((prev)=>(prev.concat(items)));
  // };
  // const handleRemoveTodo = (id: string) => {
  //   const filterlist=todolist.filter((item)=>item.id!==id)
  //   setTodoList(filterlist);

  // }
  // return (
  //   <div>
  //     <TodoForm onAddTodo={handleAddTodo} />
  //     <Todos items={todolist} onRemove={handleRemoveTodo} />
  //   </div>
  // );
  return (
    <div>
      <TodoForm/>
      <Todos/>
    </div>
  )
}
