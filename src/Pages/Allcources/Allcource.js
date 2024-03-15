import React, { useState ,  } from 'react'
import { Container } from './Allcourcecss';
import { FaBars } from 'react-icons/fa'
import Sidebar from '../../Component/Sidebar/Sidebar';
import Search from '../../Component/search/search';
import './Allcources.css'
import Navbar from '../../Component/Navbar/Navbar'
import { useNavigate } from 'react-router';


const Header = () => {
  const [sidebar, setSidebar] = useState(true)
  const Nevigate = useNavigate();
  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <>
      <Navbar></Navbar>
      <div className='allcources'>

        <Container>
          {/* <FaBars onClick={showSiderbar} /> */}
          {sidebar && <Sidebar active={setSidebar} />}
          <Search />
        </Container>

        <div className='All_courses' >

          

          <div className="course-cards" onClick={()=>Nevigate('abc')}>

            <figure className="card-banner img-holder" style={{ height: "300px" }}>
              <img src="images/course-1.jpg" loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
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
          <div className="course-cards" onClick={()=>Nevigate('abc')}>

            <figure className="card-banner img-holder" style={{ height: "300px" }}>
              <img src="images/course-1.jpg" loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
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
          <div className="course-cards" onClick={()=>Nevigate('abc')}>

            <figure className="card-banner img-holder" style={{ height: "300px" }}>
              <img src="images/course-1.jpg" loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
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
          <div className="course-cards" onClick={()=>Nevigate('abc')}>

            <figure className="card-banner img-holder" style={{ height: "300px" }}>
              <img src="images/course-1.jpg" loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
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
          <div className="course-cards" onClick={()=>Nevigate('abc')}>

            <figure className="card-banner img-holder" style={{ height: "300px" }}>
              <img src="images/course-1.jpg" loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
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
          <div className="course-cards" onClick={()=>Nevigate('abc')}>

            <figure className="card-banner img-holder" style={{ height: "300px" }}>
              <img src="images/course-1.jpg" loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
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
          <div className="course-cards" onClick={()=>Nevigate('abc')}>

            <figure className="card-banner img-holder" style={{ height: "300px" }}>
              <img src="images/course-1.jpg" loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
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
          <div className="course-cards" onClick={()=>Nevigate('abc')}>

            <figure className="card-banner img-holder" style={{ height: "300px" }}>
              <img src="images/course-1.jpg" loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
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
          <div className="course-cards" onClick={()=>Nevigate('abc')}>

            <figure className="card-banner img-holder" style={{ height: "300px" }}>
              <img src="images/course-1.jpg" loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
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
          <div className="course-cards" onClick={()=>Nevigate('abc')}>

            <figure className="card-banner img-holder" style={{ height: "300px" }}>
              <img src="images/course-1.jpg" loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
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
          <div className="course-cards" onClick={()=>Nevigate('abc')}>

            <figure className="card-banner img-holder" style={{ height: "300px" }}>
              <img src="images/course-1.jpg" loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
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
          <div className="course-cards" onClick={()=>Nevigate('abc')}>

            <figure className="card-banner img-holder" style={{ height: "300px" }}>
              <img src="images/course-1.jpg" loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
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
        

        </div>
        </div>
      </>
      )
}

      export default Header;