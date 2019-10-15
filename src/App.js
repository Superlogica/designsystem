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
                  <Button color="purple" shadow fullWidth disable size="small" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
                <Col>
                  <Button color="yellow400" shadow fullWidth size="small" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button color="purple" fullWidth disable size="medium" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
                <Col>
                  <Button color="purple" fullWidth size="medium" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button color="purple" fullWidth disable size="large" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
                <Col>
                  <Button color="purple600" shadow fullWidth size="large" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button color="purple" fullWidth disable size="xlarge" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
                <Col>
                  <Button color="purple900" shadow fullWidth size="xlarge" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button color="purple" fullWidth type="outline" size="small" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
                <Col>
                  <Button color="purple300" fullWidth type="ghost" size="small" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
              </Row>
              
              <Row>
                <Col>
                  <Button color="purple" fullWidth type="outline" size="medium" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
                <Col>
                  <Button color="purple" fullWidth type="ghost" size="medium" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button color="purple" fullWidth type="outline" size="large" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
                <Col>
                  <Button color="purple600" fullWidth type="ghost" tsize="large" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button color="purple" fullWidth type="outline" size="xlarge" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
                </Col>
                <Col>
                  <Button color="purple900" fullWidth type="ghost" size="xlarge" style={marginTeste} onClick={this.handleSubmit}>Solid Button</Button>
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