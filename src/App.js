import './App.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Row from './Row'
import * as requests from './requests';
import Banner from './Banner';

const App = ({ selectMovieHandler }) => {
  const { movieDetails }   = useSelector((state) => state.movieDetails)
  const netflixOriginals = useSelector((state) => state.netflixOriginals)
  const topRated = useSelector((state) => state.topRated)
  const actionMovies = useSelector((state) => state.action)
  const comedyMovies = useSelector((state) => state.comedy)
  const horrorMovies = useSelector((state) => state.horror)
  const romanceMovies = useSelector((state) => state.romance)
  const documentaries = useSelector((state) => state.documentary)
  const trending = useSelector((state) => state.trending)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requests.fetchNetflixOriginalsData())
    dispatch(requests.fetchTrendingData())
    dispatch(requests.fetchTopRatedData())
    dispatch(requests.fetchActionMoviesData())
    dispatch(requests.fetchComedyMoviesData())
    dispatch(requests.fetchHorrorMoviesData())
    dispatch(requests.fetchRomanceMoviesData())
    dispatch(requests.fetchDocumentariesMoviesData())
    dispatch(requests.fetchMovieDetailsData('438631'))

  }, [dispatch])

  return (
    <div className="app">

     <Banner movie={movieDetails}/>
     <div className='container'>
      <div className='movieShowcase'>
     <Row title="Netflix Originals" data={netflixOriginals.data}  isLargeRow selectMovieHandler={selectMovieHandler}></Row>
     <Row title="Trending Now" data={trending.data}  selectMovieHandler={selectMovieHandler}></Row>
     <Row title="Top Rated" data={topRated.data} selectMovieHandler={selectMovieHandler}></Row>
     <Row title="Action Movies"  data={actionMovies.data}selectMovieHandler={selectMovieHandler}></Row>
     <Row title="Comedy Movies"  data={comedyMovies.data}selectMovieHandler={selectMovieHandler}></Row>
     <Row title="Horror Movies"  data={horrorMovies.data}selectMovieHandler={selectMovieHandler}></Row>
     <Row title="Romance Movies" data={romanceMovies.data} selectMovieHandler={selectMovieHandler}></Row>
     <Row title="Documentaries" data={documentaries.data} selectMovieHandler={selectMovieHandler}></Row>
    </div>
    </div>

    </div>
  );
}

export default App;
