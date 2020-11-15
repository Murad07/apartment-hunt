import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Houses from '../Houses/Houses/Houses';
import Services from '../Service/Services/Services';

const Home = () => {
    return (
        <div style={{ backgroundColor: "#f1f5f4"}}>
            <Header></Header>
            <Houses></Houses>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;