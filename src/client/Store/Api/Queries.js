import gql from 'graphql-tag';

export const queryBooks = gql`
  query {
    books {
      title
      author
    }
  }
`;

export const addBook = gql`
  mutation AddBook($title: String! $author: String!) {
    addBook(title: $title author: $author) {
      title
      author
    }
  }
`;
