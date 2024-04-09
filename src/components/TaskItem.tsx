import { CiCalendarDate } from 'react-icons/ci';
import { IoMdTime } from 'react-icons/io';
import { VscChromeClose, VscEdit } from 'react-icons/vsc';
import { Task } from '../App';
import useTask from '../tasks/useTask';

interface Props {
  taskItem: Task;
}

const TaskItem = ({ taskItem }: Props) => {
  const { onSelectedTask, dispatch } = useTask();
  return (
    <li>
      <div
        className="glass-morphism bg-gray-900 text-gray-100 m-1 
               bg-opacity-[0.33] py-2 px-3 hover:opacity-80"
      >
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={taskItem.complate}
            onChange={() =>
              dispatch({ type: 'TOGGLE_TASK', taskId: taskItem.id })
            }
            className="accent-green-600 w-4 h-4"
          />
          <p className={`${taskItem.complate ? 'line-through' : ''} break-all`}>
            {taskItem.task}
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-2 text-xs">
            <div className="flex justify-center items-center gap-1">
              <span>
                <CiCalendarDate size={16} />
              </span>
              <span>{taskItem.date}</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <span>
                <IoMdTime size={16} />
              </span>
              <span>{taskItem.time}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => dispatch({ type: 'DELETE', taskId: taskItem.id })}
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
      </div>
    </li>
  );
};

export default TaskItem;
