import useAxios from '../hooks/useAxios'
import axios from 'axios'



const Employees = () => {
    const [employee, error, loading] = useAxios({
      axiosInstance : axios,
      method : 'GET',
      url : '/employees/getAllEmployees',
      // withCredentials: false,
      requstConfig : {
        headers : {
          'content-language' : 'en-US'
         
        },
        
        // we use data for post request
        // data: {
          
        // }
        
      } 
    })
  return (
    <article>
      <h2> All Employees </h2>

      {/* if it is loading */}
      {loading && <p>loading...</p>}

      {/* if it is not loading, then we produce whatever error there is */}
      {!loading && error && <p>{error}</p>}


      {/* if it is not loading and there is no error , we display response */}
       {!loading && !error && employee && <p> {employee?.employee}</p>}

      {/* when it loads but there are no employees */}
      {!loading && !error && !employee && <p> There are no employees...</p>}


    </article>
  )
}

export default Employees;
