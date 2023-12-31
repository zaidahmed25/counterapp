import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(0)
  const addNum = () => {
    setNum  (num + 1);
  }
  const subNum = () => {
    if (num === 0) {
      console.log('nh hoga');
      return
    }
    setNum  (num - 1);
  }
  return (
    <>
      <h1>Counter App</h1>
      <p className='counter'>{num}</p>
      <div className="card">
        <button onClick={addNum}>Add {num}</button>
        <button onClick={subNum}>Sub {num}</button>
      </div>
      
    </>
  )
}

export default App
