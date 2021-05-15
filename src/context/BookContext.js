import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


export const BookContext = createContext()

const BookContextProvider = (props) => {

  const [bookList, setBookList] = useState([
    { author: '李娟', name: '走夜路请放声歌唱', id: uuidv4() },
    { author: '三毛', name: '雨季不再来', id: uuidv4() },
  ])

  const addBook = (bookForm) => {
    setBookList([...bookList, {...bookForm, id: uuidv4()}])
  }

  const removeBook = (bookId) => {
    setBookList(bookList.filter(book => book.id !== bookId))
  }

  return (
    <BookContext.Provider value={{ bookList: bookList, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider