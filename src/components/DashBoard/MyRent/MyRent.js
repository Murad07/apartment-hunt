import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './MyRent.scss';
import SingleRent from './SingleRent';


const MyRent = () => {
    const [orders, setOrders] = useState([])

      //Loading State
      const [loading,setLoading] = useState(true);

    const userEmail = "silverboymurad@gmail.com";

    useEffect(() => {
        fetch('https://protected-escarpment-17735.herokuapp.com/myRent/' + userEmail)
        .then((res) => res.json())
        .then((data) => {
            setLoading(false)
            setOrders(data)
        });
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
                       loading ?<div style={{margin: '50px auto'}}   class="spinner-border text-success d-flex  algin-items-center justify-content-center text-center" role="status">
                       <span class="sr-only ">Loading...</span>
                     </div> : orders.map((order, i) => (
                            <SingleRent key={i} order={order}></SingleRent>
                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default MyRent;