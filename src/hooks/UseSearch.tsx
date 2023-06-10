/** @format */

import { useState, useEffect, useRef } from 'react'
export default function UseSearch() {
  const [search, setSearch]: any = useState('')
  const [errorSearch, setErrorSearch]: any = useState(null)
  const isFirstSearch = useRef(true)
  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = search === ''
      return
    }
    if (search === '') {
      setErrorSearch('The field cannot be empty')
      return
    }
    if (search.length < 3) {
      setErrorSearch('The field must be at least 3 characters')
      return
    }
    setErrorSearch(null)
  }, [search])
  return { search, setSearch, errorSearch }
}
