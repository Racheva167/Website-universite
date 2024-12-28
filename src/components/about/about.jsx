import React from 'react'
import './about.css'
import about_img from '../../assets/about1.jpg'
import play_icon from '../../assets/playicon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left" id='about'>
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=> {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Doloribus rerum, laudantium laboriosam nisi itaque
        dolorem nam facilis praesentium nulla. Cupiditate molestias
         incidunt nisi laboriosam amet quae doloremque ex 
         voluptatem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Dolorum iusto adipisci sequi explicabo illum fuga aut minima
         nemo ratione, in, amet necessitatibus totam eius deserunt
        alias quod quisquam minus voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Alias veniam iste dolorum suscipit aut ex similique, officia
         magnam. Voluptate molestiae ipsum facere sapiente exercitationem
         ut porro quam nisi magni asperiores?</p>
      </div>
    </div>
  )
}

export default About
