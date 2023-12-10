import Input from './components/input'
import Button from './components/button'
import { Container, H1, Content, Row, Column } from './styles';
import { useState } from 'react';

const App = () => {
  let [currentNUmber, setcurrentNumber] = useState('0');

  const [firstNumber, setFirstNumber] = useState('0');

  const[operation, setOperation] = useState('');
  
  const handleOnClear = () =>{
    setcurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (number) => {
    setcurrentNumber(prev => `${prev === '0' ? '': prev}${number}`)
  }

  const handleSumNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNUmber));
      setcurrentNumber('0');
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNUmber);
      setcurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNUmber));
      setcurrentNumber('0');
      setOperation('-')
    }else{
      const sum = Number(firstNumber) - Number(currentNUmber);
      setcurrentNumber(String(sum))
      setOperation('')
    }
  }
  const handleMultiNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNUmber));
      setcurrentNumber('0');
      setOperation('*')
    }else{
      const sum = Number(firstNumber) * Number(currentNUmber);
      setcurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleDivNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNUmber));
      setcurrentNumber('0');
      setOperation('/')
    }else{
      const sum = Number(firstNumber) / Number(currentNUmber);
      setcurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handlePercnetNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNUmber));
      setcurrentNumber('0');
      setOperation('%')
    }else{
      const sum = Number(firstNumber) * (Number(currentNUmber) / 100);
      setcurrentNumber(String(sum))
      setOperation('')
    }
  }

  
  

  const handleEqual = () =>{
    if(firstNumber !== '0' && operation !== '' && currentNUmber !== '0'){
      switch(operation){
          case '+':
            handleSumNumbers();
          break;

          case '-':
            handleMinusNumbers();
          break;

          case '*':
            handleMultiNumbers();
          break;

          case '/':
            handleDivNumbers();
          break;

          case '%':
            handlePercnetNumbers();
          break


          default: break;}
      }
    
  }

  return (
    <Container>
      <H1>Calculadora React</H1>
      
      <Content>
      
        <Input value = {currentNUmber}/>
        <Row>
            <Button label="%" onClick={handlePercnetNumbers}/>
            <Button label="CE" onClick={ () => handleAddNumber('')}/>
            <Button label="C" onClick={handleOnClear}/>
            <Button label="/" onClick={handleDivNumbers}/>
          </Row>
          <Row>
            <Button label="7" onClick={ () => handleAddNumber('7')}/>
            <Button label="8" onClick={ () => handleAddNumber('8')}/>
            <Button label="9" onClick={ () => handleAddNumber('9')}/>
            <Button label="*" onClick={handleMultiNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={ () => handleAddNumber('4')}/>
            <Button label="5" onClick={ () => handleAddNumber('5')}/>
            <Button label="6" onClick={ () => handleAddNumber('6')}/>
            <Button label="-" onClick={handleMinusNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={ () => handleAddNumber('1')}/>
            <Button label="2" onClick={ () => handleAddNumber('2')}/>
            <Button label="3" onClick={ () => handleAddNumber('3')}/>
            <Button label="+" onClick= {handleSumNumbers}/>
          </Row>
          <Row>
            <Button label="<=" />
            <Button label="0" onClick={ () => handleAddNumber('0')}/>
            <Button label=","/>
            <Button label="=" onClick={handleEqual}/>
          </Row>
        
        
      </Content>
    </Container>
  );
}


export default App;
