import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../SideBar/SideBar';
import SingleBookingList from './SingleBookingList';

const BookingList = () => {
    const [orders, setOrders] = useState([])
    const [loading,setLoading] = useState(true);

    const {loggedInUser} = useContext(UserContext);
    const userEmail =  loggedInUser.email ;

    useEffect(() => {
        fetch('https://protected-escarpment-17735.herokuapp.com/bookingList/' + userEmail)
        .then((res) => res.json())
        .then((data) => {
            setLoading(false)
            setOrders(data)
        });
    }, []);
   

    return (
        <div className="container row">
            <Sidebar pag={"bookingList"}></Sidebar>
            <div className="mt-5" style={{ height: '100vh', width: '80%', backgroundColor: '#f4fdfb' }} >
                
                <div  className='pt-2 ml-5 mt-2 d-flex justify-content-between'>
                        <h1>Booking List</h1>
                        <h3>{loggedInUser.name}</h3>
                </div>
            
                <div className="tableBg p-3">
                    <div className="row headding text-center mx-1">
                        <div className="col-md-2 my-auto">Name</div>
                        <div className="col-md-3 my-auto">Email ID</div>
                        <div className="col-md-2 my-auto">Phone</div>
                        <div className="col-md-3 my-auto">Message</div>
                        <div className="col-md-2 my-auto">Status</div>
                    </div>
                    {
                        loading ? <div style={{margin: '50px auto'}}   class="spinner-border text-success d-flex  algin-items-center justify-content-center text-center" role="status">
                        <span class="sr-only ">Loading...</span>
                      </div>: orders.map((order, i) => (<SingleBookingList key={i} order={order}></SingleBookingList>))
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingList;