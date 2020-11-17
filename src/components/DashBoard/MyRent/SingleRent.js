import React from 'react';
import { Link } from 'react-router-dom';

const SingleRent = ({order}) => {
   // Daynamic text color of status
   let colors = ['#ff4545', '#f1c40f', '#009444'];
   let idx = 0;

   (order.status === 'Pending') && (idx = 0);
   (order.status === 'On going') && (idx = 1);
   (order.status === 'Done') && (idx = 2);

    return (
        <div className="row text-center mx-1">
            <div className="col-md-3 py-2">{order.houseName}</div>
            <div className="col-md-3 py-2">{order.price}</div>
            <div className="col-md-3 py-2" style={{color: colors[idx]}}>{order.status}</div>
            <div className="col-md-3 py-2"><Link to={`/details/${order.houseId}`}><button className="btn brand-btn">Details</button></Link></div>
            
        </div>
    );
};

export default SingleRent;