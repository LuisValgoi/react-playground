import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function Comment({ index, comment, handleOnDeletePress }) {
  const handleFormatComment = (comment) => {
    return comment && comment.trim() !== '' ? comment : 'N/A';
  };

  return (
    <Card className='mb-3'>
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
}

export default Comment;