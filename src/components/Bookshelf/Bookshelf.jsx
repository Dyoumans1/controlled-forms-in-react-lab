import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        {title: 'It', author: 'Stephen King' },
        {title: 'The Eye of The World', author: 'Robert Jordan' },
        {title: 'The Stand', author: 'Stephen King' },
        {title: 'How to Win Friends and Influence People', author: 'Dale Carnegie' },
        {title: 'Pet Sematary', author: 'Stephen King' },
    ]);

    const [newBook, setNewBook] = useState ({
        title: '',
        author: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook({ ...newBook, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({title: '', author: '' })
    }
return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form will go here */}
    <form onSubmit={handleSubmit}>
        <div>
            <label>Title:</label>
            <input type="text" name='title' value={newBook.title} onChange={handleInputChange} />
        </div>
        <div>
            <label>Author:</label>
            <input type='text' name='author' value={newBook.author} onChange={handleInputChange} />
        </div>
        <button type='submit'>Add Book</button>
    </form>
  </div>
  <div className="bookCardsDiv">
    {/* Book cards will display here */}
    {books.map((book, index) => (
        <div key={index} className='bookCard'>
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
        </div>
    ))}
    </div>
</div>
);
};

export default Bookshelf;