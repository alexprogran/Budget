import { useState } from 'react'
import Nome from './componets/Nome';


function App() {
const [nome, setNome] = useState('')
  return (
    <>
      <Nome setNome={setNome} />
      <h3>O nome é: {nome}</h3>
    </>
  )
}

export default App
