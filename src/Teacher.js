import React from 'react'
import {useEffect,useState} from 'react';

const Teacher = () =>{
    const[data,setData]=useState([''])
 
 useEffect(()=>{
        getData()
 },[])
const getData=async()=>{
    const d= await fetch('http://localhost:8000/teacher/assignments')
    const res = await d.json()
    setData(res)
}
return (
    <div className="container" >  
      <h3> Teachers </h3>            
     
          {data.map((x)=>{
              return (<div>
                  <h3>{x.name}</h3>
                  <h3>{x.salary}</h3>
              
              </div>)
          })}
 </div>  

  );

}
export default Teacher