import { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const BookList = () => {

  const { bookList, removeBook } = useContext(BookContext)

  return (
    bookList.length ? (
      <ul>
        {bookList.map(book => {
          return (
            <li 
              className='book-item'
              onClick={() => removeBook(book.id)}
              style={{ cursor: 'pointer' }}
              key={book.id}>
              书名：{book.name}，作者：{book.author}
            </li>
          )
        })}
      </ul>
    ) : '没有数据'
  )

}

export default BookList