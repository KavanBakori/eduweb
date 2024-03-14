import React from 'react'
import './Footer.css'

function Footer  () {
  return (
    <>
      <footer class="footer" style={{backgroundImage: "images/footer-bg.png"}}>

<div class="footer-top section">
  <div class="container grid-list">

    <div class="footer-brand">

      <a href="#" class="logo">
        <img src="images/anilearn.png" width="272" height="50" alt="EduWeb logo"/>
      </a>

      <p class="footer-brand-text">
      Animation Meets Education. Embrace the future of learning, where educators weave magic into lessons, and students thrive in an immersive visual learning environment.
      </p>

     

      <div class="wrapper">
        <span class="span">Call:</span>

        <a href="" class="footer-link">9265624142
        </a>
      </div>

      <div class="wrapper">
        <span class="span">Email:</span>

        <a href="mailto:info@eduweb.com" class="footer-link">anilearn@eduweb.com</a>
      </div>

    </div>

    <ul class="footer-list">

      <li>
        <p class="footer-list-title">Online Platform</p>
      </li>

      <li>
        <a href="#about" class="footer-link">About</a>
      </li>

      <li>
        <a href="#courses" class="footer-link">Courses</a>
      </li>

      <li>
        <a href="#" class="footer-link">Instructor Profile</a>
      </li>

      {/* <li>
        <a href="#" class="footer-link">Events</a>
      </li> */}

      {/* <li>
        <a href="#" class="footer-link">Instructor Profile</a>
      </li> */}

      {/* <li>
        <a href="#" class="footer-link">Purchase Guide</a>
      </li> */}

    </ul>

    <ul class="footer-list">

      <li>
        <p class="footer-list-title">Links</p>
      </li>

      {/* <li>
        <a href="#" class="footer-link">Contact Us</a>
      </li> */}

      {/* <li>
        <a href="#" class="footer-link">Gallery</a>
      </li> */}

      <li>
        <a href="#" class="footer-link">FAQ's</a>
      </li>

      <li>
        <a href="#" class="footer-link">Sign In/Registration</a>
      </li>

      <li>
        <a href="#" class="footer-link">Coming Soon</a>
      </li>

    </ul>

    <div class="footer-list">

      <p class="footer-list-title">Contacts</p>

      <p class="footer-list-text">
        Send your suggestion
      </p>

      <form action="" class="newsletter-form">
        <input type="text" name="email_address" placeholder="Your suggestion" required class="input-field"/>

        <button type="submit" class="btn has-before">
          <span class="span">Send</span>

          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </button>
      </form>

      <ul class="social-list">

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>

        {/* <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li> */}

        {/* <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li> */}

      </ul>

    </div>

  </div>
</div>

<div class="footer-bottom">
  <div class="container">

    <p class="copyright">
      Copyright 2024 All Rights Reserved by <a href="#" class="copyright-link">Anilearn</a>
    </p>

  </div>
</div>

</footer>
    </>
  )
}

export default  Footer;
