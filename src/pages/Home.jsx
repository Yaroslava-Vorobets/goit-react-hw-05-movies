import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link} from "components/AppFolder/App.Styled";
import { getTrendingMovies } from '../Api';
import { ImageItem} from './Movies';

const Home = () => {    
    const [moviesList, setMoviesList] = useState([]);  
    const location = useLocation();

    useEffect(() => {
        getTrendingMovies()  
        .then(({ results }) => {
                setMoviesList(results)
            })    
        
        .catch(error => {
              console.log(error);})
  }, [moviesList]);  

      return (
            <main>
              <h1>Trending today</h1>
               <ul>
              {moviesList.length > 0 && (
                 <>
                  {moviesList.map(({ id, title }) => {              
                    return <ImageItem key={id}>
                            <Link to={`/movies/${id}`} state= {{from: location}}>
                                {title}
                             </Link>                        
                        </ImageItem>
                    })}
             </> )}
                </ul> 
            </main>
        )
}
 
export default Home