import React, {useState} from 'react';
import './navbar.css';
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

export default function Navbar() {

	// code to toggle on and off the navbar at small devices
	const [active, setActive] = useState('navBar')

	// this code will bring in the navbar from the top
	const showNavBar = () => {
		setActive('navBar activeNavbar')
	}

	// code to hide the navbar
	const closeNavBar = () => {
		setActive('navBar')
	}

	// code statement to add a background color to the header.
	const [activeHeader, setActiveHeader] = useState()
	const addBg = () => {
		if (window.scrollY >= 10) {
			setActiveHeader('header activeHeader')
		}else {
			setActiveHeader('header')
		}
	}

	window.addEventListener('scroll', addBg)


	return (
		<header className={activeHeader}>
			<div className='logoDiv'>
				<h1 className='logo'>
					<a href='#home'>O.S.</a>
				</h1>
			</div>

			<div className={active}>
				<ul onClick={closeNavBar} className="navLists">
					<li className="navItem">
						<a href="#about" className="navLink">
								<span className='headerNumber'>1. </span>
							About
						</a>
					</li>
					<li className="navItem">
						<a href="#skills" className="navLink">
							<span className='headerNumber'>2. </span>
						Skills
						</a>
					</li>
					<li className="navItem">
						<a href="#projects" className="navLink">
							<span className='headerNumber'>3. </span>
						Projects
						</a>
					</li>
					<li className="navItem">
						<a href="#contact" className="navLink">
							<span className='headerNumber'>4. </span>
							Contacts
						</a>
					</li>
						<button className='btn'>
							<a href="Oleksandr Shakhov(Web Development).pdf" download='Oleksandr Shakhov(Web Development).pdf'>Resume</a>
						</button>
				</ul>

				<div
					className="closeNavBar"
					onClick={closeNavBar}
				>
					<AiFillCloseCircle className='icon'/>
				</div>
			</div>

			<div className="toggleNavBar" onClick={showNavBar}>
				<TbGridDots className='icon'/>
			</div>
		</header>
	)
}