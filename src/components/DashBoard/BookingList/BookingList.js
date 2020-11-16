import React from 'react';
import { Table } from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import SideBar from '../SideBar/SideBar';
const options = [
    { value: 'Pending', label: 'Pending' },
    { value: 'On Going', label: 'On Going' },
    { value: 'Done', label: 'Done' }
]
const BookingList = () => {
    return (
        <div className="container row">
            <SideBar></SideBar>
            <div className=" mt-5" style={{ height: '100vh', width: '80%',background: 'white' }} >
            <div  className='pt-3 ml-5 mt-3 d-flex justify-content-between'>
                    <h1>Booking List</h1>
                    <h5 className="mr-5 mt-1">Sufi Ahmed</h5>
            </div>
            <Table>
                <thead class="tHead mr-2 ml-2 rounded">
                    <tr>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Phone Number</th>
                        <th>Message</th>
                        <th>Status</th>
                    </tr>
                </thead>
                
                <tbody className="tBody">
                    <tr>
                        <td>Sufi Ahmed</td>
                        <td>ertw@gmail.com</td>
                        <td>088765468</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
                        <td>
                        <Dropdown  options={options} placeholder="Option" />
                        </td>
                    </tr>
                </tbody>
                
        </Table>
        </div>
        
        </div>

    );
};

export default BookingList;