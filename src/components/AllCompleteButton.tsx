import useTask from '../tasks/useTask';

const AllCompleteButton = () => {
  const { dispatch } = useTask();
  return (
    <button
      onClick={() => dispatch({ type: 'MARK_ALL_COMPLETE' })}
      className="bg-sky-500 hover:bg-sky-600 px-2 rounded text-gray-50"
    >
      همه رو انجام دادم
    </button>
  );
};

export default AllCompleteButton;
