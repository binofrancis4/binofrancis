import React,{useEffect,useState } from 'react'

import MovieCard from './MovieCard';

import './App.css';

import searchIcon from './search.svg'
//1ccb431a


const API_URL = 'http://www.omdbapi.com?apikey=1ccb431a'

const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {
  const [movies,setMovie]=useState([])
  const [searchTerm,setSearchTerm] = useState('')

const searchmovies = async (title) => {
   const response = await fetch(`${API_URL}&s=${title}`)

    const data = await response.json()

    setMovie(data.Search)
    // console.log(data.Search)
}

  useEffect(() => {
    searchmovies('spiderman')
  },[])
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='Search for the movies'
          value={searchTerm}
          onChange={(e)=>{setSearchTerm(e.target.value)}}
          
        />
        <img  src={searchIcon}
        alt="search"
        value={searchTerm}
        onClick={(e)=>{searchTerm === '' ?
          searchmovies('spiderman')
        :searchmovies(searchTerm)}}
        />
      </div>
      {
        movies?.length > 0 ? (<div className='container'>
          {movies.map((movie) => (
              <MovieCard movie={movie}/>
          ))}
        
      </div>) : (
        <div className='empty'>
            <h2>No Movies found</h2>
        </div>
      )
      }
      

    </div>
  )
}

export default App