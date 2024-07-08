import React from 'react'
import About from '../Components/About';
import Reviewpart from '../Components/Reviewpart';
import Chefs from '../Components/Chefs';

const AboutPage = () => {
    return (
        <>
            <div className="mt-5"></div>
            <section className="breadcrumb breadcrumb_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner text-center">
                                <div className="breadcrumb_iner_item pt-5 mt-5">
                                    <h2>About Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Reviewpart />
            <Chefs />
        </>
    )
}
export default AboutPage;