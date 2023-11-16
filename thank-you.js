import React from 'react'

import { Helmet } from 'react-helmet'

import './thank-you.css'

const ThankYou = (props) => {
  return (
    <div className="thank-you-container">
      <Helmet>
        <title>Thank-you - Israel Advocacy Alliance</title>
        <meta
          property="og:title"
          content="Thank-you - Israel Advocacy Alliance"
        />
      </Helmet>
      <div className="thank-you-testimonial"></div>
      <span className="thank-you-text">
        <span>Thank you for your support</span>
        <br></br>
      </span>
    </div>
  )
}

export default ThankYou
