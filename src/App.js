import Employees from './components/Employees.jsx'
import './App.css';
const cors = require('cors')


function App() {
  return (
    <div className='App'>

      <h1> Testing Axios produces the employee json body</h1>
      <Employees />
    </div>
  );
}

export default App;
