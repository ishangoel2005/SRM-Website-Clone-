import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
           <h3>About the College</h3> 
           <h2>Learn.Leap.Lead</h2>
           <p>Welcome to SRM Institute of Science & Technology, Chennai, India. We share the passion, commitment and believe that Engineering and Science can give you the exhilarating power to become an active explorer, maker and help invent the future.</p>
           <p>At SRMIST students will have an opportunity to experience holistic learning along with opportunity to work with a dynamic peer-group, exchange ideas and involve in real time projects. Our collaboration with over 50 of the world’s best universities and 215 corporates strengthens our academic and research programs.</p>
           <p>Looking forward to welcoming you at SRMIST’s Faculty of Engineering & Technology.</p>
        </div>
    </div>
  )
}

export default About