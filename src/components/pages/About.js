import React from "react";
import slider1 from "../images/slider1.jpg";

import Footer from "../inc/Footer.js";

function About(){
    return(
        <section className="">
            <img src={slider1} alt="slider1" width="100%" height="400px" className="img-responsive"/>
            
            <div className="container mb-4">
                <div className="row">

                    <div className="col-md-12">
                        <h1 className="text-center"><div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">About Us</div></h1>
                        <p className="text-wrap py-2 mb-3 fs-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt. Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor.</p>
                        
                        <div className="row">
                            <div className="col-md-5">
                                <img src={slider1} class="object-fit-none border rounded" width="450px" height="400px" alt="..."></img>
                            </div>
                            <div className="col-md-7 shadow-lg ">
                            <h5 className="text-center"><div class="p-3 mb-5 bg-body-tertiary rounded">About Us</div></h5>
                            <p className="text-wrap py-2 mb-3 fs-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt. Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor.</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
           
            {/**footer pages */}
            <Footer/>
        </section>
    );
}

export default About;