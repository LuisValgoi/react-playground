import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Comment from '../components/Comment';

function Comments({ data, setData }) {
  const handleOnDeletePress = _index => {
    const castedData = data.filter((comment, index) => index !== _index);
    setData(castedData);
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
        return <Comment key={index} index={index} comment={comment} handleOnDeletePress={handleOnDeletePress} />
      })}
    </Container>
  );
}

export default Comments;