import React from 'react';
import './Cources.css'

const Cources = () => {
  return (
    <section className="section course" id="courses" aria-label="course">
    <div className="container">

      <p className="section-subtitle">Popular Courses</p>

      <h2 className="h2 section-title">Pick A Course To Get Started</h2>

      <ul className="grid-list">

        <li>
          <div className="course-card">

            <figure className="card-banner img-holder" style={{height: "300px"}}>
              <img src="images/course-1.jpg" loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover"/>
            </figure>

            <div className="abs-badge">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

              <span className="span">3 Weeks</span>
            </div>

            <div className="card-content">

              <span className="badge">Beginner</span>

              <h3 className="h3">
                <a href="#" className="card-title">Build Responsive Real- World Websites with HTML and CSS</a>
              </h3>

              <div className="wrapper">

                <div className="rating-wrapper">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

                <p className="rating-text">(5.0/7 Rating)</p>

              </div>

              <data className="price" value="29">$29.00</data>

              <ul className="card-meta-list">

                <li className="card-meta-item">
                  <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

                  <span className="span">8 Lessons</span>
                </li>

                <li className="card-meta-item">
                  <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

                  <span className="span">20 Students</span>
                </li>

              </ul>

            </div>

          </div>
        </li>

        <li>
          <div className="course-card">

            <figure className="card-banner img-holder" style={{height: "300px"}}>
              <img src="images/course-2.jpg"  loading="lazy"
                alt="Java Programming Masterclass for Software Developers" className="img-cover"/>
            </figure>

            <div className="abs-badge">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

              <span className="span">8 Weeks</span>
            </div>

            <div className="card-content">

              <span className="badge">Advanced</span>

              <h3 className="h3">
                <a href="/cource/java" className="card-title">Mastering Web Development: From Basics to Advanced Techniques</a>
              </h3>

              <div className="wrapper">

                <div className="rating-wrapper">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

                <p className="rating-text">(4.5 /9 Rating)</p>

              </div>

              <data className="price" value="49">$49.00</data>

              <ul className="card-meta-list">

                <li className="card-meta-item">
                  <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

                  <span className="span">15 Lessons</span>
                </li>

                <li className="card-meta-item">
                  <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

                  <span className="span">35 Students</span>
                </li>

              </ul>

            </div>

          </div>
        </li>

        <li>
          <div className="course-card">

            <figure className="card-banner img-holder" style={{height: "300px"}}>
              <img src="images/course-3.jpg" loading="lazy"
                alt="The Complete Camtasia Course for Content Creators" className="img-cover"/>
            </figure>

            <div className="abs-badge">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

              <span className="span">3 Weeks</span>
            </div>

            <div className="card-content">

              <span className="badge">Intermediate</span>

              <h3 className="h3">
                <a href="#" className="card-title">The Complete Camtasia Course for Content Creators</a>
              </h3>

              <div className="wrapper">

                <div className="rating-wrapper">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

                <p className="rating-text">(4.9 /7 Rating)</p>

              </div>

              <data className="price" value="35">$35.00</data>

              <ul className="card-meta-list">

                <li className="card-meta-item">
                  <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

                  <span className="span">13 Lessons</span>
                </li>

                <li className="card-meta-item">
                  <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

                  <span className="span">18 Students</span>
                </li>

              </ul>

            </div>

          </div>
        </li>

      </ul>

      <a href="/cource" className="btn has-before">
        <span className="span">Browse more courses</span>

        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
      </a>

    </div>
  </section>
  );
};

export default Cources;