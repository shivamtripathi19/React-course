import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{ text: string, onTodoRemoved: () => void}> = (props) => {
  return <li className={classes.item} onClick={props.onTodoRemoved}>{props.text} </li>;
};

export default TodoItem;
