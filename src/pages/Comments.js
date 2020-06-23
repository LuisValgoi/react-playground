import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

function Comments({ data, setData }) {
  const handleOnDeletePress = _index => {
    const castedData = data.filter((comment, index) => index !== _index);
    setData(castedData);
  };

  const handleFormatComment = (comment) => {
    return comment && comment.trim() !== '' ? comment : 'N/A';
  };

  return (
    <Container fluid="md">
      <Row>
        <h1 fluid="md">Comments</h1>
      </Row>

      {data.length === 0 && (
        <Alert variant='info'>There is no comment yet</Alert>
      )}

      {data.map((comment, index) => {
        return (
          <Card key={index} className='mb-3'>
            <Card.Body>
              <Button className="float-right" onClick={() => handleOnDeletePress(index)} variant="link">Delete</Button>
              <Row className="justify-content-md-start">
                <Card.Title>Author: {comment.author}</Card.Title>
              </Row>
              <Row>
                <Card.Text>Comment: {handleFormatComment(comment.comment)}</Card.Text>
              </Row>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}

export default Comments;