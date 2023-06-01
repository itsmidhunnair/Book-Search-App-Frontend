const filterPublisher = (books, publisher) => {
    return (books.filter((book)=>book.volumeInfo?.publisher === publisher))
};

export { filterPublisher };
