import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../Services/allAPI'


function WatchHistory() {

const [history,setHistory]=useState([])

const handleHistory = async ()=>{
  // make api call
  const {data}=await getAllHistory()
  // console.log(data);
  setHistory(data)
}
// console.log(history);

useEffect(()=>{
  handleHistory()
},[])


const handleDeleteHistory = async (id)=>{
 await deleteHistory(id)
 handleHistory()
}



  return (
 <>
 <div className="container mt-5 mb-5 d-flex justify-content-between">
<h2>Watch History</h2>
<Link to={'/Home'} style={{textDecoration:'none'}}><i className="fa-solid fa-house fa-beat"></i> Back to home
</Link>
 </div>
 <table  className='table mt-5 mb-5 container'>
  <thead>
    <tr>
      <th>#</th>
      <th>Caption</th>
      <th>URL</th>
      <th>Timestrap</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
{history.length>0?history?.map((item,index)=>(

<tr key={index}>
      <td>{index+1}</td>
      <td>{item?.caption}</td>
      <td>{item?.embedLink}</td>
      <td>{item?.Timestrap}</td>
      <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i class="fa-solid fa-trash-can "></i></button></td>
    </tr>

)): <p>Nothing here</p>
    
    }
  </tbody>

 </table>
 
 
 
 
 </>
  )
}

export default WatchHistory