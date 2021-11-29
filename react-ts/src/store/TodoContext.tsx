import React, { useState } from "react";

import Todo from "../models/Todo";

type todosType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<todosType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosProvider: React.FC = (props) => {
  const [todoslist, setTodoslist] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodoslist((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    const newTodo = todoslist.filter((todo) => todo.id !== id);
    setTodoslist(newTodo);
  };

  const value: todosType = {
    items: todoslist,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={value}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodosProvider;
