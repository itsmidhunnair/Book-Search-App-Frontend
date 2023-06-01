import { gql } from '@apollo/client';

const searchBookQuery = gql`
  query fetchSearchedBooks($input: BooksInput) {
    books(input: $input) {
      id
      volumeInfo {
        title
        description
        publisher
        averageRating
        publishedDate
        ratingsCount
        imageLinks {
          thumbnail
        }
      }
    }
  }
`;

const getBook = gql`
  query fetchSearchedBooks($id: ID!) {
    book(id: $id) {
      id
      volumeInfo {
        title
        description
        publisher
        authors
        publishedDate
        pageCount
        averageRating
        ratingsCount
        imageLinks {
          small
          thumbnail
        }
      }
      saleInfo {
        listPrice {
          amount
          currencyCode
        }
      }
    }
  }
`;

export { getBook, searchBookQuery };
