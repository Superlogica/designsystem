import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Button from './components/Button/Button';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teste: 'teste'
    };
  }

  handleChange = (event) => {
    let id = event.target.id;
  }

  handleSubmit = () =>{
    console.log(this.state);
     
  }

render(){    
    return (
      <Container>
        <div className="App">
            <p>
              <Button bgColor="pink900" onClick={this.handleSubmit}>Enviar</Button>
            </p>
            <p>
              Decimal: { this.props.decimalColor }
            </p>
        </div>
      </Container>
    );
  }
}

export default App;