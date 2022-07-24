import React from 'react';
import { Container, Card, CardColumns, Figure } from 'react-bootstrap';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_FILM_ADAPTATIONS } from '../utils/queries';

const TestBookFilms = () => {
  const { loading, data } = useQuery(QUERY_FILM_ADAPTATIONS);
  const bookFilms = data?.bookFilms || [];

  return (
    <React.Fragment>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <h2>
            {bookFilms.length
              ? `Viewing ${bookFilms.length} film adaptations:`
              : 'Please seed the test first.'}
          </h2>
          {bookFilms.length ? (
            <Figure>
              <Figure.Caption>
                This is a <b>demo</b>. In a future version, we'll have film
                adaptations for all Google books and links to purchase their
                Google Play movie:
              </Figure.Caption>
            </Figure>
          ) : (
            ''
          )}
          <CardColumns>
            {bookFilms.map((bookFilm, itrIndex) => {
              return (
                <Card key={itrIndex} border='dark'>
                  <Card.Body>
                    <Card.Title>{bookFilm.book}</Card.Title>
                    <Card.Text>Film Adaptation: {bookFilm.film}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      )}
    </React.Fragment>
  );
};

export default TestBookFilms;
