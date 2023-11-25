import React from 'react';
import './about.css';
import {FiDownload} from 'react-icons/fi';
import img from '../../Assets/alex-png.png'
export default function About() {
	return (
		<section id='about' className='about section container'>

			<div className="sectionTitle">
				<span className="titleNumber">01.</span>
				<h5 className="titleText">
					About about about about
					<div className="underline"><span></span></div>
				</h5>
			</div>
			
			<div className="container sectionContent grid">
				<div className="textSection">
					<h4>
					A highly motivated junior web developer with a proven ability to deliver quality results while working collaboratively in a rapidly changing work environment and team composition. Equipped with a list of well- prepared and modernly adapted projects made by using the most up-to-date technologies. Deadline driven and hardworking student with a strong desire to always learn new things and contribute to the success of the team. Individual and collaborative diligent web programmer with great problem solving and new product creation skills.
          <br/><br/><b>For more information click on the button below.</b>
					</h4>

          <div className='flex'>
            <div className="aboutBtn">
              <a href="Oleksandr Shakhov(Web Development).pdf" download='Oleksandr Shakhov(Web Development).pdf' className="flex">
                Resume <FiDownload className='icon' />
              </a>
            </div>
            <div className="aboutBtn">
              <a href="Cover letter for Web.pdf" download='Cover letter for Web.pdf' className="flex">
                Cover Letter <FiDownload className='icon' />
              </a>
            </div>
          </div>
				</div>

				<div className="aboutImgDiv">
					<img src={img} alt="Oleksandr Shakhov" className='aboutImg' />
				</div>
			</div>
		</section>
	)
}
