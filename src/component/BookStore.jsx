import Book from "./Book";

function BookStore({ books }) {
    return (
        <ul>
            {books.map((book) => (
                <Book key={book.id} {...book} />  // Spreading each book object
            ))}
        </ul>
    );
}

export default BookStore