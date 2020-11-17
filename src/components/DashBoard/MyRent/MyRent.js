import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './MyRent.css';
import SingleRent from './SingleRent';


const MyRent = () => {
    const [orders, setOrders] = useState([])

    const userEmail = "silverboymurad@gmail.com";

    useEffect(() => {
        fetch('https://protected-escarpment-17735.herokuapp.com/myRent/' + userEmail)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, []);
   

    return (
        <div className="container row">
            <SideBar pag={"myRent"}></SideBar>
            <div className=" mt-5" style={{ height: '80vh', width: '80%',background: 'white' }} >
                <div  className='pt-2 ml-5 mt-2 d-flex justify-content-between'>
                        <h1>My Rent</h1>
                </div>
                <div className="tableBg p-3">
                    <div className="row headding text-center mx-1">
                        <div className="col-md-3 my-auto">House Name</div>
                        <div className="col-md-3 my-auto">Price</div>
                        <div className="col-md-3 my-auto">Status</div>
                        <div className="col-md-2 my-auto">Details</div>
                    </div>
                    {
                        orders.map((order, i) => (
                            <SingleRent key={i} order={order}></SingleRent>
                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default MyRent;