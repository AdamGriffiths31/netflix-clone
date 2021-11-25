import axios from './axios';

const API_KEY="0e7e25bdb51213aa835156cabad7e080";

export const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS'
export const FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS'
export const FETCH_MOVIE_DETAILS_FAIL = 'FETCH_MOVIE_DETAILS_FAIL'
export const FETCH_TRENDING = 'FETCH_TRENDING'
export const FETCH_NETFLIX_ORIGINALS = 'FETCH_NETFLIX_ORIGINALS'
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED'
export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES'
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES'
export const FETCH_HORROR_MOVIES = 'FETCH_HORROR_MOVIES'
export const FETCH_ROMANCE_MOVIES = 'FETCH_ROMANCE_MOVIES'
export const FETCH_DOCUMENTARIES = 'FETCH_DOCUMENTARIES'

export const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}


export const fetchNetflixOriginalsData = () => {
    return async (dispatch) => {
        const request = await axios.get(requests.fetchNetflixOriginals);
        dispatch({ type: FETCH_NETFLIX_ORIGINALS, payload: request })
    } 
}
export const fetchActionMoviesData = () => {
    return async (dispatch) => {
        const request = await axios.get(requests.fetchActionMovies);
        dispatch({ type: FETCH_ACTION_MOVIES, payload: request })
    } 
}
export const fetchTopRatedData = () => {
    return async (dispatch) => {
        const request = await axios.get(requests.fetchTopRated);
        dispatch({ type: FETCH_TOP_RATED, payload: request })
    } 
}
export const fetchTrendingData = () => {
    return async (dispatch) => {
        const request = await axios.get(requests.fetchTrending);
        dispatch({ type: FETCH_TRENDING, payload: request })
    } 
}
export const fetchComedyMoviesData = () => {
    return async (dispatch) => {
        const request = await axios.get(requests.fetchComedyMovies);
        dispatch({ type: FETCH_COMEDY_MOVIES, payload: request })
    } 
}
export const fetchHorrorMoviesData = () => {
    return async (dispatch) => {
        const request = await axios.get(requests.fetchHorrorMovies);
        dispatch({ type: FETCH_HORROR_MOVIES, payload: request })
    } 
}
export const fetchRomanceMoviesData = () => {
    return async (dispatch) => {
        const request = await axios.get(requests.fetchRomanceMovies);
        dispatch({ type: FETCH_ROMANCE_MOVIES, payload: request })
    } 
}
export const fetchDocumentariesMoviesData = () => {
    return async (dispatch) => {
        const request = await axios.get(requests.fetchDocumentariesMovies);
        dispatch({ type: FETCH_DOCUMENTARIES, payload: request })
    } 
}
export const fetchMovieDetailsData = ( mediaId) => {
    return async (dispatch) => {
      try {
        dispatch({ type: FETCH_MOVIE_DETAILS })
        const request = await axios.get(`/movie/${mediaId}?api_key=${API_KEY}`);
        console.log(request)
        dispatch({ type: FETCH_MOVIE_DETAILS_SUCCESS, payload: request })
      } catch (error) {
        console.log('error', error)
        dispatch({ type: FETCH_MOVIE_DETAILS_FAIL })
      }
    }
  }

