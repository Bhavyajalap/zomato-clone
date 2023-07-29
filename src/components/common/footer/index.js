import React from 'react'
import './footer.css'

const Footer= () =>{
    return (
    <div className='footer-main'> 
        <div className="header-right">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="Zoomato-logo" className='header-logo' />
        </div>
        <div class="footer-grid">
      <div class="footer-section">
        <h2>About Us</h2>
        <ul>
          <li>Who We Are</li>
          <li>Blog</li>
          <li>Work with Us</li>
          <li>Investor Relations</li>
          <li>Report Fraud</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div class="footer-section">
        <h2>Restaurants</h2>
        <ul>
          <li>Find Restaurants</li>
          <li>Order Online</li>
          <li>Browse By City</li>
          <li>Blog</li>
          <li>Newsletter</li>
        </ul>
      </div>
      <div class="footer-section">
        <h2>ZOMAVERSE</h2>
        <ul>
          <li>Download App</li>
          <li>Android</li>
          <li>iOS</li>
        </ul>
      </div>
      <div class="footer-section">
        <h2>Learn More</h2>
        <ul>
          <li>FAQs</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Security</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </div>
    </div>
    )
}

export default Footer;