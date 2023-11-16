import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import './sign-up.css'

const SignUp = (props) => {
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>Sign-up - Israel Advocacy Alliance</title>
        <meta
          property="og:title"
          content="Sign-up - Israel Advocacy Alliance"
        />
      </Helmet>
      <div className="sign-up-header">
        <img
          alt="pastedImage"
          src="/external/pastedimage-hxl-1500w.png"
          className="sign-up-pasted-image"
        />
        <header data-role="Header" className="sign-up-header1">
          <div className="sign-up-container1">
            <div className="sign-up-container2">
              <div className="sign-up-nav">
                <NavigationLinks1
                  text="Home"
                  text1="Our Purpose"
                  text2="Forms"
                  text3=" "
                  text4=" "
                  rootClassName="rootClassName25"
                  className="sign-up-component"
                ></NavigationLinks1>
              </div>
            </div>
          </div>
          <div className="sign-up-btn-group">
            <Link to="/sign-up" className="sign-up-navlink button">
              <span>
                <span>Sign Up</span>
                <br></br>
              </span>
            </Link>
          </div>
          <div data-role="BurgerMenu" className="sign-up-burger-menu">
            <svg viewBox="0 0 1024 1024" className="sign-up-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="sign-up-mobile-menu">
            <nav className="sign-up-nav1">
              <div className="sign-up-container3">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="sign-up-image"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="sign-up-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="sign-up-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks1 rootClassName="rootClassName24"></NavigationLinks1>
            </nav>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="sign-up-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="sign-up-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="sign-up-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="sign-up-banner">
        <h1 className="sign-up-text3">Sign Up</h1>
        <span className="sign-up-text4">
          Sign up to support Israel. Please enter an valid email address.
          Instagram®, Google®, Apple® logins are not yet supported.
        </span>
        <div className="sign-up-container4">
          <input
            type="email"
            required
            placeholder="Email here..."
            className="sign-up-textinput input"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="sign-up-textinput1 input"
          />
          <Link to="/thank-you" className="sign-up-navlink1 button">
            Sign Up
          </Link>
        </div>
        <svg viewBox="0 0 877.7142857142857 1024" className="sign-up-icon10">
          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
        </svg>
      </div>
      <img
        alt="pastedImage"
        src="/external/pastedimage-n6n4c-200h.png"
        className="sign-up-pasted-image1"
      />
      <div className="sign-up-container5">
        <div className="sign-up-container6"></div>
      </div>
      <footer className="sign-up-footer">
        <svg viewBox="0 0 1024 1024" className="sign-up-icon12">
          <path d="M512 214q142 0 242 100t100 240q0 142-101 242t-241 100-241-100-101-242h86q0 106 75 181t181 75 181-75 75-181-75-181-181-75v172l-214-214 214-214v172z"></path>
        </svg>
        <span className="sign-up-text5">
                          © 2023 IAA, All Rights Reserved.
        </span>
        <div className="sign-up-icon-group1"></div>
      </footer>
      <img
        alt="pastedImage"
        src="/external/pastedimage-p9g-300h.png"
        className="sign-up-pasted-image2"
      />
      <img
        alt="pastedImage"
        src="/external/pastedimage-2nh-200h.png"
        className="sign-up-pasted-image3"
      />
    </div>
  )
}

export default SignUp
