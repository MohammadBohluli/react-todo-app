import { useContext } from 'react';
import TaskContext from './taskContext';

const useTask = () => useContext(TaskContext);
export default useTask;
