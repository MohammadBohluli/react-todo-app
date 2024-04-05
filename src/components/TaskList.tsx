import { VscEdit, VscChromeClose } from "react-icons/vsc";
import { Task } from "../App";

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

  if (selectedStatus === "true") {
    taskListStatus = taskList.filter((taskItem) => taskItem.complate === true);
  }

  if (selectedStatus === "false") {
    taskListStatus = taskList.filter((taskItem) => taskItem.complate === false);
  }

  return (
    <div>
      <ul className="">
        {taskListStatus
          .filter((t) =>
            t.task.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((taskItem) => (
            <li key={taskItem.id}>
              <div
                className="bg-gray-700 text-gray-100 m-1 bg-opacity-[0.33] rounded-xl 
              shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-3xl border-white/[0.3]
              border-[1px] py-2 px-3 hover:opacity-90"
              >
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={taskItem.complate}
                    onChange={() => onToggleComplete(taskItem.id)}
                    className="accent-green-600 w-4 h-4"
                  />
                  <span
                    className={`${taskItem.complate ? "line-through" : ""}`}
                  >
                    {taskItem.task}
                  </span>
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => onDeleteTask(taskItem.id)}
                    className="bg-red-500 p-[2px] rounded hover:bg-red-600"
                  >
                    <VscChromeClose size={18} />
                  </button>
                  <button
                    onClick={() => onSelectedTask(taskItem)}
                    className="bg-yellow-400 p-[2px] rounded hover:bg-yellow-500"
                  >
                    <VscEdit size={18} />
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TaskList;
