import React,{useState,useEffect} from 'react'

export default function ArrList() {
  const [list,setList] = useState([])
  const data=[1,2,3,4,5,6,7,8,9]
  useEffect(() =>{
    for (let i=0; i<data.length; i++){
      setTimeout(() =>{
        setList((list)=>[...list,data[i]])
      },1000*i)
    }
  },[])
  return (
    <div>
      <h1>ArrList</h1> 
      {list}
    </div>
  )
}
