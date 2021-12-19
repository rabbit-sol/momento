import React from "react";

function Footer() {
  return (
    <footer className="footer-emp-w3ls py-5">
    <div className="container py-xl-5 py-lg-3">
        <div className="row footer-top">
            <div className="col-lg-4 col-sm-6 footer-grid-wthree">
                <h1 className="footer-title text-uppercase text-white mb-4">Who We Are</h1>
                <div className="contact-info">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ipsum doloremque elit laudantium, totam rem
                        aperiam, eaque ipsa quae. Excepteur ut occaecat proident, sunt voluptatem et accusantium doloremque elit dolor.</p>
                    <h4 className="mt-3">Trusted by more than 1000+ people</h4>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 footer-grid-wthree mt-sm-0 mt-5">
                <h3 className="footer-title text-uppercase text-white mb-4">Latest News</h3>
                <div className="contact-info">
                    <div className="footer-style-w3ls">
                        <h4 className="mb-2"><span className="fa mr-1 fa-twitter"></span> Sed ut piciatis unde natus</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem....</p>
                        <p className="date">23 Nov 2018.</p>
                    </div>
                    <div className="footer-style-w3ls mt-3">
                        <h4 className="mb-2"><span className="fa mr-1 fa-twitter"></span> Modi tempra incunt sit</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem....</p>
                        <p className="date">24 Nov 2018.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 footer-grid-wthree mt-lg-0 mt-5">
                <h3 className="footer-title text-uppercase text-white mb-4">Contact Us</h3>
                <div className="contact-info">
                    <div className="footer-style-w3ls">
                        <h4 className="mb-2"> <span className="fa mr-1 fa-map-marker"></span> Location</h4>
                        <p>Estate Agency, 5th cross, 4th building, New York City.</p>
                    </div>
                    <div className="footer-style-w3ls my-3">
                        <h4 className="mb-2"><span className="fa mr-1 fa-phone"></span> Phone</h4>
                        <p>+121 098 8907 9987</p>
                    </div>
                    <div className="footer-style-w3ls">
                        <h4 className="mb-2"><span className="fa mr-1 fa-envelope-open"></span> Email</h4>
                        <p><a href="mailto:info@example.com">info@example.com</a></p>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-sm-6 footer-grid-wthree mt-lg-0 mt-5">
                <h2 className="footer-title text-uppercase text-white mb-4">Quick Links</h2>
                <ul className="links list-unstyled">
                    <li>
                        <a className="" href="/"> Home</a>
                    </li>
                    <li>
                        <a className="" href="/services"> Services Page</a>
                    </li>
                  
                    <li>
                        <a className="" href="/properties">Properties Page</a>
                    </li>
                    <li>
                        <a className="" href="/contact">Contact Page</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <a href="/" className="move-top text-center"><span className="fa fa-angle-up  mb-3" aria-hidden="true"></span><h1 style={{display: 'none'}}>Top</h1></a>
    <div className="copy-right-top border-top mt-4">
        <p className="copy-right text-center pt-xl-5 pt-4">&copy; 2021 Pauri Town. All Rights Reserved.
        </p>
    </div>
</footer>
  );
}

export default Footer;