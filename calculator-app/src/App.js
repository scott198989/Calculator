import React, { useState } from 'react';
import Display from './components/CalcDisp';
import Button from './components/Button';
import Footer from './components/Footer'


function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      evaluateExpression();
    } else if (value === 'C') {
      clearInput();
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const evaluateExpression = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const handleScientificFunction = (func) => {
    setInput((prevInput) => prevInput + func + '(');
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        <Button onClick={handleButtonClick} value="7" />
        <Button onClick={handleButtonClick} value="8" />
        <Button onClick={handleButtonClick} value="9" />
        <Button onClick={handleButtonClick} value="+" />
        <Button onClick={handleButtonClick} value="4" />
        <Button onClick={handleButtonClick} value="5" />
        <Button onClick={handleButtonClick} value="6" />
        <Button onClick={handleButtonClick} value="-" />
        <Button onClick={handleButtonClick} value="1" />
        <Button onClick={handleButtonClick} value="2" />
        <Button onClick={handleButtonClick} value="3" />
        <Button onClick={handleButtonClick} value="*" />
        <Button onClick={handleButtonClick} value="0" />
        <Button onClick={handleButtonClick} value="." />
        <Button onClick={handleButtonClick} value="/" />
        <Button onClick={handleButtonClick} value="C" />
        <Button onClick={handleButtonClick} value="=" />
        <Button onClick={() => handleScientificFunction('sqrt')} value="√" />
        <Button onClick={() => handleScientificFunction('sin')} value="sin" />
        <Button onClick={() => handleScientificFunction('cos')} value="cos" />
        <Button onClick={() => handleScientificFunction('tan')} value="tan" />
      </div>
      <Footer />
    </div>
  )
}

export default App;
