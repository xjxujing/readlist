
import { useContext } from 'react'
import { BookContext } from '../context/BookContext'


const Navbar = () => {

  const { bookList } = useContext(BookContext)

  return (
    <>
      <h1>Summer 的阅读清单</h1>

      <p>当前待阅读的有 {bookList.length} 本</p>
    </>
  )

}

export default Navbar