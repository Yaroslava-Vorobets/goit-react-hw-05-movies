import {Link,Outlet, useParams, useLocation } from "react-router-dom";
import { getMoviedetails } from '../../Api';
import { useState, useEffect } from 'react';
import {Main, Card, Wrap, BackButton, Image, MovieTitle, SecondaryTitle } from './MovieDetails.Styled';



    const MovieDetails = () => {
    const [results, setResults] = useState({});
    const { movieId } = useParams();
    const location = useLocation();
    

    useEffect(() => {
        getMoviedetails(movieId)
            .then((results) => {
                setResults(results)
            })      
   
  
    }, [movieId]);    
    
    if (!MovieDetails) {
        return null
    }

    const BackLink = location.state?.from ?? '/movies';
    //  const genres = [];
    return (
        <Main>  
            <Link to={BackLink}> <BackButton>go back</BackButton> </Link>        
            <Card key={results.id}>          
              
                <Wrap><Image src={results.poster_path ?
                    `https://image.tmdb.org/t/p/w500/${results.poster_path}`
                    : `https://image.tmdb.org/t/p/w500/`} alt={results.original_title} />
                </Wrap>
                <Wrap>
                    <MovieTitle>{results.original_title}</MovieTitle>
                    <SecondaryTitle>User score: {results.vote_count}</SecondaryTitle>
                    <SecondaryTitle>Overview</SecondaryTitle>
                        <p>{results.overview }</p>
                    <SecondaryTitle>Genres:</SecondaryTitle> 
                    {/* {results.genres.map(genres => (<p>{genres.name}</p>))}                   */}
                </Wrap>      
            </Card>
            <div>
                <ul> Aditional information         
                    <Link to={'Cast'} state={{from:location.state.from}}><li>Cast</li></Link>  
                    <Link to={'Reviews'} state={{from:location.state.from}}><li>Reviews</li></Link>
                </ul>
                  <Outlet />
            </div>
          
        </Main>

    )
}

export default MovieDetails