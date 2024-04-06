import { Task } from '../App';
import TaskItem from './TaskItem';

interface Props {
  taskList: Task[];
  onDeleteTask: (id: number) => void;
  onSelectedTask: (task: Task) => void;
  onToggleComplete: (taskId: number) => void;
  selectedStatus: string;
  searchQuery: string;
}

const TaskList = ({
  taskList,
  onDeleteTask,
  onSelectedTask,
  onToggleComplete,
  selectedStatus,
  searchQuery,
}: Props) => {
  let taskListStatus = taskList;

  if (selectedStatus === 'true') {
    taskListStatus = taskList.filter((taskItem) => taskItem.complate === true);
  }

  if (selectedStatus === 'false') {
    taskListStatus = taskList.filter((taskItem) => taskItem.complate === false);
  }

  return (
    <div>
      <ul className="">
        {taskListStatus
          .filter((t) =>
            t.task.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((task) => (
            <TaskItem
              key={task.id}
              taskItem={task}
              onDeleteTask={onDeleteTask}
              onSelectedTask={onSelectedTask}
              onToggleComplete={onToggleComplete}
            />
          ))}
      </ul>
    </div>
  );
};

export default TaskList;
