interface Props {
  onSelectStatus: (status: boolean) => void;
}

const StatusSelection = ({ onSelectStatus }: Props) => {
  return (
    <select
      onChange={(e) => onSelectStatus(Boolean(e.target.value))}
      className="rounded outline-none border-b-4 
      border-white border-b-sky-400 cursor-pointer 
      px-5 w-6/12 sm:w-auto text-center sm:order-1 
      bg-white text-gray-700 font-estedad"
    >
      <option value="">پیشفرض</option>
      <option value="true">انجام شده</option>
      <option value="false">انجام نشده</option>
    </select>
  );
};

export default StatusSelection;
