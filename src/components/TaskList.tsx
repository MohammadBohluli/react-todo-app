import { Task } from "../App";

interface Props {
  taskList: Task[];
  onDeleteTask: (id: number) => void;
  onSelectedTask: (task: Task) => void;
}

const TaskList = ({ taskList, onDeleteTask, onSelectedTask }: Props) => {
  return (
    <div>
      <ul>
        {taskList.map((taskItem, index) => (
          <li key={taskItem.id}>
            <div>
              <span>{index + 1}. </span>
              {taskItem.task}
              <button onClick={() => onDeleteTask(taskItem.id)}>Delete</button>
              <button onClick={() => onSelectedTask(taskItem)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
