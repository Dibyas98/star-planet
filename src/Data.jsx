import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const store = createContext();
export default function Data({children}) {
    const [apiData,setApiData] = useState([]);
    const[residentApi,setResidentApi]= useState([])
    const [page,setPage] = useState(1)
    async function fetchData(url,dataStore){
        try {
            const api = await axios.get(url);
            // console.log(api.data);
            dataStore(api.data)

            
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchData('https://swapi.dev/api/planets/?format=json',setApiData);
    },[])

    async function prevPage(){
        setPage(prevPage => prevPage - 1>0?prevPage - 1:prevPage);
        setApiData([])
        try{
            const api = await axios.get(apiData.previous)
            setApiData(api.data)
        }catch(err){
            console.log(err);
        }
    }
    async function nextPage(){
        setPage(prevPage => prevPage + 1);
        setApiData([])
        try{
            const api = await axios.get(apiData.next)
            setApiData(api.data)
        }catch(err){
            console.log(err);
        }
    }
    function HandelResident(arg){
        setResidentApi([])
        fetchData(arg,setResidentApi)
        // console.log(residentApi);
    }
  return (
    <store.Provider value={{apiData,page,nextPage,prevPage, HandelResident,residentApi}}>
        {children}
    </store.Provider>
  )
}
