import { Todo } from '../App';

interface Props {
  todoList: Todo[];
}
const TodoList = ({ todoList }: Props) => {
  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={todo.id}>
            <span>{index + 1}. </span>
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
