import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../Services/allAPI';
import VideoCard from './VideoCard';


function Category() {
const[allcategory,setAllCategory]=useState([])
  const [categoryname,setCategoryName]=useState("")

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddcategory = async ()=>{
    if(categoryname){
      let body={
        categoryname,allvideos:[]
      }
      // make api call
      const response = await  addCategory(body)
      // console.log(response);
      if(response.status>=200 && response.status<300){
        // close modal
        handleClose()
        // target empty
        setCategoryName("")
        getCategory()
      }
      else{
        toast.error("something went wrong")
      }

    }
    else{
      toast.warning("please enter the fields")

    }
  }

  const getCategory = async()=>{
    // make api call
    const {data}= await getAllCategory()
    setAllCategory(data)
  }
  // console.log(allcategory);
  useEffect(()=>{
    getCategory()
  })

  const handleDelete=async(id)=>{
    await deleteCategory(id)
    getCategory()
  }

  const dragOver = (e)=>{
    console.log("video drag over");
    e.preventDefault()
  }
  const videoDrop =async (e,categoryId)=>{
    console.log("video droped inside the category"+categoryId);
    const videoId=e.dataTransfer.getData("videoID")
    console.log("video id"+videoId);
    // get video details
    const {data} =await getAVideo(videoId)
    console.log(data);
    // get category
    const selectedCategory=allcategory?.find(a=>a.id==categoryId)
    selectedCategory.allvideos.push(data)
    console.log(selectedCategory);
    // make api call
    await updateCategory(categoryId,selectedCategory)
    getAllCategory()
  }

  return (
    <>
      <div className="d-grid ms-3">
        <button onClick={handleShow} className='btn btn-outline-info'>Add new Category</button>
      </div>
    {
      allcategory?.length>0?allcategory?.map(a=>(
        <div className="m-5 border rounded p-3" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,a?.id)}>
          <div className="d-flex justify-content-between align-item-center">
          <h6>{a?.categoryname}</h6>
          <button className='btn' onClick={()=>handleDelete(a?.id)}><i class="fa-solid fa-trash-can "></i></button>
          </div>
<Row>
  {
    a?.allvideos && a?.allvideos.map(
      card=>(
        <Col sm={12}>

          <VideoCard displayData={card} insideCategory={true}/>
        </Col>
      )
    )
  }
</Row>



        </div>
      )): <p className='fs-5 fw-5 text-danger'>no category added</p>
    }


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
         <Form>
         <Form.Group className="mb-3" controlId="">
          <Form.Label>Enter Title</Form.Label>
         <Form.Control type="text" placeholder="" onChange={(e)=>setCategoryName(e.target.value)} />
         </Form.Group>

         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning" onClick={handleClose}>
            Close <i class="fa-regular fa-circle-xmark"></i>
          </Button>
          <Button variant="outline-success" onClick={handleAddcategory}>Upload <i class="fa-solid fa-file-import fs-6"></i></Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
    position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Category