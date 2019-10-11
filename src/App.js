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
                  <Button style={marginTeste} type="ghost" size="small" color="red" onClick={this.handleSubmit}>Enviar</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button size="small" style={marginTeste} onClick={this.handleSubmit}>Enviar</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button color="success" type="outline" size="small" style={marginTeste} onClick={this.handleSubmit}>Enviar</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button color="info" size="medium" style={marginTeste} onClick={this.handleSubmit}>Enviar</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button color="danger" size="large" style={marginTeste} onClick={this.handleSubmit}>Enviar</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button color="yellow" size="xlarge" style={marginTeste} onClick={this.handleSubmit}>Enviar</Button>
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