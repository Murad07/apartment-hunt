import React from 'react';

const House = ({info}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center px-1 p-md-3">
            {/* <Link to={`/dashboard/${info.title}`} className='serviceLink'> 
            </Link> */}
            <div class="card-group text-left">
                <div class="card">
                    {
                        !info.fake ? <img class="card-img-top" src={`data:image/png;base64,${info.img.img}`} alt="Card image cap"/>
                        :
                        <img class="card-img-top" src={info.img} alt="Card image cap"/>
                    }
                    
                    <div class="card-body">
                    <h5 class="brand-color">{info.title}</h5>
                    <p class="card-text">{info.location}</p>
                    <div className="row pt-0 mt-0">
                        <div className="col-6">{info.bedroom} Bedrooms</div>
                        <div className="col-6">{info.bathroom} Bathrooms</div>
                    </div>
                    <div className="row pt-0 mt-0">
                        <div className="col-6"><h1 className="brand-color">${info.price}</h1></div>
                        <div className="col-6 pt-2"><button className="btn brand-btn">View Details</button></div>
                    </div>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default House;