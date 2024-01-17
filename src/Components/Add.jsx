import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { uploadVideo } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoServerResponse}) {

  const[video,setVideo]=useState({
    id:"",caption:"",url:"",embedLink:""
  })



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



const getEmbededLink = (e)=>{
  const {value} = e.target 
if(value){
  const link = `https://www.youtube.com/embed/${value.slice(-11)}`
  setVideo({...video,embedLink:link})
}else{
  setVideo({...video,embedLink:""})

}

}
// console.log(video);
const handleUpload = async(e)=>{
  const {id,caption,url,embedLink}=video
  if(!id || !caption || !url || ! embedLink){
    toast.warning("please fill")
  }
  else{
    const response = await uploadVideo(video)
    // console.log(response);
    if(response.status>=200 && response.status<300){
      setUploadVideoServerResponse(response.data)
      toast.success(`${response.data.caption} video succesfully uploaded`)

      // reset the video
      setVideo({
        id:"",caption:"",url:"",embedLink:""
      })

      handleClose()
    }else{
      // console.log(response);
      toast.error("please provide unique id")
    }
  }
}


  return (
    <div>
      <>
      <div className="d-flex align-items-center">
        <h5 className='mt-2'>Upload Videos</h5>
        <button onClick={handleShow} className='btn btn-outline-info ms-2'>
        <i class="fa-solid fa-file-import fs-6"></i>
        </button>
</div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p> fill the following fields</p>
         <Form>
         <Form.Group className="mb-3" controlId="">
         <Form.Control type="text" placeholder="Enter ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
         </Form.Group>

         <Form.Group className="mb-3" controlId="">
         <Form.Control type="text" placeholder="Enter Title"  onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="">
         <Form.Control type="text" placeholder="Enter Image URL"  onChange={(e)=>setVideo({...video,url:e.target.value})}/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="">
         <Form.Control type="text" placeholder="Enter Link"  onChange={getEmbededLink}/>
         </Form.Group>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning" onClick={handleClose}>
            Close <i class="fa-regular fa-circle-xmark"></i>
          </Button>
          <Button variant="outline-success" onClick={handleUpload}>Upload <i class="fa-solid fa-file-import fs-6"></i></Button>
        </Modal.Footer>
      </Modal>


    <ToastContainer
    position='top-center' theme='colored' autoClose={2000}/>
      
      
      </>
    </div>
  )
}

export default Add