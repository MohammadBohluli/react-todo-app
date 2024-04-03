import { Task } from "../App";

interface Props {
  taskList: Task[];
  onDeleteTask: (id: number) => void;
  onSelectedTask: (task: Task) => void;
  onToggleComplete: (taskId: number) => void;
  selectedStatus: string;
}

const TaskList = ({
  taskList,
  onDeleteTask,
  onSelectedTask,
  onToggleComplete,
  selectedStatus,
}: Props) => {
  let taskListStatus = taskList;

  if (selectedStatus === "true") {
    taskListStatus = taskList.filter((taskItem) => taskItem.complate === true);
  }

  if (selectedStatus === "false") {
    taskListStatus = taskList.filter((taskItem) => taskItem.complate === false);
  }

  return (
    <div>
      <ul>
        {taskListStatus.map((taskItem, index) => (
          <li key={taskItem.id}>
            <div>
              <span>{index + 1}. </span>
              {taskItem.task}
              <input
                type="checkbox"
                checked={taskItem.complate}
                onChange={() => onToggleComplete(taskItem.id)}
              />
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
