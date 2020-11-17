import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm/BookingForm';
import Header from './Header/Header';
import house1 from '../../images/house1.png';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import Navbar from '../Navbar/Navbar';


const imgA = [img1, img2, img3, img4];


const HouseDetails = () => {

    let { id } = useParams();
    const [details, setDetails] = useState([]);

    //Loading State
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch('https://protected-escarpment-17735.herokuapp.com/house/' + id)
        .then((res) => res.json())
        .then((data) => {
            setLoading(false);
            setDetails(data);
        });
    }, []);
    

    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            {
                loading ? 
                <div style={{margin: '50px auto'}}  class="spinner-border text-success d-flex justify-content-center" role="status">
                   <span class="sr-only text-center">Loading...</span>
                 </div>
                :
                <div className="container">
            
                    <div className="row mt-4">
                        
                        <div className="col-md-8">
                            {/* Top Images Part */}
                            <div>
                                {
                                    details.img ? <img className="w-100" src={`data:image/png;base64,${details.img.img}`} alt="Card image cap"/>
                                    :
                                    <img className="card-img-top" src={details.img} alt="Card image cap"/>
                                }
                            </div>
                            <div className="py-3">
                                <div className="row">
                                    {
                                        imgA.map(img => <div className="col-md-3 pt-3">
                                            <img className="w-100" src={img} alt=""/>
                                        </div>)
                                    }
                                </div>
                            </div>

                            {/* Information Part */}
                            
                            <div className=" pl-md-0">
                                <div className="pl-md-4">
                                    <div className="row">
                                        <div className="col-md-10"><h2 className="brand-color">{details.title}</h2></div>
                                        <div className="col-md-2"><h2 className="brand-color text-right">${details.price}</h2></div>
                                    </div>
                                    <p>{details.subTitle}</p>
                                </div>
                                <div className="pl-md-4">
                                    <h2 className="brand-color">Price Details -</h2>
                                    <p>Rent/Month: ${details.price} (negotiable) <br/>
                                    Service Charge: 8000/= TK per month <br/>
                                    Security Deposite: 3 months rent <br/>
                                    Flap Release policy: 3 months earlier notice required</p>
                                </div>
                                <div className="pl-md-4">
                                    <h2 className="brand-color">Property Details -</h2>
                                    <p>{details.location} <br/>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugiat numquam, totam repellat dicta sint minima illum ipsam ipsum excepturi!
                                    </p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-md-4">
                            <BookingForm details={details}></BookingForm>
                        </div>
                    </div>
                </div>
            
            }
        </div>
    );
};

export default HouseDetails;