import React from 'react';
import '../style/contact.css';

const Contact = () => {
  return (
    <>
      <section id="contact">
			<h1 className='section-heading mb75px'>
				<span>
					<i className="fa-solid fa-address-card"></i>
				</span>
				<span>Contact</span>
			</h1>
			<div id="contact-container">
				<div id="contact-form-container">
					<form id="contact-form">
						<input id="name-input" type="text" name="name" placeholder="Your Name"/>
						<input id="email-input" type="text" name="input-email" required placeholder="Your Email"/>
						<textarea id="message-input" name="input-message" rows="3" cols="40" placeholder="Message"></textarea>
						<button className="submit-button" type="submit">Send</button>
					</form>
				</div>
				<div id="mydetails-container">
					{/* <!-- <h3>Touch with Me</h3> -->
					<!-- <p>Sansa, Daudnagar, Aurangabad (824143)</p>	 --> */}
					<h3>My Address</h3>
					<p><i className="fa-solid fa-house"></i> Sansa, Daudnagar, Aurangabad (824143)</p>
					<div className="mydetails-info-container">
						<i className="fa-solid fa-location-dot"></i>
						<span>Bihar, India</span>
					</div>
					<h3>Connect with Me</h3>
					<div className="mydetails-info-container">
						<i className="fa-sharp fa-solid fa-phone-volume"></i>
						<span>9953666881, 9430594558</span>
					</div>
					<div className="mydetails-info-container">
						<i className="fa-solid fa-at"></i>
						<span>princesansaraj@gmail.com</span>
					</div>
				</div>
			</div>
			<div>
				<div className="text-center social-icons">
					<ul className="horizontal-list">
						<li>
							<a href="https://www.linkedin.com/in/-princekumar/" target="blank">
								<i className="fa-brands fa-linkedin-in"></i>
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/princesansaraj" target="blank">
								<i className="fa-brands fa-facebook-f"></i>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/prince_kraj" target="blank">
								<i className="fa-brands fa-twitter"></i>
							</a>
						</li>
						<li>
							<a href="https://github.com/prins-kraj" target="blank">
								<i className="fa-brands fa-github"></i>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/princ_kraj/" target="blank">
								<i className="fa-brands fa-instagram"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
    </>
  )
}

export default Contact
