import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

 const View = ({books,deleteBook}) => {
    let im= console.log(books);
    return books.map(book=>(
        <tr key={book.isbn}>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td className='delete-btn' onClick={()=>deleteBook(book.isbn)}>
                <Icon className='text-danger' icon={trash}/>
            </td>           
        </tr>            
    
))
}

export default View