import React from 'react';

const SingleRent = ({order}) => {
   

    return (
        <div className="row text-center mx-1">
            <div className="col-md-2 py-2">{order.houseName}</div>
            <div className="col-md-3 py-2">{order.price}</div>
            <div className="col-md-3 py-2"><button className="btn brand-btn">Details</button></div>
            
        </div>
    );
};

export default SingleRent;