import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
        <div className="banner inner-banner" id="home">
	<div className="container">

	</div>
</div>
    <section className="contact py-5 my-lg-5">
	<div className="container">
		<h3 className="heading mb-5">Contact Us</h3>
		<div className="row contact_information">
			<div className="col-md-6">
				<div className="contact_right p-lg-5 p-4">
					<form action="#" method="post">
						<div className="w3_agileits_contact_left">
							<h3 className="mb-3">Contact form</h3>
							<input type="text" name="Name" placeholder="Your Name" required=""/>
							<input type="email" name="Email" placeholder="Your Email" required=""/>
							<input type="text" name="Phone" placeholder="Phone Number" required=""/>
							<textarea placeholder="Your Message Here..." required=""></textarea>
						</div>
						<div className="w3_agileits_contact_right">
							<button type="submit" >Submit</button>
						</div>
						<div className="clearfix"> </div>
					</form>
				</div>
			</div>
			<div className="col-md-6 contact_left p-4">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27602.30032355007!2d78.75680190835989!3d30.143194150573713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909a476b13ca115%3A0xa30049354e9659ca!2sPauri%2C%20Uttarakhand%20246001!5e0!3m2!1sen!2sin!4v1639910570494!5m2!1sen!2sin"></iframe>
			</div>
			<div className="col-lg-4 col-md-6">
				<div className="mt-5 information">
					<h4 className="text-uppercase mb-4"><span className="fa fa-comments"></span> Communication</h4>
					<p className="mb-3 text-capitalize">for general queries, including property Sales and constructions, please email us at <a href="mailto:info@example.com">info@example.com</a></p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 mt-md-5 mt-2 information">
				<h4 className="text-uppercase mb-4"><span className="fa fa-life-ring"></span> Technical Support</h4>
				<p className="mb-3 text-capitalize">we are ready to help! if you have any queries or issues, contact us for support <span>+12 388 455 6789</span>.</p>
			</div>
			<div className="col-lg-4 col-md-6 mt-md-5 mt-2 information">
				<h4 className="text-uppercase mb-4"><span className="fa fa-map"></span> Others</h4>
				<p className="mb-3 text-capitalize">we are ready to help! if you have any queries or issues, contact us for support <span>+12 388 455 6789</span>.</p>
			</div>
		</div>
	</div>
</section>
    </div>
  );
}

export default Home;
