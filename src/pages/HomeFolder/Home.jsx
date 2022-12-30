import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader.jsx'
import { toast } from 'react-toastify';
import { getTrendingMovies } from '../../Api';
import {ImageItem, Image,  MovieTitle, Lists, Link } from './Home';

const Home = () => {    
    const [moviesList, setMoviesList] = useState([]);  
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true)
        getTrendingMovies()  
        .then(({ results }) => {
                setMoviesList(results)
            })       
        .catch(error => {
            toast.error('Something went wrong! Please retry!');
        })
        .finally(setLoading(false))
  }, [moviesList]);  

      return (
            <main>
                <MovieTitle>Trending today</MovieTitle>
                {moviesList &&  <Lists>                
                    {moviesList.map(({ id, title, poster_path }) => {              
                        return <ImageItem key={id}>
                            <Link to={`/movies/${id}`} state={{ from: location }}>
                                <Image src={poster_path
                                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                                : 'https://image.tmdb.org/t/p/w500/'} alt={title} />
                            < MovieTitle>{title}</ MovieTitle> 
                            </Link>                        
                            </ImageItem>
                        })}             
                </Lists>}
                {loading && <Loader/>} 
            </main>
        )
}
 
export default Home;