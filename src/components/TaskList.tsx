import { Task } from '../App';

interface Props {
  taskList: Task[];
  onDeleteTask: (id: number) => void;
}

const TaskList = ({ taskList, onDeleteTask }: Props) => {
  return (
    <div>
      <ul>
        {taskList.map((task, index) => (
          <li key={task.id}>
            <div>
              <span>{index + 1}. </span>
              {task.task}
              <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
