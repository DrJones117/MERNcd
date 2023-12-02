import { useState } from 'react'
import BoxForm from './components/BoxForm'
import BoxDisplay from './components/BoxDisplay';

function App() {

  const [boxes, setBoxes] = useState(["red"]);

  const addToBoxes = (newBox) => { setBoxes([...boxes, newBox])};
  console.log(boxes)

  return (
    <> 
      <BoxForm addToBoxes={addToBoxes}/>
      <BoxDisplay boxes = {boxes}/>
    </>
  )
}

export default App
