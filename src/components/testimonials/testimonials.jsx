import React, { useRef } from 'react'
import './testimonials.css'
import next_icon from '../../assets/nexticon.png'
import back_icon from '../../assets/backicon.png'
import user_1 from '../../assets/user2.png'
import user_2 from '../../assets/user3.png'
import user_3 from '../../assets/user6.png'
import user_4 from '../../assets/user.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideFoward = ()=> {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=> {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideFoward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>University, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Quia quas non dolore id nihil?
                         Eveniet, neque, minima quidem provident reiciendis
                         soluta culpa recusandae ipsa aliquam vel ullam
                         corrupti sunt. Aspernatur!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Naruto Uzumaki</h3>
                                <span>University, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Quia quas non dolore id nihil?
                         Eveniet, neque, minima quidem provident reiciendis
                         soluta culpa recusandae ipsa aliquam vel ullam
                         corrupti sunt. Aspernatur!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Lara Croft</h3>
                                <span>University, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Quia quas non dolore id nihil?
                         Eveniet, neque, minima quidem provident reiciendis
                         soluta culpa recusandae ipsa aliquam vel ullam
                         corrupti sunt. Aspernatur!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Christian Katshuva</h3>
                                <span>University, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Quia quas non dolore id nihil?
                         Eveniet, neque, minima quidem provident reiciendis
                         soluta culpa recusandae ipsa aliquam vel ullam
                         corrupti sunt. Aspernatur!</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials