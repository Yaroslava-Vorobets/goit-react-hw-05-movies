
export function  getTrendingMovies(){
return  fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=ebb8165ea943e33fa7a8dadcac1ff998` )
     .then(res => {
          if (res.ok) {
            return res.json()
          };
          return Promise.reject(new Error(`for this query trending nothing was found `))
        })
} 

export function getMovies(filterQuery) {
  return fetch(`http://api.themoviedb.org/3/search/movie?api_key=ebb8165ea943e33fa7a8dadcac1ff998&include_adult=false&language=en-US&page=1&query=${filterQuery}`)
 
   .then(res => {
          if (res.ok) {
            return res.json()
          };
          return Promise.reject(new Error(`for this query  nothing was found `))
        })
}

export function getMoviedetails(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ebb8165ea943e33fa7a8dadcac1ff998`) 
   .then(res => {
          if (res.ok) {
            return res.json()
          };
          return Promise.reject(new Error(`for this query  nothing was found `))
        })
}

export function getCastMovie(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=ebb8165ea943e33fa7a8dadcac1ff998&language=en-US`)
    .then(res => {
      if (res.ok) {
        return res.json()
      };
    return Promise.reject(new Error(`for this query  nothing was found `)) 
})

}

export function getReviews(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=ebb8165ea943e33fa7a8dadcac1ff998`)
     .then(res => {
          if (res.ok) {
            return res.json()         
          };
          return Promise.reject(new Error(`for this query  nothing was found `))
        })

}







