import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todoinput from './components/Todoinput';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App m-5">
      <Todoinput/>
      <TodoList/>

     
    </div>
  );
}

export default App;
