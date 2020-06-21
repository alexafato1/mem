import React, { useState, useMemo, useEffect} from 'react';

import './App.css';

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  },   [number])

  const themeStyle =  useMemo (() => {
    return {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  } }, [dark])
    
  useEffect(() => {
    console.log('Theme Change')
  }, [themeStyle])

  return (
    < div >
    <input type='number' value={number} onChange ={e => setNumber(parseInt
    (e.target.value))}/>
    <button onClick={() => setDark(prevDark => !prevDark)}>ChangeTheme</button>
    <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log('Calling slow function')
  for (let i = 0; i <= 100000000; i++){}
  return num * 2
}

export default App;
