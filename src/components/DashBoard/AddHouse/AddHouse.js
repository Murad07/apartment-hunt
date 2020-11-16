import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
const AddHouse = () => {
    return (
        <div className="container row">
            <SideBar></SideBar>
            <div className=" mt-5" style={{ height: '80vh', width: '80%',background: 'white' }} >
            <div  className='pt-3 ml-5 mt-3 d-flex justify-content-between'>
                    <h1>My Rent</h1>
                    <h5 className="mr-5 mt-1">Sufi Ahmed</h5>
            </div>
            <Form className='form'>
                   
                    <div className='form-group'>
                    <div className='row'>
                        <div className=''>
                            <Form.Group controlId="">
                            <Form.Label  className="d-flex justify-content-start ml-1 font-weight-bold">Service Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" /> 
                            </Form.Group>
                        </div>
                        <div className=''>
                            <Form.Group controlId="">
                            <Form.Label  className="d-flex justify-content-start ml-1 font-weight-bold">Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" /> 
                            </Form.Group>
                        </div>
                        <div className=''>
                            <Form.Group controlId="">
                            <Form.Label  className="d-flex justify-content-start ml-1 font-weight-bold">No. of Bathroom</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" /> 
                            </Form.Group>
                        </div>
                    </div>
                    
                    <div class="row">
                    <div className=''>
                            <Form.Group controlId="">
                            <Form.Label  className="d-flex justify-content-start ml-1 font-weight-bold">Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" /> 
                            </Form.Group>
                        </div>
                        <div className=''>
                            <Form.Group controlId="">
                            <Form.Label  className="d-flex justify-content-start ml-1 font-weight-bold">No. of Bedroom</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" /> 
                            </Form.Group>
                        </div>
                        <div className=''>
                            <Form.Group controlId="">
                            <Form.Label  className="d-flex justify-content-start ml-1 font-weight-bold">Icon</Form.Label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile3"></input>
                            </Form.Group>
                        </div>
                    <Button
                     className="d-flex justify-content-start" variant="primary" type="submit">
                        Send
                    </Button>
                    </div>
                    </div>
                </Form>
        </div>
        </div>
    );
};

export default AddHouse;