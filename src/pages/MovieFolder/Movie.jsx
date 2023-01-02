import { Outlet,  useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { Suspense } from "react";
import { getMovies } from '../../Api'
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader.jsx'
import {SearchForm, SearchButton, SearchFormInput, Image, ImageItem,  MovieTitle, Lists, Link } from './Movies';
import 'react-toastify/dist/ReactToastify.min.css';


    const Movies = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const filterQuery = searchParams.get("filterQuery") ?? "";
  

        useEffect(() => {  
        if (filterQuery === '') {            
            return
        }      
        setLoading(true);
        getMovies(filterQuery)
            .then(({ results }) => {
                if (results.length < 0) {
                    toast.error(`Sorry! We couldn't find yuor request, please try again`)
                    return
                }
                setMovies(results)
            })              
                .catch(error => {
                     toast('Something went wrong! Please retry!');
                })
                .finally( setLoading(false))
      
  }, [filterQuery]);  


    const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams( { filterQuery: form.elements.filterQuery.value.trim()  }) 
    form.reset();
     
           
    };
         
 
    return (
        <main>
            <SearchForm onSubmit={handleSubmit}>        
                <SearchFormInput  type="text"  name="filterQuery" />
                < SearchButton  type='submit' >search</ SearchButton >
          </SearchForm>      
                <Lists>
                    {movies.map(({ title, id, poster_path, original_title}) => (              
                        <ImageItem key={id}>
                            <Link to={`/movies/${id}`} state= {{from: location}}> 
                                <Image src={poster_path
                                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                                    : 'https://image.tmdb.org/t/p/w500/'} alt={original_title} />
                                < MovieTitle>{title}</ MovieTitle>   
                            </Link>                                       
                        </ImageItem>                  
                                ))}             
                        </Lists>            
                <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense> 
          {loading && <Loader/>} 
       </main>
        
    );
}
export default Movies;

