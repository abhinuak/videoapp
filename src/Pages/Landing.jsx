import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function Landing() {

const navigateByUrl = useNavigate()

  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
       <Col></Col>
       <Col lg={5}>
        <h2>Welcome to <span className='text-warning'>Media App</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, laborum quibusdam. Quidem libero ipsam aperiam quod maxime sunt sit a incidunt ea odit rerum, officia laboriosam consequatur. Exercitationem, quisquam accusantium.</p>
        <button onClick={()=>navigateByUrl('/Home')} className='btn btn-success text-dark mb-5'>Get Started</button>
       </Col>
       <Col lg={5}>
        <img className='img-fluid m-5' src="https://i.pinimg.com/originals/f4/df/f0/f4dff05ee04916b7812adfaf81c29f3e.gif" alt="player" />
       </Col>
       <Col></Col>
      </Row>

      <div className='container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column'>
        <h3 className='text-info fs-2'>Features</h3>
        <div className='cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
        <Card className='p-1 bg-dark' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://gifdb.com/images/high/incredible-sound-wave-art-hxgh3rtf5v8vvh5i.gif" />
      <Card.Body>
        <Card.Title className='text-info fs-3'>Managing App</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Card className='p-1 bg-dark' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://static1.squarespace.com/static/562871a4e4b0ddf1eef8717f/5646d8fce4b0644e262409a2/5646d8fce4b0435d0a932c91/1447483665055/tumblr_n8m8z5vOCP1tgm5e8o1_500.gif" />
      <Card.Body>
        <Card.Title className='text-info fs-3'>Download Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Card className='p-1 bg-dark' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" />
      <Card.Body>
        <Card.Title className='text-info fs-3'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

        </div>

      </div>


      <div className='container border rounded p-5 border-secondary mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
        <div className='col-lg-5'>
          <h3 className='mb-5 text-warning fs-3'>Simple and Powerfull </h3>
          <h6 className='mb-3'><span className='fs-6 fw-bolder text-info'>Play Everything</span> : 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cumque eligendi. Exercitationem aperiam reprehenderit quibusdam qui odio sint 
          saepe incidunt totam possimus! Explicabo natus, sequi perferendis maxime unde quos repellat!</h6>

          <h6 className='mb-3'><span className='fs-6 fw-bolder text-info'>Play Everything</span> : 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cumque eligendi. Exercitationem aperiam reprehenderit quibusdam qui odio sint 
          saepe incidunt totam possimus! Explicabo natus, sequi perferendis maxime unde quos repellat!</h6>

          <h6 className='mb-3'><span className='fs-6 fw-bolder text-info'>Play Everything</span> : 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cumque eligendi. Exercitationem aperiam reprehenderit quibusdam qui odio sint 
          saepe incidunt totam possimus! Explicabo natus, sequi perferendis maxime unde quos repellat!</h6>
          

        </div>
        <div className='video col-lg-6'>
        <div className='video col-lg-5 me-3'>
        <iframe width="530" height="315" src="https://www.youtube.com/embed/0wP4kegeegE?si=JxvRj-PJAGBX1jST" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
        </div>

      </div>

          </>
  )
}

export default Landing