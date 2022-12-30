import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import{Cast} from '../CastFolder/Cast';
import {Reviews }from '../ReviewsFolder/Reviews';
import NotFound from 'pages/NotFound';
import {SharedLayout} from '../SharedLayoutFolder/SharedLayout';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movie'));
const MovieDetails = lazy(() => import('pages/MovieDetailsFolder/MovieDetails'));

export const App = () => {
  return (
     <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
        <Route path="movies:movieId" element={<MovieDetails />}>          
            <Route path="cast" element={<Cast/>}/> 
            <Route path="reviews" element={<Reviews/>}/>
         </Route>        
      </Route>      
  </Routes>
  );
};




// import { GlobalStyle } from 'GlobalStyles';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
// import { Container, Header, Link } from '../AppFolder/App.Styled';


//   export const App = () => {
//   return (
//     <Container>
//         <Header>
//           <nav>
//           <Link to="/">Home</Link>
//           <Link to="/movies">Movies</Link>         
//           </nav>
//         </Header>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/movies" element={<Movies/>} />
//           <Route path="/movies/:movieId" element={<MovieDetails />}>
//             <Route path="cast" element={<Cast/>}/> 
//             <Route path="reviews" element={<Reviews/>}/>
//           </Route> 
//          <Route path="*" element={<NotFound />} />
//         </Routes>
//          <GlobalStyle />
//          <ToastContainer autoClose={2000} />
//        </Container>
//   );
// };