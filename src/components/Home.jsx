import { useState, useEffect } from 'react';
import Button from './Button';

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [greetingMessage, setGreetingMessage] = useState('What is up my dude?');

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter >0 ) {
      setCounter(counter - 1);
    }
  };

  useEffect (() => {
    setGreetingMessage(`Your counter is now ${counter}`);    
  },  [counter]);

  return (
    <div>
      <h1>Home Component</h1>
      <p>{greetingMessage}</p>

      <label htmlFor="counter">Counter: {counter}</label>
      
      <Button title="Increase Counter" onClickHandler={increaseCounter}/>
      <Button title="Decrease Counter" onClickHandler={decreaseCounter}/>
      
    </div>
  );
};

export default Home;