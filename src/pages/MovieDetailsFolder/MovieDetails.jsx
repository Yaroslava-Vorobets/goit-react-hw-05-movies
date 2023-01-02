import {Link,Outlet, useParams, useLocation } from "react-router-dom";
import { getMoviedetails } from '../../Api';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader.jsx';
import { toast } from 'react-toastify';
import { Suspense } from "react";
import {Main, Card, Wrap, BackButton, Image,List, MovieTitle, SecondaryTitle } from './MovieDetails.Styled';

    const MovieDetails = () => {
    const [results, setResults] = useState({});
    const {movieId} = useParams();
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    

        useEffect(() => {
            setLoading(true);
            getMoviedetails(movieId)
                .then((results) => {
                    setResults(results)
                })
                .catch(error => {
                    toast.error('Something went wrong! Please retry!');
                })
                .finally(setLoading(false));
   
  
    }, [movieId]);  
        
    const {id, original_title, poster_path, vote_average, genres, overview } = results;    
    const score = (vote_average * 100) / 10;
    const BackLink = location.state?.from ?? '/movies';
 
    return (
        <Main>  
            <Link to={BackLink}> <BackButton>go back</BackButton> </Link>        
            <Card key={id}>               
                <Wrap><Image src={poster_path ?
                    `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : 'https://image.tmdb.org/t/p/w500/'} alt={original_title} />                   
                </Wrap>
                <Wrap>
                    <MovieTitle>{original_title}</MovieTitle>
                    <SecondaryTitle>User score: {score.toFixed()}%</SecondaryTitle>
                    <SecondaryTitle>Overview</SecondaryTitle>
                        <p>{overview }</p>
                    <SecondaryTitle>
                            Genres:{' '}
                        <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
                    </SecondaryTitle> 
                </Wrap>      
            </Card>
            <div>
                <List> Aditional information :        
                    <Link to={'Cast'} state={{from:location.state.from}}><li>Cast</li></Link>  
                    <Link to={'Reviews'} state={{from:location.state.from}}><li>Reviews</li></Link>
                </List>
                  <Suspense fallback={<Loader />}>
                        <Outlet />
                </Suspense> 
            </div>
           {loading && <Loader />}
        </Main>

    )
}

export default MovieDetails