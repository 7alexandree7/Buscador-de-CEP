import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './services/api'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});


  async function handleSearch() {

    if (input === '') {
      alert('voce não digitou nada');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");

    } catch {
      alert("CEP não encontrado");
      setInput("");

    }

  }

  return (

    <div className='container'>

      <h1 className='title'>Bucasdor De Cep</h1>

      <div className='container-input'>

        <input type="text" name="" id="" placeholder='Digite seu CEP...' onChange={(e) => setInput(e.target.value)} />
        <button className='buttonSearch' onClick={handleSearch}> <FiSearch size={25} color='#000' /> </button>

      </div>



      {Object.keys(cep).length > 0 && (

        <main className='main'>

          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
          <span>ddd: {cep.ddd}</span>

        </main>
      )}




    </div>
  )
}

export default App
