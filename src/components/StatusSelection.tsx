interface Props {
  selectedStatus: string;
  onSelectStatus: (status: string) => void;
}

const StatusSelection = ({ selectedStatus, onSelectStatus }: Props) => {
  return (
    <select
      value={selectedStatus}
      onChange={(e) => onSelectStatus(e.target.value)}
    >
      <option value="">Default</option>
      <option value="true">Complete</option>
      <option value="false">inProgress</option>
    </select>
  );
};

export default StatusSelection;
