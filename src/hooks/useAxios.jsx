import { useState, useEffect } from "react";
import axios from 'axios'
import Employees from "../components/Employees";

 const useAxios = (configuration) => {
  const { 
    axiosInstance,
    method,
    url,
    requestConfig = {}
         } = configuration;


    const [employee , setEmployee] = useState([])
    const [error , setError] = useState('')
    const [loading , setLoading] = useState(true)

     useEffect (() => {
         
         const abortController = new AbortController();
         const fetchData = async () => {
            try {
                const res = await axiosInstance[method.toLowerCase()](url, {
                    ...requestConfig,
                    signal: abortController.signal

                });
                
                console.log(res)
                setEmployee(res.data)

            //     axios.get(url)
            //     .then((response) => {
            //       console.log(response.data);
            //       setEmployee(response.data)
            //     })
            //    .catch((error)=>{
            //       console.log(error);
            //    });

            // console.log(employee)
            } catch (err) {
               console.log(err.message)
                setError(err.message)
            } finally {
                setLoading(false)
            }
         }

         fetchData();
         
         //useEffect cleanup function
         return () => abortController.abort();
         //cancel request to prevent memory leak
     },[])    

    return [employee, error , loading, useAxios];
};

export default useAxios;