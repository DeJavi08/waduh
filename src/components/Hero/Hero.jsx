import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Membangun Negri Bersama Negroid</h2>
                <p>
                    Profesional Frontend Developer | Mengubah ide besar menjadi browser menarik yang asyik
                </p>
            </div>

            <div className="hero-img">
            <div>
            <div className="tech-icon">
                <img src="./assets/images/img01.png" alt="" />
            </div>
            <img src="./assets/images/img11.jpeg" alt="" />
            </div>
            
            <div>
               <div className="tech-icon">
                <img src="./assets/images/img02.png" alt="" />
               </div>
               <div className="tech-icon">
                <img src="./assets/images/img03.png" alt="" />
               </div>
               <div className="tech-icon">
                <img src="./assets/images/img04.png" alt="" />
               </div>
            </div>
            </div>
        </section>
    )
}

export default Hero