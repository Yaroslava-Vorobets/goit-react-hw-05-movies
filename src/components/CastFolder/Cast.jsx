import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { getCastMovie } from 'Api';
import { Loader } from 'components/Loader/Loader.jsx'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { List, Image, Info, Item } from '../CastFolder/Cast.Styled'

 const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
    setLoading(true);  
       getCastMovie(movieId)
        .then(({cast}) => {
               setCast(cast)        
           })
        .catch(error => {
            toast.error('Something went wrong! Please retry!');
                })
        .finally( setLoading(false))
       
    },[movieId])

    
     return (
        <>
       {cast && < List> 
            {cast.map(({ profile_path, id, original_title, name, character }) => {
                return (
                    < Item key={id}>
                        < Image  src={profile_path
                            ?`https://image.tmdb.org/t/p/w500/${profile_path}`
                            :`https://image.tmdb.org/t/p/w500/`} alt={original_title} />
                        <Info>{name}</Info>
                        <Info>character: {character}</Info>
                    </ Item>);   
                    })}         
        </ List>}
         { loading && <Loader /> }
     </>
    )
}

export default Cast