import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Button from './components/Button/Button';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decimalColor: '111',
      cor :{
        cor50:'',
        cor100:'',
        cor200:'',
        cor300:'',
        cor400:'ff713d',
        cor500:'ff5720',
        cor600:'d6420b',
        cor700:'',
        cor800:'',
        cor900:'',
        cor950:'',
      }
    };
  }

  convertHexaDec = async (cor) => {
    let decimal = parseInt(cor,16);
    return decimal;
  }


  convertDecHexa = async (cor) => {
    let decimal = cor.toString(16);
    return decimal;
  }

  handleChange = (event) => {
    let id = event.target.id;
    let cor = this.state.cor;
    cor[id] = event.target.value;
    this.setState({ cor });
  }

  calculadora = async (c1,c2,c3) =>{
    c1 = await this.convertHexaDec(c1);
    c2 = await this.convertHexaDec(c2);
    c3 = await this.convertHexaDec(c3);
    let retorno = {
      menor: c2 - c1,
      maior: c3 - c2
    }
    return retorno;
  }

  handleSubmit = async () =>{
    let cores = this.state.cor;
    let hexa = cores.cor400.replace('#','');
    let split = hexa.match(/.{1,2}/g);
     
  }

render(){    
    return (
      <Container>
        <div className="App">
          <Row>
            <Col>
            <label>
              cor-500:
              <input type="text" id="cor500" value="ff5720" onChange={this.handleChange}/>
            </label>
            </Col>
            <Col>
            <label>
              cor-400:
              <input type="text" id="cor400" value="ff713d" onChange={this.handleChange}/>
            </label>
            </Col>
            <Col>          
            <label>
              cor-600:
              <input type="text"id="cor600" value="d6420b" onChange={this.handleChange} />
            </label>
            </Col>
            </Row>
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