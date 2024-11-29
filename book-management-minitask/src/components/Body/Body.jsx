import React, { useState } from 'react'
import './Body.css'
import BookCard from '../BookCard/BookCard'

const Body = ({books}) => {
    
  return (
    <div className='body'>
      {books.length > 0 ? (
        books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))
      ) : (
        <p>No books found</p>
      )}
    </div>
  )
}

export default Body