import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Corporate Factors Liaison</title>
        <meta property="og:title" content="Corporate Factors Liaison" />
      </Helmet>
    </div>
  )
}

export default Home
