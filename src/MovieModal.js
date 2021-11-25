import React from 'react'
function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1)+'...':str;
}
const MovieDetails = ({
    movie: {
      title,
      name,
      release_date,
      first_air_date,
      overview,
    },
  }) => {
    return (
      <div className='modal__container'>
        <h1 className='modal__title'>{title || name}</h1>
        <p className='modal__info'>
          Release date: {release_date || first_air_date} 
        </p>
        <p className='modal__overview'>{truncate(overview,250)}</p>
        <button className='modal_button'>
          Play
        </button>
        <button className='modal_button MyList'>
          My List
        </button>
      </div>
    )
  }
  
  export default MovieDetails