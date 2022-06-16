import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';

function App(props) {
  const [count, setcount] = useState(0);
  const [isAlert, setIsAlert] = useState(false);
  const lag = 5000;

  useEffect(() => {
    alert("ComponenetDidMount!");
  }, []);

  const handleAdd = () => {
      setcount(count + 1);
  }
  const handleSub = () => {
      setcount(count - 1);
  }
  const handleAlert = () => {
    setTimeout(() => setIsAlert(true), lag);
  }

  useEffect(() => {
    if (isAlert) {
      alert("ComponentDidUpdate! Count: " + count);
      setIsAlert(false);
    }

    return () => {
      alert("componentWillUnmount!");
    }
  }, [isAlert]);

  return (<section>
      <header>{props.title}: {count}</header>
      <button onClick={handleAdd} >+</button><button onClick={handleSub}>-</button>
      <button onClick={handleAlert}>Alert after 5 s</button>
      {/* <button onClick={unmount}>Unmount</button> */}
  </section>)
    
}

export default App;
