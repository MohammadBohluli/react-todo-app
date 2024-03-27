import { Task } from '../App';

interface Props {
  taskList: Task[];
  onDeleteTask: (id: number) => void;
}

const TaskList = ({ taskList, onDeleteTask }: Props) => {
  return (
    <div>
      <ul>
        {taskList.map(({ id, task }, index) => (
          <li key={id}>
            <div>
              <span>{index + 1}. </span>
              {task}
              <button onClick={() => onDeleteTask(id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
