import React from 'react';
import { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './AddHouse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';


const containerStyle = {
    height:"100%"
}

const formContainer = {
    position: 'absolute',
    backgroundColor: '#f4fdfb',
    width: '100%'
}

const AddHouse = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('price', info.price);
        formData.append('location', info.location);
        formData.append('bedRoom', info.bedRoom);
        formData.append('bathRoom', info.bathRoom);
        formData.append('email', "silverboymurad@gmail.com");

        fetch('https://protected-escarpment-17735.herokuapp.com/addHouse', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <SideBar pag={"addHouse"}></SideBar>

                <div className='col-md-8'>
                    <h5 className="text-brand ml-5 pl-4 mt-4 mb-3">Add Services</h5>

                    <div className="col-md-10 py-5 ml-5" style={formContainer}>
                        <form onSubmit={handleSubmit} className="whiteBoard"> 
                            <div className="pt-4 pl-4">
                                <div className="form-group row">
                                    <div className="col-md-6">
                                        <label htmlFor="">Service Title</label>
                                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Title" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="">Price</label>
                                        <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Enter Price" required/>
                                    </div>
                                    
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-6">
                                        <label htmlFor="">Location</label>
                                        <input onBlur={handleBlur} type="text" className="form-control" name="location" placeholder="Enter Location" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="">No of Bedroom</label>
                                        <input onBlur={handleBlur} type="text" className="form-control" name="bedRoom" placeholder="No of Bedroom" required/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-6">
                                        <label htmlFor="">No of Bathroom</label>
                                        <input onBlur={handleBlur} type="text" className="form-control" name="bathRoom" placeholder="No of Bathroom" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="">Thumbnail</label>
                                        <input hidden onChange={handleFileChange} type="file" className="form-control" name="file" id="imageUpload" placeholder="Picture" required/>
                                        <label className='form-control imageLabel text-center' for="imageUpload">
                                            <FontAwesomeIcon icon={faUpload} /> 
                                            <span className='pl-2'> Upload Image </span>
                                        </label>
                                    </div>
                                </div>

                                
                            </div>
                            <div>
                                <button 
                                    style={{width: '108px', height: '38px'}} 
                                    type="submit" 
                                    className="btn brand-btn text-white float-right"
                                    > 
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default AddHouse;