import React from 'react';
import SideBar from '../SideBar/SideBar';
import { Button, Table } from 'react-bootstrap';
import './MyRent.css';


const MyRent = () => {
    return (
        <div className="container row">
            <SideBar></SideBar>
            <div className=" mt-5" style={{ height: '80vh', width: '80%',background: 'white' }} >
            <div  className='pt-2 ml-5 mt-2 d-flex justify-content-between'>
                    <h1>My Rent</h1>
                    <h5 className="mr-5 mt-1">Sufi Ahmed</h5>
            </div>
            <Table className='mt-4'>
                <thead class="tHead mr-2 ml-2 rounded">
                    <tr>
                        <th>House Name</th>
                        <th>Price</th>
                        <th>Details</th>
                    </tr>
                </thead>
                
                <tbody className="tBody">
                    <tr>
                        <td>Washington Avenue</td>
                        <td>234</td>
                        <td>
                        <Button className="btn" style={{backgroundColor: '#275A53'}}>Details</Button>
                        </td>
                    </tr>
                </tbody>
                
        </Table>
        </div>
        </div>

    );
};

export default MyRent;