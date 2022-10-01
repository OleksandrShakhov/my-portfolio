import React, { useRef } from 'react';
import './contact.css';
// Importend icons
import {BsInstagram} from 'react-icons/bs'
import {BsArrowRightSquare} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import {FaFacebookMessenger} from 'react-icons/fa'
import {CgArrowRightR} from 'react-icons/cg'

//EmailJS 
import emailjs from '@emailjs/browser';




export default function Contact() {

	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		
		emailjs.sendForm('shakhov42@gmail.com', 'template_ehwqx9l', form.current, '8AbWo945hxovHGhuz')
		e.target.reset() // to reset the form after submit
	};

	return (
		<section id='contact' className='contact section container'>

			<div className="sectionTitle">
				<span className="titleNumber">04.</span>
				<h5 className="titleText">
					Contact Me
					<div className="underline"><span></span></div>
				</h5>
			</div>

			<div className="contactContainer grid">
				<div className="socialContacts grid">
					<h3>Talk to me</h3>

					<div className="cards grid">

						<div className="card">
							<div>
								<BsTelegram className='icon iconInst' />
							</div>
							<h4>Telegram</h4>
							<span className='userName'>
								@Oleksandr_Shakhov
							</span>
							<div>
								<a href="https://t.me/Oleksandr_Shakhov" className="flex" target="_blank">
									Send Message
									<BsArrowRightSquare className='icon'/>
								</a>
							</div>
						</div>

						<div className="card">
							<div>
								<FaFacebookMessenger className='icon iconInst' />
							</div>
							<h4>Facebook</h4>
							<span className='userName'>
								Oleksandr Shakhov
							</span>
							<div>
								<a href="https://www.facebook.com/aleksandr.shakhov.3597/" className="flex" target="_blank">
									Send Message
									<BsArrowRightSquare className='icon'/>
								</a>
							</div>
						</div>

						<div className="card">
							<div>
								<BsInstagram className='icon iconInst' />
							</div>
							<h4>Instagram</h4>
							<span className='userName'>
								@aleksandr_shakhov
							</span>
							<div>
								<a href="https://www.instagram.com/aleksandr_shakhov/" className="flex" target="_blank">
									Send Message
									<BsArrowRightSquare className='icon'/>
								</a>
							</div>
						</div>
						
					</div>
					
				</div>

				<div className="form grid">
					<h3>Send me an Email</h3>

					<form ref={form} onSubmit={sendEmail}>
						<input type="text" placeholder='Enter your Name' name='name'  />
						<input type="email" placeholder='Enter your Email' name='email' />
						<textarea name="message" placeholder='Enter your Message'></textarea>
						<button className="formBtn" type='submit'>
							Send Email
						</button>
					</form>
				</div>
			</div>
			<div className="forGoUp">
					<a href='#home' className="goUp">
						<CgArrowRightR className='iconGo' title='Go Up'/>
					</a>
				</div>
		</section>
	)
}