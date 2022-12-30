import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { Suspense } from "react";
import { getMovies } from '../Api'
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader.jsx'
import {SearchForm, SearchButton, SearchFormInput, Image, ImageItem,  MovieTitle } from './Movies';
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
        } else {
            getMovies(filterQuery)
                .then(({ results }) => {
                    setMovies(results)
                })        
                .catch(error => {
                    return toast('Something went wrong! Please retry!');
                })
        }
  }, [filterQuery]);  

  
 
    // const ChangeFilterQuery = value => {
    //    setSearchParams(value !== ""? {filterQuery: value} : {})
    // }    
  

    const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);  
    const form = e.currentTarget;
    setSearchParams({ filterQuery: form.elements.filterQuery.value })
        if (filterQuery.length === '') {
            return toast('Something went wrong! Please retry!');
        } 
    setLoading(false);   
    form.reset();    
    };
         
 
    return (
        <main>
            <SearchForm onSubmit={handleSubmit}>        
                <SearchFormInput  type="text"  name="filterQuery" />
                < SearchButton  type='submit' >search</ SearchButton >
            </SearchForm>     
             {filterQuery && <ul>
            {movies.map(({ title, id, poster_path, original_title}) => (
                <Link to={`/movies/${id}`} state= {{from: location}}> 
                    <ImageItem key={id}>
                        <Image src={poster_path
                            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : `https://image.tmdb.org/t/p/w500/`} alt={original_title} />            
                        < MovieTitle>{title}</ MovieTitle>                            
                    </ImageItem>
                    {loading && <Loader/>}
                    </Link>
           ))}             
        </ul>}
             <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>  
       </main>
        
    );
}
export default Movies

