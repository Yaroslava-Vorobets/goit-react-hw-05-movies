import { React, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import{Cast} from '../CastFolder/Cast';
// import {Reviews }from '../ReviewsFolder/Reviews';
//import NotFound from 'pages/NotFound';
import {SharedLayout} from '../SharedLayoutFolder/SharedLayout';
import { GlobalStyle } from 'GlobalStyles';
//import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
//import { Container, Header, Link } from '../AppFolder/App.Styled';
const Home = lazy(() => import('pages/HomeFolder/Home.jsx'));
const Movies = lazy(() => import('pages/MovieFolder/Movie'));
const MovieDetails = lazy(() => import('pages/MovieDetailsFolder/MovieDetails'));
const Cast = lazy(() => import('../CastFolder/Cast'));
const Reviews = lazy(() => import('../ReviewsFolder/Reviews'));


       export const App = () => {
         return (
          <>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:id" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
          <GlobalStyle />
        </>
)};
 


//  <Container>
//           //       <Header>
//           //         <nav>
//           //         <Link to="/">Home</Link>
//           //         <Link to="/movies">Movies</Link>
//           //         </nav>
//           //       </Header>
//           //       <Routes>
//           //         <Route path="/" element={<Home/>} />
//           //         <Route path="/movies" element={<Movies/>} />
//           //         <Route path="/movies/:movieId" element={<MovieDetails />}>
//           //           <Route path="cast" element={<Cast/>}/>
//           //           <Route path="reviews" element={<Reviews/>}/>
//           //         </Route>
//           //       <Route path="*" element={<NotFound />} />
//           //       </Routes>
//           //       <GlobalStyle />
//           //       <ToastContainer autoClose={2000} />
//           //     </Container>

// import { GlobalStyle } from 'GlobalStyles';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
// import { Container, Header, Link } from '../AppFolder/App.Styled';

     <>
          {/* <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="movies:movieId" element={<MovieDetails />}>
                  <Route path="cast" element={<Cast/>}/>
                  <Route path="reviews" element={<Reviews/>}/>
              </Route>
              <Route path="*" element={<NotFound />} />
          </Route>                 
             </Routes> */}
          </>
 

  

 
