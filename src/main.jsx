import React from 'react'
import ReactDOM from 'react-dom/client'
import BannerLeft from './components/BannerLeft'
import InfoPage from './components/InfoPage'
import More from './components/More'
import BannerPost from './components/BannerPost'
import Post from './components/Post'
import Footer from './components/Footer'

import './scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BannerLeft />
    <InfoPage />
    <More />
    <BannerPost /> 
    <Post />
    <Footer />
  </React.StrictMode>,
)
