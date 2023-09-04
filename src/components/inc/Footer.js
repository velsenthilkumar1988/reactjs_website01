import React from "react";
import footer_images from "../images/footer_images.png"
import Iframe from "react-iframe";
import {BsFacebook} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

function Footer(){
    return(
       
        <section className="bg-dark text-light mx-auto p-2" data-bs-theme="dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                            <h2><span class="shadow">Website Links</span></h2>
                        <ul class="list-group">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A fourth item</li>
                            <li class="list-group-item">And a fifth one</li>
                        </ul>
                        
                    </div>
                    <div className="col-md-4">
                        <h2><span class="shadow">Website user</span></h2>
                        <p>Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt.</p>
                        <div className="col-md-12 py-3 shadow">
                            <BsFacebook className="py-2 bg-white shadow" size={50} color="blue"  />
                            <BsWhatsapp className="py-2 bg-white"  size={50} color="green"/>
                            <BsInstagram className="py-2 bg-white" size={50} color="pink"/>
                            <BsTwitter className="py-2 bg-white" size={50} color="blue"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.641991828558!2d78.13840367488687!3d11.065445089101411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa32f12d8c86ed%3A0x5e6d8ebbf13b044b!2sAmazing%20Tek!5e0!3m2!1sen!2sin!4v1693637175840!5m2!1sen!2sin" width="100%" height="250px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                    </div>
                </div>
            </div>
        </section>
       
    );
}

export default Footer;