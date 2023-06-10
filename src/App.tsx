/** @format */

import UseMovies from './hooks/UseMovies'
import { ChangeEvent, FormEvent, useRef } from 'react'
import { Movies } from './components/Movies'
import './App.css'
import UseSearch from './hooks/UseSearch'

function App() {
  const inputRef: any = useRef()
  const { search, setSearch, errorSearch } = UseSearch()
  const { getMovies, movies, loading, error } = UseMovies(search)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getMovies()
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
  }

  return (
    <div className="App">
      <header className="">
        <h1>Technical test search Movies</h1>
        <form className="formSearcher" onSubmit={handleSubmit}>
          <label className="">Search any movie</label>
          <input
            /// <reference path="c" />
            type="text"
            value={search}
            onChange={handleChange}
            ref={inputRef}
            placeholder="Thor, Mario Bros, The avenger"></input>
          <button className="" type="submit">
            Search
          </button>
          <p>{errorSearch}</p>
        </form>
      </header>
      <main className="mainContainer">
        <p>{error}</p>
        {loading ? <p>loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
