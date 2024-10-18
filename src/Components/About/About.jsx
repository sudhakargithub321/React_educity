import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlaystate}) => {
  return (
    <div className='about'>

        <div className="about-left">
           <img src={about_img} alt="" className='about-img'/>
           <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlaystate(true)}} />
        </div>

        <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>The University of Madras (also known as Madras University) is a public state university in Chennai, Tamil Nadu, India.Established in 1857, it is one of the oldest and among the most prominent universities in India, incorporated by an act of the Legislative Council of India under the British government.</p>
        <p>The University of Madras is a collegiate research university and has six campuses in the city: Chepauk, Marina, Guindy, Taramani, Maduravoyal and Chetpet. It offers more than 230 courses under 87 academic departments of post-graduate teaching and research grouped under 18 schools.</p>
        <p>The National Assessment and Accreditation Council has conferred 'five star' accreditation to the university in the first cycle, and subsequently with its highest A++ grade.</p>

        </div>
    </div>
  )
}

export default About