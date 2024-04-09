import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import GroupsInput from './components/GroupsInput';
import TaskStats from './components/TaskStats';
import useTask from './tasks/useTask';

export interface Task {
  id: number;
  task: string;
  complate: boolean;
  date: string;
  time: string;
}

const App = () => {
  const { tasks } = useTask();

  return (
    <div className="glass-morphism max-w-3xl w-11/12 my-8 mx-auto p-3 bg-opacity-20">
      <h1 className="text-center text-white text-5xl">مدیریت کارها</h1>

      <TaskInput />
      {tasks.length !== 0 ? (
        <div>
          <GroupsInput />
          <TaskList />
          <TaskStats />
        </div>
      ) : null}
    </div>
  );
};

export default App;
