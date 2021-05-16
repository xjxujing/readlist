import { useState, useContext } from 'react'
import { BookContext } from '../context/BookContext'


const BookForm = () => {
  const [author, setAuthor] = useState('')
  const [name, setName] = useState('')

  const {dispatch} = useContext(BookContext)

  const submitForm = (e) => {
    e.preventDefault()
    dispatch({type: 'ADD_BOOK',book: {author, name}})
    setName('')
    setAuthor('')
  }

  return (
    <form onSubmit={submitForm}>
      <label>书名</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>

      <label>作者</label>
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>

      <input type="submit" value="添加"></input>
    </form>
  )
}


export default BookForm