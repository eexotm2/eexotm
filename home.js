import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import FeatureCard from '../components/feature-card'
import Question from '../components/question'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Israel Advocacy Alliance</title>
        <meta property="og:title" content="Israel Advocacy Alliance" />
      </Helmet>
      <div className="home-header">
        <img
          alt="pastedImage"
          src="/external/pastedimage-hxl-1500w.png"
          className="home-pasted-image"
        />
        <header data-role="Header" className="home-header1">
          <div className="home-container01">
            <div className="home-container02">
              <div className="home-nav">
                <Link to="/" className="home-navlink">
                  <NavigationLinks1
                    text="Home"
                    text1="Our Purpose"
                    text2="Forms"
                    text3=" "
                    text4=" "
                    rootClassName="rootClassName21"
                    className="home-component"
                  ></NavigationLinks1>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-btn-group">
            <Link to="/sign-up" className="home-navlink1 button">
              <span>
                <span>Sign Up</span>
                <br></br>
              </span>
            </Link>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <nav className="home-nav1">
              <div className="home-container03">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks1 rootClassName="rootClassName20"></NavigationLinks1>
            </nav>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <img alt="pastedImage" src="/external/pastedimage-hxl-1500w.png" />
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container04">
            <h1 className="home-hero-heading heading1">
              Join the Israel Advocacy Alliances Movement
            </h1>
            <span className="home-hero-sub-heading">
              <span>
                Join us against the people of Hamas and support Israel
              </span>
              <br></br>
            </span>
            <div className="home-btn-group1">
              <Link to="/sign-up" className="home-hero-button1 button">
                <span className="home-text05">
                  <span>Join Us</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container05">
            <span className="home-text08 sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              We&apos;ll Remember October 7th
            </h2>
            <span className="home-details-sub-heading">
              <span>
                In light of the momentous occurrences on October 7th, a critical
                juncture has arisen, necessitating a collective response filled
                with solidarity, empathy, and decisive action for Israel. We
                invite you to become a pivotal part of the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text12">
                Israel Advocacy Alliance Movement
              </span>
              <span>
                , a global initiative committed to fostering a future where
                Israel thrives in peace and security.
              </span>
              <br></br>
              <span>
                Our movement is more than a response to a single event;
                it&apos;s a continuous commitment to ensuring the well-being,
                prosperity, and recognition of Israel&apos;s rights and
                contributions on the world stage. By joining us, you are not
                just standing up against adversity; you are contributing to a
                narrative of hope, resilience, and constructive engagement.
              </span>
              <span className="home-text16">
                {' '}
                IAA is also in support of LGBTQ Israeli&apos;s.
              </span>
              <br></br>
            </span>
            <button className="home-hero-button11 button">
              <Link to="/our-purpose" className="home-navlink2">
                <span>Read more about us</span>
                <br></br>
              </Link>
            </button>
          </div>
          <img
            alt="image"
            src="https://static.timesofisrael.com/www/uploads/2023/11/20231107_untitled_06136-2048x1138-1-e1699345094467.jpg"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container06">
              <h2 id="support" className="home-features-heading heading2">
                How to Support
              </h2>
              <span className="home-features-sub-heading">
                Empowering individuals to make a difference through Israel
                advocacy
              </span>
            </div>
            <div className="home-container07">
              <Link to="/sign-up">
                <FeatureCard
                  Heading="Create an account"
                  SubHeading="Simply create an account using your email or socials and become a member of our website."
                  className="home-feature-card1"
                ></FeatureCard>
              </Link>
              <Link to="/forums">
                <FeatureCard
                  Heading="Fill out our forms"
                  SubHeading="Fill our forms out below to give your opinion and suggestions."
                  className="home-feature-card2"
                ></FeatureCard>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing"></div>
      <div className="home-gallery"></div>
      <div className="home-banner"></div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container08">
              <span className="home-text20 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text23 heading2">Common questions</h2>
              <span className="home-text24">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container09">
              <Question
                Answer="The purpose of the Israel Advocacy Alliances movement is to get more people to realiez October 7th and bring together the people who support Israel in this war ."
                Question="What is the purpose of the Israel Advocacy Alliances movement?"
              ></Question>
              <Question
                Answer="To join us simply create an account at the top right. Our goal is to reach 10,000 members by the end of the month. Current member count : 6,345/10,000"
                Question="How can I join the Israel Advocacy Alliances movement?"
              ></Question>
              <Question
                Answer="Joining the Israel Advocacy Alliance Movement empowers you to amplify your voice in a collective effort to safeguard innocent lives and contribute to a global movement for peace and security in Israel."
                Question="What are the benefits of joining the Israel Advocacy Alliances movement?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer"></div>
      <img alt="pastedImage" src="/external/pastedimage-945g-1500w.png" />
      <footer className="home-footer1">
        <svg viewBox="0 0 1024 1024" className="home-icon10">
          <path d="M512 214q142 0 242 100t100 240q0 142-101 242t-241 100-241-100-101-242h86q0 106 75 181t181 75 181-75 75-181-75-181-181-75v172l-214-214 214-214v172z"></path>
        </svg>
        <span className="home-text41">
                          © 2023 IAA, All Rights Reserved.
        </span>
        <div className="home-icon-group1">
          <svg viewBox="0 0 950.8571428571428 1024" className="home-icon12">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon14">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="home-icon16">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </footer>
      <span className="home-text42">
        Please be aware that, due to a series of unauthorized access attempts by
        individuals opposing Israel, our website is currently operating under
        HTTP protocol and may exhibit some visual inconsistencies. Despite these
        issues, rest assured that this is the official site of the IAA, and it
        remains a reliable source of information. We appreciate your
        understanding and patience during this time.
      </span>
    </div>
  )
}

export default Home
