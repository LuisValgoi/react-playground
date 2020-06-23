import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const INITIAL_STATE = {
  author: '',
  comment: ''
};

function FormComment({ data, setData }) {
  const [form, setForm] = useState(INITIAL_STATE);

  const handleOnClickPress = () => {
    if (form.author === '') {
      return;
    }

    const copy = Object.assign([], data);
    copy.push(form);
    setData(copy);
    setForm(INITIAL_STATE)
  };

  const handleOnFormInputChange = (e, key) => {
    setForm({
      ...form,
      [key]: e.target.value
    })
  };

  return (
    <Container>
      <Row>
        <h1 className="float-left">Form</h1>
      </Row>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="Type your name here..." value={form.author} onChange={(e) => handleOnFormInputChange(e, 'author')} />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">...</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="Type your comment here" value={form.comment} onChange={(e) => handleOnFormInputChange(e, 'comment')} />
        <Button className="ml-3" onClick={handleOnClickPress}>Add</Button>
      </InputGroup>
    </Container>
  );
}

export default FormComment;