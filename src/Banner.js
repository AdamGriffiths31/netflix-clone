import React from 'react'
import "./Banner.css"         
import ReactPlayer from 'react-player'

const Banner  = ({ movie}) => {
    return (
        <header className="banner">
            <div className="banner_contents">

        <ReactPlayer
            playing={true}
            loop={true}
            width='100%'
            height='100%'
            volume={1}
            muted={true}
            url='https://vimeo.com/456293878'
            />
            <h1 className="banner_heading">{movie.title}</h1>
            <div className="banner_tagline">{movie.tagline}</div>
            <button className='banner_button'>
          Play
        </button>
        <button className='banner_button MyList'>
          My List
        </button>
            </div>
            <div className="banner_fadeBottom"/>    
    </header>
    )
}

export default Banner
