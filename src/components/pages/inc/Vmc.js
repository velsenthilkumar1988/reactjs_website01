import React from "react";
import {BiLowVision} from 'react-icons/bi';
import {GiArcheryTarget} from 'react-icons/gi';
import {GrNewWindow} from 'react-icons/gr';

function Vmc(){
    return(
        <section className="section bg-light-c border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <h2 className="main-heading  text-center">Vision, Mission and Values</h2>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4 mb-4 text-center">
                            
                            <span className="py-2"><BiLowVision size={35} color="orange"/></span>
                            <h6>Our Vision</h6>
                            <p className="para_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt. Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor.</p>
                        </div>
                        <div className="col-md-4 mb-4 text-center shadow">
                            <span className="py-2"><GiArcheryTarget size={35} color="red"/></span>
                            <h6>Our Mission</h6>
                            <p className="para_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt. Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor.</p>
                        </div>
                        <div className="col-md-4 mb-4 text-center">
                            <span className="py-2"><GrNewWindow size={35} color="green"/></span>
                            <h6>Values</h6>
                            <p className="para_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt. Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor.</p>
                        </div>
                        
                    </div>
                </div>
            </section>
    );
}

export default Vmc;