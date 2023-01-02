import {useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { getReviews } from 'Api';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader.jsx';
import { List,Info, Item } from '../CastFolder/Cast.Styled'

const Reviews = () => {
const [reviews, setReviews] = useState([]);
const {movieId } = useParams();
const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); 
    getReviews(movieId)
      .then(({ results }) => {
        setReviews(results)      
      })
      .catch(error => {
        toast.error('Something went wrong! Please retry!')
      })
    .finally( setLoading(false))
  }, [movieId])
  
 
 
  return (
  <>
      {reviews.length > 0 ? 
        (<List>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <Info>author: {author}</Info>
              <Info>content: {content}</Info>
            </Item>))}
        </List>) : (`We don't have any reviews for this movie`)}
    { loading && <Loader /> }
  </>
  )
  
}

export default  Reviews
