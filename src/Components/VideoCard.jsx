import { Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { addToHistory, deleteVideo } from '../Services/allAPI';


function VideoCard({displayData,setDeleteVideo,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true);
  // make api call localhost:4001
  const{caption,embedLink}=displayData
  let today = new Date()
  // console.log(today);
  let Timestrap=(new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit', hour:'2-digit'
,minute:'2-digit',second:'2-digit'}
  ).format(today));
  let videoDetails={caption,embedLink,Timestrap}
  await addToHistory(videoDetails)
  }


// delete a video
const removeVideo = async (id)=>{
  // make api call
  const response = await deleteVideo(id)
  setDeleteVideo(true)
}

const dragStarted =(e,id)=>{
  console.log("drag started...video id:"+id);
  e.dataTransfer.setData("videoID",id)
}

  return (
   <>
       <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img height={200} onClick={handleShow} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'><h6>{displayData?.caption}</h6>
{       insideCategory?"": <button onClick={()=>removeVideo(displayData?.id)} className='btn btn-info'><i class="fa-solid fa-trash-can "></i></button>
}        </Card.Title>
       
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="350" src={`${displayData?.embedLink}?autoplay=1`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>         </Modal.Body>
      </Modal>
   
   
   
   
   </>
  )
}

export default VideoCard