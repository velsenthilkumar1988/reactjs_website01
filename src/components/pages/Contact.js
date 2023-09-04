import React from "react";
import Footer from "../inc/Footer.js";

function Contact(){
    return(
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-8">
                            <h6 className="">Home / About Us</h6>
                        </div>
                    </div>
                </div>
                <h1>Contact Pages</h1>
            </section>
            <section className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 shadow py-4">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Message</label>
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                            </div>
                            
                            
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        </div>
                        <div className="col-md-6 shadow py-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.641991828558!2d78.13840367488687!3d11.065445089101411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa32f12d8c86ed%3A0x5e6d8ebbf13b044b!2sAmazing%20Tek!5e0!3m2!1sen!2sin!4v1693637175840!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
        
    );
}

export default Contact;