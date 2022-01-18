import React from 'react'
import {useEffect,useState} from 'react';

const Student = () =>{
    const[data,setData]=useState([''])
 
 useEffect(()=>{
        getData()
 },[])
const getData=async()=>{
    const d= await fetch('http://localhost:8000/student/marks')
    const res = await d.json()
    setData(res)
}
return (
    <div className="container" >  
      <h3> Students </h3>            
     
          {data.map((x)=>{
              return (<div>
                  <h3>{x.name}</h3>
                  <h3>{x.CGPA}</h3>
              
              </div>)
          })}
 </div>  

  );

}
export default Student