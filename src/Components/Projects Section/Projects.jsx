import React from 'react';
import './projects.css';
import {AiFillYoutube} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
// =========== Images ============
import img from '../../Assets/img1.png'
import img1 from '../../Assets/img2.png'
import img2 from '../../Assets/img3.png'
import img3 from '../../Assets/img4.png'




const data = [
	{
		id: 1,
		image: img,
		demo: "https://www.youtube.com/",
		liveLink: 'https://oleksandrshakhov.github.io/Business-Site/',
		github: 'https://github.com/OleksandrShakhov/Business-Site',
		title: 'Bussiness site',
		desc: 'This is a business site which allows you to get a help in a business field.',
		tech1: 'HTML',
		tech2: 'CSS',
		tech3: 'JavaScript',
		tech4: '',
		tech5: '',
	},
	{
		id: 2,
		image: img1,
		demo: "https://www.youtube.com/",
		liveLink: 'https://oleksandrshakhov.github.io/DJI-Web-Site/',
		github: 'https://github.com/OleksandrShakhov/Movic-Pro-Project',
		title: 'Mavic Pro',
		desc: 'This is the front-end part of the website for advertising "Mavic Pro" for DJI. Responsive web design.',
		tech1: 'HTML',
		tech2: 'CSS',
		tech3: 'JS',
		tech4: 'SASS',
		tech5: '',
	},
	{
		id: 3,
		image: img2,
		demo: "https://www.youtube.com/watch?v=E_GNNGgRJtc&t=24s",
		liveLinnk: '',
		github: 'https://github.com/OleksandrShakhov/Web-Application-doctor-s-notebook-',
		title: "Doctor's notebook (Web App)",
		desc: 'In this project you can see the Web App for Doctors who can store their Patients and the information about them using this App.',
		tech1: 'HTML',
		tech2: 'CSS',
		tech3: 'JavaScript',
		tech4: 'Python/Django',
		tech5: 'Bootstrap',
	},
	{
		id: 4,
		image: img3,
		demo: "youtubelink",
		liveLinnk: '',
		github: 'https://github.com/OleksandrShakhov/Tenzies-Game',
		title: 'Tenzies-Game',
		desc: 'This is the quite fancy Web-App Game. This project is my first one made by using React.',
		tech1: 'HTML',
		tech2: 'CSS',
		tech3: 'JavaScript',
		tech4: 'React',
		tech5: '',
	}
]



export default function Projects() {
	return (
		<section id='projects' className='projects container section'>

			<div className="sectionTitle">
				<span className="titleNumber">03.</span>
				<h5 className="titleText">
					My Projects
					<div className="underline"><span></span></div>
				</h5>
			</div>

			<div className="projectContainer grid">
				{
					data.map(({id, github, image, liveLink, desc, demo, title, tech1, tech2, tech3, tech4, tech5}) => {
						return (
							<div key={id} className="singleProject">

								<div className="externalLinks">
									<div className="youtubeIcon">
										<a href={demo} target='_blank'>
											<AiFillYoutube className='icon'/>
										</a>
									</div>
									<div className="githubIcon">
										<a href={github} target='_blank'>
											<BsGithub className='icon'/>
										</a>
									</div>
								</div>

								<div className="imgDiv">
									<a href={liveLink} target="_blank">
										<img src={image} alt={title} />
									</a>
								</div>

								<div className="projectTitle">
									<h3>{title}</h3>
								</div>

								<div className="desc">
									{desc}
								</div>

								<div className="technologies flex">
									<small>{tech1}</small>
									<small>{tech2}</small>
									<small>{tech3}</small>
									<small>{tech4}</small>
									<small>{tech5}</small>
								</div>
							</div>
						)
					})
					}
			</div>

		</section>
	)
}