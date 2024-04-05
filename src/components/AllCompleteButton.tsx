interface Props {
  onAllComplateTask: () => void;
}

const AllCompleteButton = ({ onAllComplateTask }: Props) => {
  return (
    <button
      onClick={onAllComplateTask}
      className="bg-violet-600 opacity-80 hover:opacity-100 
                px-2 rounded text-gray-100"
    >
      همه رو انجام دادم
    </button>
  );
};

export default AllCompleteButton;
