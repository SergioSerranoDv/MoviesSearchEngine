/** @format */
import { useState } from 'react'
import { searchMovies } from '../services/movies'
import { useRef } from 'react'
export default function UseMovies(search: string) {
  const [movies, setMovies] = useState<any>([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const inputRef: any = useRef(search)
  const getMovies = async () => {
    try {
      if (inputRef.current === search) return
      setLoading(true)
      inputRef.current = search
      const newMovies = await searchMovies(search)
      setMovies(newMovies)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }
  return { movies, getMovies, loading, error }
}
