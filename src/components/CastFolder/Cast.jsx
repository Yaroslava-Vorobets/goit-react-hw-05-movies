import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { getCastMovie } from 'Api';
// import { Loader } from 'components/Loader/Loader.jsx'
// import { toast } from 'react-toastify';
import { List, Image, Info, Item } from '../CastFolder/Cast.Styled'

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    // const [loading, setLoading] = useState(false);

    useEffect(() => { 

       getCastMovie(movieId)
           .then(({cast}) => {
               setCast(cast)        
           })
       
    },[movieId])

    // if (cast.length === 0) {
    
    //     return toast( `We don't have any reviews for this movie`)
    // } 
    return (
        < List> 
            {cast.length > 0 && cast.map(({ profile_path, id, original_title, name, character }) => {
                return (
                    < Item key={id}>
                        < Image  src={profile_path
                            ?`https://image.tmdb.org/t/p/w500/${profile_path}`
                            :`https://image.tmdb.org/t/p/w500/`} alt={original_title} />
                        <Info>{name}</Info>
                        <Info>character: {character}</Info>
                    </ Item>);   
                    })}         
        </ List>
    )
}