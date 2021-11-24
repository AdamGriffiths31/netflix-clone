import './App.css';
import Row from './Row'
import requests from './requests';
import Banner from './Banner';

const App = ({ selectMovieHandler }) => {
  return (
    <div className="app">

     <Banner/>
     <div className='container'>
      <div className='movieShowcase'>
     <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow selectMovieHandler={selectMovieHandler}></Row>
     {/* <Row title="Trending Now" fetchUrl={requests.fetchTrending} ></Row>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} ></Row>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} ></Row>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} ></Row>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} ></Row>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} ></Row>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} ></Row> */}
    </div>
    </div>

    </div>
  );
}

export default App;
