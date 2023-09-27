import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [result, setResult] = useState('0');
  const [task, setTask] = useState('');
  const [_x, set_x] = useState(0);

  function ButtonClick(x){
    if (x == '=')
    {
      if (_x == 0)
      {
        setTask(task + result + "=");
        setResult(eval(task + result));
        set_x(1);
      }
    }
    else if (x == '+' || x == '-' || x == '*' || x == '/')
    {
      if (_x == 0)
      {
        setTask(task + result + x);
        setResult("0");
      }
      else if (_x == 1)
      {
        setTask(result + x);
        setResult("0");
        set_x(0);
      }
    }
    else if (x == '.')
    {
      if (result.indexOf('.') == -1)
        setResult(result + x);
    }
    else if (x == '<')
    {
      setResult(result.substring(0, result.length - 1));
    }
    else if (x == 'C')
    {
      setResult("0");
    }
    else if (x == "CE")
    {
      document.location.reload();
    }
    else if (result == '0')
    {
      setResult(x);
    }
    else
    {
      setResult(result + x);
    }
  }

  return (
    <div id="area" className="App">
      <header className="App-header">
        <div className='App-top'>
          <img src={logo} className="App-logo" alt="logo"/>
          <b>Kalkulator</b>
        </div>
      </header>
      <div className='App-content'>
        <div className='App-main'>
          <div className='App-task'>{task}</div>
          <div className='App-result'>{result == '' ? "0" : result}</div>
          <table>
            <tr>
              <td><button className='App-button' id='App-button_1' onClick={() => ButtonClick('C')}>C</button></td>
              <td><button className='App-button' id='App-button_1' onClick={() => ButtonClick("CE")}>CE</button></td>
              <td><button className='App-button' id='App-button_1' onClick={() => ButtonClick('<')}>←</button></td>
              <td><button className='App-button' id='App-button_2' onClick={() => ButtonClick('+')}>+</button></td>
            </tr>
            <tr>
              <td><button className='App-button' onClick={() => ButtonClick('1')}>1</button></td>
              <td><button className='App-button' onClick={() => ButtonClick('2')}>2</button></td>
              <td><button className='App-button' onClick={() => ButtonClick('3')}>3</button></td>
              <td><button className='App-button' id='App-button_2' onClick={() => ButtonClick('-')}>-</button></td>
            </tr>
            <tr>
              <td><button className='App-button' onClick={() => ButtonClick('4')}>4</button></td>
              <td><button className='App-button' onClick={() => ButtonClick('5')}>5</button></td>
              <td><button className='App-button' onClick={() => ButtonClick('6')}>6</button></td>
              <td><button className='App-button' id='App-button_2' onClick={() => ButtonClick('*')}>*</button></td>
            </tr>
            <tr>
              <td><button className='App-button' onClick={() => ButtonClick('7')}>7</button></td>
              <td><button className='App-button' onClick={() => ButtonClick('8')}>8</button></td>
              <td><button className='App-button' onClick={() => ButtonClick('9')}>9</button></td>
              <td><button className='App-button' id='App-button_2' onClick={() => ButtonClick('/')}>/</button></td>
            </tr>
            <tr>
              <td><button className='App-button' onClick={() => ButtonClick('.')}>.</button></td>
              <td><button className='App-button' onClick={() => ButtonClick('0')}>0</button></td>
              <td><button className='App-button' id='App-button_3' onClick={() => ButtonClick('=')}>=</button></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
