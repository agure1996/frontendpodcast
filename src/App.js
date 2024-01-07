
import './App.css';
import axios from 'axios';
import { useState } from 'react';
const cors = require('cors')


function App() {
  
  
  const [employees, setEmployees] = useState('')
  
  const getEmployees = (e) =>{
    
    const BASE_URL = 'http://localhost:8080/employees/getAllEmployees'
    axios.get(BASE_URL)
    .then(response => {
        console.log(response.data)
        setEmployees(JSON.stringify(response.data))
      }).catch(err => console.log(err))
  }



  return (
    <div className='App'>

      <h1> Testing Axios produces the employee json body</h1>
      <button onClick={getEmployees}> Get Employees </button>
      {employees && <p>{employees}</p>}
    </div>
  );
}

export default App;
