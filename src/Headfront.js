import React from 'react'
import {useEffect,useState} from 'react';

const Headfront = () =>{
    const[data,setData]=useState([''])
 
 useEffect(()=>{
        getData()
 },[])
const getData=async()=>{
    const d= await fetch('http://localhost:8000/head/dashboard')
    const res = await d.json()
    setData(res)
}
return (
    <div className="container" >  
      <h3> Head </h3>            
     
          {data.map((x)=>{
              return (<div>
                  <h3>{x.name}</h3>
              </div>)
          })}
 </div>  

  );

}
export default Headfront