import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Suryansh Tripathi</h3>
                                <span>SRMIST, Chennai (Graduation)</span>
                            </div>
                        </div>
                        <p>"SRMIST has provided exceptional education and numerous opportunities, shaping me into a confident professional ready for the industry.The diverse student community and the innovative learning environment helped me a lot."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Abhimanyu Singh</h3>
                                <span>SRMIST, Chennai (Masters)</span>
                            </div>
                        </div>
                        <p>"Completing my master's degree at SRMIST has been an enriching experience, with a robust curriculum and supportive faculty that fostered my professional development and enhanced my skills and knowledge."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Ekta Sharma</h3>
                                <span>SRMIST, Chennai (Graduation)</span>
                            </div>
                        </div>
                        <p>"The hands-on learning, supportive faculty and vibrant campus life at SRMIST have been pivotal in preparing me for my engineering career. The practical exposure and extensive resources available have greatly enhanced my skills."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Suhani Negi</h3>
                                <span>SRMIST, Chennai (Doctorate)</span>
                            </div>
                        </div>
                        <p>"SRMIST provided a great platform for my doctoral research with its world-class facilities and distinguished faculty. The rigorous academic training have been instrumental in advancing my career in research."</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials