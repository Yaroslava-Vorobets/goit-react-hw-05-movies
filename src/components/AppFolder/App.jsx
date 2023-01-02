import { React, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import {SharedLayout} from '../SharedLayoutFolder/SharedLayout';
import { GlobalStyle } from 'GlobalStyles';
import 'react-toastify/dist/ReactToastify.min.css';
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
              <Route path="/movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
          <GlobalStyle />
        </>
)};
 



 

  

 
