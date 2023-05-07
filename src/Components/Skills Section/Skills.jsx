import React from 'react';
import './skills.css';
import { FaReact } from 'react-icons/fa';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { CgFigma } from 'react-icons/cg';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiAdobexd } from 'react-icons/si';
import { FaGitSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { SiDjango } from 'react-icons/si';
import { SiJquery } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { GiScales } from 'react-icons/gi';
import { FaHandRock } from 'react-icons/fa';
import { TbVector } from 'react-icons/tb';
import { AiOutlineSolution } from 'react-icons/ai';
import { FaAssistiveListeningSystems } from 'react-icons/fa';
import { GiFlexibleStar } from 'react-icons/gi';

export default function Skills() {
	return (
		<section id='skills' className='skills container section'>
	<div className="sectionTitle">
				<span className="titleNumber">02.</span>
				<h5 className="titleText">
					My Skills
					<div className="underline"><span></span></div>
				</h5>
			</div>

			<div className='skillsContainer grid'>
				<div className="skillGroup">
					<div className="groupTitle">
						<h2 className="title">Web Development</h2>
						<span className="subTitle">
						2 Years Experience
						</span>
					</div>
					<div className="generalSkills">

						<div className="singleSkill">
							<div className="iconBox flex">
								<SiHtml5 className='icon' />
							</div>
							<span className="skillName">HTML</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<SiCss3 className='icon' />
							</div>
							<span className="skillName">CSS</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<SiJavascript className='icon' />
							</div>
							<span className="skillName">JS</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<FaReact className='icon' />
							</div>
							<span className="skillName">React</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<FaSass className='icon' />
							</div>
							<span className="skillName">SASS</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<FaPython className='icon' />
							</div>
							<span className="skillName">Python</span>
						</div>
					</div>
				</div>

				<div className="skillGroup">
					<div className="groupTitle">
						<h2 className="title">UI/UX</h2>
						<span className="subTitle">
						2 Years Experience
						</span>
					</div>
					<div className="generalSkills">

						<div className="singleSkill">
							<div className="iconBox flex">
								<CgFigma className='icon' />
							</div>
							<span className="skillName">Figma</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<SiAdobephotoshop className='icon' />
							</div>
							<span className="skillName">Ps</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<SiAdobexd className='icon' />
							</div>
							<span className="skillName">Xd</span>
						</div>

					</div>
				</div>
				<div className="skillGroup">
					<div className="groupTitle">
						<h2 className="title">Other Skills</h2>
						<span className="subTitle">
						2 Years Experience
						</span>
					</div>
					<div className="generalSkills">

						<div className="singleSkill">
							<div className="iconBox flex">
								<FaGitSquare className='icon' />
							</div>
							<span className="skillName">Git</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<FaGithubSquare className='icon' />
							</div>
							<span className="skillName">GitHub</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<SiMysql className='icon' />
							</div>
							<span className="skillName">SQLite</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<SiDjango className='icon' />
							</div>
							<span className="skillName">Django</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<SiJquery className='icon' />
							</div>
							<span className="skillName">jQuery</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<FaBootstrap className='icon' />
							</div>
							<span className="skillName">Bootstrap</span>
						</div>
					</div>
				</div>
        <div className="skillGroup">
					<div className="groupTitle">
						<h2 className="title">Soft Skills</h2>
						<span className="subTitle">
            that describe me best
						</span>
					</div>
					<div className="generalSkills">

						<div className="singleSkill">
							<div className="iconBox flex">
								<RiTeamFill className='icon' />
							</div>
							<span className="skillName">Teamwork</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<AiOutlineFieldTime className='icon' />
							</div>
							<span className="skillName">Time Manage</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<GiScales className='icon' />
							</div>
							<span className="skillName">Work Ethic</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<FaHandRock className='icon' />
							</div>
							<span className="skillName">Motivated</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<TbVector className='icon' />
							</div>
							<span className="skillName">Adaptability</span>
						</div>

						<div className="singleSkill">
							<div className="iconBox flex">
								<AiOutlineSolution className='icon' />
							</div>
							<span className="skillName">Problem-solving</span>
						</div>

            <div className="singleSkill">
							<div className="iconBox flex">
								<FaAssistiveListeningSystems className='icon' />
							</div>
							<span className="skillName">Active Listener</span>
						</div>

            <div className="singleSkill">
							<div className="iconBox flex">
								<GiFlexibleStar className='icon' />
							</div>
							<span className="skillName">Flexibility</span>
						</div>
					</div>
				</div>
			</div>
</section>
	)
}