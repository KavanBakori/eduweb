import React from 'react';
import './Hero.css';
const Hero = () => {
  return (
    // ./assets/images/hero-bg.svg
    <section className="section hero has-bg-image" id="home" aria-label="home"
             style={{backgroundImage: "url('/images/hero-bg.jpg')"}}>
      <div className="container">

        <div className="hero-content">

          <h1 className="h1 section-title">
            Unlock the Power of <span className="span"> Visual Learning</span>  with AniLearn
          </h1>

          <p className="hero-text">
           Engaging animations, interactive visuals, personalized pacing for better learning.
          </p>

          <a href="#courses" className="btn has-before">
            <span className="span">Find Cources</span>

            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>

        </div>

        <figure className="hero-banner">

          <div className="img-holder one" style={{'--width': 270, '--height': 300}}>
            <img src="/images/hero-banner-1.jpg" width="270" height="300" alt="hero banner" className="img-cover" />
          </div>

          <div className="img-holder two" style={{'--width': 240, '--height': 370}}>
            <img src="/images/hero-banner-2.jpg" width="240" height="370" alt="hero banner" className="img-cover" />
          </div>

          {/* <img src="/images/hero-shape-1.svg" width="380" height="190" alt="" className="shape hero-shape-1" /> */}

          <img src="/images/hero-shape-2.png" width="622" height="551" alt="" className="shape hero-shape-2" />

        </figure>

      </div>
    </section>
  );
};

export default Hero;
