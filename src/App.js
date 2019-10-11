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
    const marginTeste = {
      marginBottom: "10px"
    }

    return (
      <Container>
        <div className="App">             
              <Row>
                <Col>
                  <Button color="jao" size="medium" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
              </Row>
            <p>
              Decimal: { this.props.decimalColor }
            </p>
        </div>
      </Container>
    );
  }
}

export default App;