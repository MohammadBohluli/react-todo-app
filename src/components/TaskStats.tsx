import { FaTasks } from 'react-icons/fa';
import { IoMdDoneAll } from 'react-icons/io';
import { GrInProgress } from 'react-icons/gr';
import useTask from '../tasks/useTask';

const TaskStats = () => {
  const { tasks } = useTask();
  const completeTask = tasks.filter((taskItem) => taskItem.complate === true);

  const inProgressTask = tasks.filter(
    (taskItem) => taskItem.complate === false
  );

  return (
    <div
      className="glass-morphism bg-purple-900 text-gray-100 m-1 bg-opacity-[0.33]
                 flex justify-around p-1 mt-10 w-2/4 mx-auto"
    >
      <div className="flex justify-center items-center gap-1">
        <FaTasks size={17} color="white" />
        <span>{tasks.length}</span>
      </div>
      <div className="flex justify-center items-center gap-1">
        <IoMdDoneAll size={17} color="green" />
        <span>{completeTask.length}</span>
      </div>
      <div className="flex justify-center items-center gap-1">
        <GrInProgress size={17} color="yellow" />
        <span>{inProgressTask.length}</span>
      </div>
    </div>
  );
};

export default TaskStats;
