import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getAllVideo } from '../Services/allAPI'

function View({uploadVideoServerResponse}) {

  const[allvideos,setAllVideos]=useState([])
const[deleteVideo,setDeleteVideo]=useState(false)
const getUploadVideo = async ()=>{
  const {data} = await getAllVideo()
  setAllVideos(data);
}
useEffect(()=>{
  getUploadVideo()
  setDeleteVideo(false)
},[uploadVideoServerResponse,deleteVideo])
console.log(allvideos);
  return (
    <>
     <Row>
    { allvideos.length>0?
    allvideos.map(video=>(<Col sm={12} md={6} lg={4} xl={3}>
      <VideoCard displayData={video} setDeleteVideo={setDeleteVideo}/>
      </Col>))
      : <p className='fs-5 fw-5 text-danger'>Nothing to display</p>
    
    }


      
     </Row>
    </>


   
  )
}

export default View