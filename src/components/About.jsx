import React from 'react'
import logo from "./409.jpg"

const About = () => {
  return (
    <div className='about'>

            <img src={logo} />
    
        <div className='aboutme'>

            <h1>About me</h1>
           
            <p>"I am Ayush Mahapatra, a graduate in Computer Science and Engineering from Trident Academy of Technology. Passionate about leveraging technology to solve complex problems, I have equipped myself with a solid foundation in computer science principles and practical skills during my B.Tech journey. Throughout my academic tenure, I actively engaged in various projects and coursework. My commitment to excellence is demonstrated through my consistent academic performance . Eager to contribute my skills and knowledge to real-world challenges, I am now seeking opportunities to embark on a rewarding career in the dynamic field of technology."</p>
            
            <section>
            <h2>Education</h2>
            <h3>Trident Academy of Technology</h3>
            <p >Bachelor of Technology in Computer Science and Engineering</p>
            <p >Year: [2019] - [2023]</p>
            <h3>college of basic science and humanities</h3>
            <p >intermediate</p>
            <p >Year: [2017] - [2019]</p>
            <h3>Venkatesar english medium school</h3>
            <p >10 th</p>
            <p >Year: [2016] - [2017]</p>
            </section>
            </div>
        

    </div>
  )
}

export default About