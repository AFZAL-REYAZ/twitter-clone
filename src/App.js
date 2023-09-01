import './App.css';
import Sidebar from './components/Sidebar';
import Trends from './components/Trends';
import Twittes from './components/Twittes';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Twittes/>
      <Trends/>
    </div>
  );
}
 
export default App;
