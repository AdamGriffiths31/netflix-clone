import { combineReducers } from 'redux'
import NetflixOriginalsReducer from './reducerNetflixOriginals'
import ActionMoviesReducer from './reducerActionMovies'
import ComedyMoviesReducer from './reducerComedyMovies'
import HorrorMoviesReducer from './reducerHorrorMovies'
import DocumentaryReducer from './reducerDocumentary'
import TrendingReducer from './reducerTrending'
import TopRatedReducer from './reducerTopRated'
import RomanceMoviesReducer from './reducerRomanceMovies'
import MovieDetailsReducer from './reducerMovieDetails'



const rootReducer = combineReducers({
  netflixOriginals: NetflixOriginalsReducer,
  action: ActionMoviesReducer,
  comedy: ComedyMoviesReducer,
  horror: HorrorMoviesReducer,
  documentary: DocumentaryReducer,
  trending: TrendingReducer,
  topRated: TopRatedReducer,
  romance: RomanceMoviesReducer,
  movieDetails: MovieDetailsReducer,

})

export default rootReducer
