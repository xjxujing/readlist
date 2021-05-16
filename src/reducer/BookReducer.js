import { v4 as uuidv4 } from 'uuid'

const BookReducer = (state, action) => {

  if(action.type === 'ADD_BOOK') {
    return [
      ...state,
      {author: action.book.author, name: action.book.name, id: uuidv4()},
    ]
  }
  if(action.type === 'REMOVE_BOOK') {
    return state.filter(book => book.id !== action.book.id)
  }
}

export default BookReducer