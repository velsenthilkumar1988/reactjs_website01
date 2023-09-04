import React from "react";
//import {services01} from '../images/services01.webp'
//import services02 from '../images/services02.png';
//import services03 from '../images/services03.webp';
import { Link } from "react-router-dom";
import services01 from "../inc/services01.webp";
import services02 from "../inc/services02.png";
import services03 from "../inc/services03.webp";

function Services(){
    return(
        <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <h2 className="main-heading  text-center">Our Services</h2>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow">
                                <img src={services01} width={100} height={300} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6 className="fw-bold text-center">Core PHP Services</h6>    
                                    <div className="underline mx-auto"></div>
                                    <p className="para_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt.</p>
                                    <Link to="/about" className="btn btn-warning py-1 shadow d-flex justify-content-around">Read more...</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card shadow">
                                <img src={services02} sizes={50}  width={100} height={300} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6 className="fw-bold text-center">React Js / Redux</h6>    
                                    <div className="underline mx-auto"></div>
                                    <p className="para_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt.</p>
                                    <Link to="/about" className="btn btn-warning py-1 shadow d-flex justify-content-around">Read more...</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card shadow">
                                <img src={services03} sizes={50}  width={100} height={300} className="w-100 border-bottom" alt="srevces"/>
                                <div className="card-body">
                                    <h6 className="fw-bold text-center">CodeIgniter / Laravel</h6>    
                                    <div className="underline mx-auto"></div>
                                    <p className="para_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt.</p>
                                    <Link to="/about" className="btn btn-warning py-1 shadow d-flex justify-content-around">Read more...</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    );
}
export default Services;