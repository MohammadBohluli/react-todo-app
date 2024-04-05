import { FaTasks } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { GrInProgress } from "react-icons/gr";
import { Task } from "../App";

interface Props {
  taskList: Task[];
}
const TaskStats = ({ taskList }: Props) => {
  const completeTask = taskList.filter(
    (taskItem) => taskItem.complate === true
  );

  const inProgressTask = taskList.filter(
    (taskItem) => taskItem.complate === false
  );

  return (
    <div
      className="bg-purple-900 text-gray-100 m-1 bg-opacity-[0.33] rounded-xl 
                 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-3xl border-purple-900/[0.3]
                 flex justify-around p-1 mt-10 w-2/4 mx-auto"
    >
      <div className="flex justify-center items-center gap-1">
        <FaTasks size={17} color="white" />
        <span>{taskList.length}</span>
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
