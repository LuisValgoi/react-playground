import React, { useState, useEffect } from 'react';
import FormComment from './components/FormComment';
import Comments from './pages/Comments';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(data);
  }, [data, setData]);

  return (
    <div className="App">
      <FormComment data={data} setData={setData} />

      <Container>
        <div className="dropdown-divider mb-3 mt-3"></div>
      </Container>

      <Comments data={data} setData={setData} />
    </div>
  );
}

export default App;
