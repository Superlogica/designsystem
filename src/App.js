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

  handleSubmit = () => {
    console.log(this.state);
  }

  render() {
    const marginTeste = {
      marginBottom: "10px"
    }

    return (
      <Container>
        <div className="App">             
              <Row>
                <Col>
                  <Button gradient="27" style={marginTeste} onClick={this.handleSubmit}>Teste Botão</Button>
                </Col>
                <Col>
                  <Button color="yellow400" shadow size="xlarge" style={marginTeste} onClick={this.handleSubmit}>Enviar Formulário</Button>
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