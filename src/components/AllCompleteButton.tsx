interface Props {
  onAllComplateTask: () => void;
}

const AllCompleteButton = ({ onAllComplateTask }: Props) => {
  return (
    <button
      onClick={onAllComplateTask}
      className="bg-sky-500 hover:bg-sky-600 px-2 rounded text-gray-50"
    >
      همه رو انجام دادم
    </button>
  );
};

export default AllCompleteButton;
