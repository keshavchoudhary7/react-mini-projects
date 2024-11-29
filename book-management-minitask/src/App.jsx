import { useState } from 'react'
import './App.css'
import { books } from './utils/utils'
import SearchBar from './components/SearchBar/SearchBar'
import Body from './components/Body/Body'

function App() {
  const [filteredBooks,setFilteredBooks] = useState(books);

  const handleSearch = (searchText) => {
    
    if(searchText.trim()===''){
      setFilteredBooks(books)
      return
    }else{
      const filtered= books.filter((book)=>{
        return book.author.toLowerCase().includes(searchText.toLowerCase())
      })
      setFilteredBooks(filtered)
    }
      
  }

  return (
    <div className='app'>
      <h1>Book Management System</h1>
      <SearchBar onSearch={handleSearch} />
      <Body books={filteredBooks} />
    </div>
  )
}

export default App


