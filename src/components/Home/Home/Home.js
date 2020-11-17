import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Houses from '../Houses/Houses/Houses';
import Services from '../Service/Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ backgroundColor: "#f1f5f4"}}>
                <Header></Header>
                <Houses></Houses>
                <Services></Services>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;