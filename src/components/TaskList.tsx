import useTask from '../tasks/useTask';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, stateFilter, searchQuery } = useTask();
  let taskListStatus = tasks;

  if (stateFilter === 'complete')
    taskListStatus = tasks.filter((taskItem) => taskItem.complate === true);

  if (stateFilter === 'uncomplete')
    taskListStatus = tasks.filter((taskItem) => taskItem.complate === false);

  return (
    <div>
      <ul className="">
        {taskListStatus
          .filter((t) =>
            t.task.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((task) => (
            <TaskItem key={task.id} taskItem={task} />
          ))}
      </ul>
    </div>
  );
};

export default TaskList;
