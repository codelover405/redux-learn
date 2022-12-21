import React, { useState, useEffect } from 'react'
// import { View } from "./View";
import  View  from "./View";

// import { useParams } from "react-router-dom";



const getDatafromLS = () => {
  const data = localStorage.getItem('books');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

const BookList  = () => {
  // main array of objects state || books state || books array of objects
  const [books, setbooks] = useState(getDatafromLS());

  // input field states
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');



  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let book = {
      title,
      author,
      isbn,
    }
    setbooks([...books, book]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  }

  // delete book from LS
  const deleteBook = (isbn) => {
    const filteredBooks = books.filter((element, index) => {
      return element.isbn !== isbn
    })
    setbooks(filteredBooks);
  }

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books])



  return (
    <>
      <div className='row m-0'>
        <h1>BookList App</h1>
        <p>Add and view your books using local storage</p>
        <div className="wrapper">
        <div className='main d-flex'>
          <div className='form-container col-md-6'>
            <form autoComplete="off" className='form-group'
              onSubmit={handleAddBookSubmit}>
              <label>Title</label>
              <input type="text" className='form-control' required
                onChange={(e) => setTitle(e.target.value)} value={title}></input>
              <br></br>
              <label>Author</label>
              <input type="text" className='form-control' required
                onChange={(e) => setAuthor(e.target.value)} value={author}></input>
              <br></br>
              <label>Your Review</label>
              <textarea type="text" className='form-control' required
                onChange={(e) => setIsbn(e.target.value)} rows={4} value={isbn}></textarea>
              <br></br>
              <button type="submit" className='btn btn-success btn-md'>
                ADD
              </button>
            </form>
          </div>

          <div className='view-container mx-4 col-md-5'>
            {books.length > 0 && <>
              <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Your Review</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View books={books} deleteBook={deleteBook} />
                  </tbody>
                </table>
              </div>
              <button className='btn btn-danger btn-md'
                onClick={() => setbooks([])}>Remove All</button>
            </>}
            {books.length < 1 && <div>No books are added yet</div>}
          </div>

        </div>
        </div>
      </div>
    </>
  )
}

//  data store in localStorage and fetch webpage


export default BookList 
