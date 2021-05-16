import { createContext, useReducer, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import BookReducer from '../reducer/BookReducer'


export const BookContext = createContext()

const BookContextProvider = (props) => {


  const [bookList, dispatch] = useReducer(BookReducer, [
    { author: '李娟', name: '走夜路请放声歌唱', id: uuidv4() },
    { author: '三毛', name: '雨季不再来', id: uuidv4() },
  ], () => {
    const bookListStorage = localStorage.getItem('bookList')
    return bookListStorage ? JSON.parse(bookListStorage) : []
  })

  useEffect(() => {
    localStorage.setItem('bookList', JSON.stringify(bookList))
  })


  return (
    <BookContext.Provider value={{ bookList, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider