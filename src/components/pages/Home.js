import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import Vmc from "./inc/Vmc";
import Services from "./inc/Services";
import Footer from "../inc/Footer.js";


function Home(){
    return(
        <div>
            <Slider/>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <h2 className="main-heading  text-center">Our Company</h2>
                            <div className="underline mx-auto"></div>
                            <p className="para_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt. Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor.</p>
                            <Link to="/about" className="btn btn-warning py-1 shadow d-flex justify-content-around">Read more...</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision Mission and Values */}
            <Vmc/>
            {/* Our Services */}
            <Services/>
            {/**footer pages */}
            <Footer/>
        </div>
    );
}

export default Home;