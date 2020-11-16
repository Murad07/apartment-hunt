import React, { useState } from 'react';

const BookingForm = ({details}) => {

    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        
        formData.append('name', info.name);
        formData.append('phone', info.phone);
        formData.append('customerEmail', info.email);
        formData.append('ownerEmail', details.email);
        formData.append('message', info.message);
        formData.append('status', 'Pending');
        formData.append('houseName', details.title);
        formData.append('price', details.price);

        fetch('http://localhost:5000/bookingRequest', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                // history.push(`/bookingList/${bookingId}`);
            }
        })
    }

    return (
        <div style={{ backgroundColor: "#f1f5f4"}} className="col-md-10 py-3 ml-2 formContainer">
                
            <form onSubmit={handleSubmit} className=""> 
                <div className="form-group">
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Full Name" required/>
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur} type="text" className="form-control" name="phone" placeholder="Phone No." required/>
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Email Address" required/>
                </div>
                
                <div className="form-group">
                    <textarea onBlur={handleBlur} className="form-control" id="" cols="30" rows="6" name="message" placeholder="Message" required></textarea>
                </div>
                
                <button type="submit" className=" w-100 btn brand-btn">Request Booking</button>
                
            </form>
        </div>
    );
};

export default BookingForm;