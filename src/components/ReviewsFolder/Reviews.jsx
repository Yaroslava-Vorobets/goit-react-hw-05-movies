import {useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { getReviews } from 'Api';
// import { toast } from 'react-toastify';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const {movieId} = useParams ();

  useEffect(() => {
    getReviews(movieId)
      .then(({results}) => {
        setReviews(results)       
    })
  }, [movieId])
  
 
 
  return (
    <ul>
      {reviews.length > 0 ?
        reviews.map(({ id, author, content }) => {
        return (
        <li key={id}>
          <p>author: {author}</p>
            <p>content: {content}</p>            
        </li>)
      }):  `We don't have any reviews for this movie`}    
   </ul>)
};

export default  Reviews
