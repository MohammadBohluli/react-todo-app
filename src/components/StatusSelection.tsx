interface Props {
  selectedStatus: string;
  onSelectStatus: (status: string) => void;
}

const StatusSelection = ({ selectedStatus, onSelectStatus }: Props) => {
  return (
    <select
      value={selectedStatus}
      onChange={(e) => onSelectStatus(e.target.value)}
      className="rounded outline-none border-b-4 border-white border-b-sky-400 
      cursor-pointer px-5 w-6/12 text-center"
    >
      <option value="">پیشفرض</option>
      <option value="true">انجام شده</option>
      <option value="false">انجام نشده</option>
    </select>
  );
};

export default StatusSelection;
