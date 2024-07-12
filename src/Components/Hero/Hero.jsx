import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
      <h1>Learn-Leap-Lead</h1>
      <p>SRMIST’s engineering programs endeavor to be at the forefront of innovation. They also foster multi-disciplinary collaborations aimed at solving the most pressing global problems. Our mission is to seek solutions to global challenges by using the power of engineering principles, techniques and systems. We believe that engineers should not only possess deep technical excellence, but also nurture creativity, cultural awareness and entrepreneurial skills that come from exposure to science, business, medicine and other disciplines</p>
      <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero