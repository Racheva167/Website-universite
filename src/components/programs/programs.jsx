import React from 'react'
import './programs.css'
import program_1 from '../../assets/program2.jpg'
import program_2 from '../../assets/program1.jpg'
import program_3 from '../../assets/program3.jpg'
import program_icon_1 from '../../assets/program9.png'
import program_icon_2 from '../../assets/program10.png'
import program_icon_3 from '../../assets/program11.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
