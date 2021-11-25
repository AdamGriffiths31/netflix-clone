import React, { useState } from 'react'
import App from './App'
import MovieModal from './MovieModal'
import Modal from './Modal'
import Nav from './Nav'
import Footer from './Footer'
const Home = () => {
    const [toggleModal, setToggleModal] = useState(false)
    const [movie, setMovieDetails] = useState({})
    const selectMovieHandler = async (movie) => {
      setToggleModal(true)
      setMovieDetails(movie)
    }
    const closeModal = () => {
    setToggleModal(false)
    }
    return (
        <div>
          <Nav/>
        <div className='main-content'>
        <App selectMovieHandler={selectMovieHandler} />
        <Footer/>
        </div>
        <Modal
          show={toggleModal}
          modalClosed={closeModal}
          backgroundImage={movie.backdrop_path || movie.poster_path}
        >
          <MovieModal movie={movie} />
        </Modal>
        </div>
    )
  }
  
  export default Home