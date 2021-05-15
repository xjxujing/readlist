import Navbar from './components/Navbar'
import BookList from './components/BookList'
import BookForm from './components/BookForm'
import BookContextProvider from './context/BookContext'


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar></Navbar>
        <BookList></BookList>
        <BookForm></BookForm>
      </BookContextProvider>
    </div>
  );
}

export default App;
