import React from 'react';
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from 'react-bootstrap';

import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';

const SavedBooks = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || { savedBooks: [] };
  const [removeBook_mutator] = useMutation(REMOVE_BOOK);
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    try {
      const response = await removeBook_mutator({
        variables: { bookId },
      });

      if (!response.data) {
        throw new Error('something went wrong!');
      }
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  const visitLink = (link) => {
    window.location.href = link;
  };

  return (
    <React.Fragment>
      {loading ? (
        <div>LOADING...</div>
      ) : (
        <React.Fragment>
          <Jumbotron fluid className='text-light bg-dark'>
            <Container>
              <h1>Viewing saved books!</h1>
            </Container>
          </Jumbotron>
          <Container>
            <h2>
              {userData.savedBooks.length
                ? `Viewing ${userData.username}'s saved ${
                    userData.savedBooks.length === 1 ? 'book' : 'books'
                  }:`
                : 'You have no saved books!'}
            </h2>
            <CardColumns>
              {userData.savedBooks.map((book) => {
                return (
                  <Card key={book.bookId} border='dark'>
                    {book.image ? (
                      <Card.Img
                        className='clickable'
                        src={book.image}
                        alt={`The cover for ${book.title}`}
                        variant='top'
                        onClick={() => visitLink(book.link)}
                      />
                    ) : null}
                    <Card.Body>
                      <Card.Title
                        className='clickable'
                        onClick={() => visitLink(book.link)}
                      >
                        {book.title}
                      </Card.Title>
                      <p className='small'>Authors: {book.authors}</p>
                      <Card.Text>{book.description}</Card.Text>
                      <Button
                        className='btn-block btn-danger'
                        onClick={() => handleDeleteBook(book.bookId)}
                      >
                        Delete this Book!
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </CardColumns>
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default SavedBooks;
