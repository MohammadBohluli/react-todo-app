import useTask from '../tasks/useTask';

const StatusSelection = () => {
  const { onStateFilter } = useTask();
  // const [stateFilter, setStateFilter] = useState<string>('all');
  // if (stateFilter === 'all') {
  //   console.log(stateFilter);
  // }
  // if (stateFilter === 'complete') {
  //   dispatch({ type: 'COMPLETE_TASKS' });
  // }
  // if (stateFilter === 'uncomplete') {
  //   dispatch({ type: 'UNCOMPLETE_TASKS' });
  // }

  return (
    <select
      onChange={(e) => onStateFilter(e.target.value)}
      className="rounded outline-none border-b-4 
      border-white border-b-sky-400 cursor-pointer 
      px-5 w-6/12 sm:w-auto text-center sm:order-1 
      bg-white text-gray-700 font-estedad"
    >
      <option value="all">پیشفرض</option>
      <option value="complete">انجام شده</option>
      <option value="uncomplete">انجام نشده</option>
    </select>
  );
};

export default StatusSelection;
