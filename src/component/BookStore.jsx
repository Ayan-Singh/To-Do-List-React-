

function BookStore({ books }) {
    return (
        <ul>
            {books.map((book) => (
                <Book key={book.id} {...book} />
            ))}
        </ul>
    );
}

export default BookStore;