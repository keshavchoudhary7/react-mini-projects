import React from 'react'
import './BookCard.css'


const BookCard = ({book}) => {
    
  return (
    <div className='BookCard'>
        <img src={book.url} alt="" 
        height='300px'
        width='200px'
        />
        <h2>{book.author}</h2>
      
        <p>{book.description}</p>
    </div>
  )
}

export default BookCard;