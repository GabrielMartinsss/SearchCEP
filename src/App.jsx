import { useState } from 'react'

import './app.css'

import InputCEP from './components/InputCEP/InputCEP'
import CardResult from './components/CardResult/CardResult'
import api from './services/api'

const App = () => {

  const [inputValue, setInputValue] = useState('')
  const [cep, setCep] = useState({})

  const handleSearch = async () => {
    try {
      const response = await api.get(`${inputValue}/json`)
      setCep(response.data)
    } catch (error) {
      alert('Ops... error when fetching! ')
    } finally {
      setInputValue('')
    }
  }  
  
  return (
   <div className='app__container'>
    <h1>Bucador CEP</h1>
    <InputCEP 
      inputValue={inputValue} 
      setInputValue={setInputValue} 
      handleSearch={handleSearch}
    />
    {Object.keys(cep).length > 0 && 
      <CardResult 
        inputValue={inputValue} 
        cep={cep}
      /> 
    }
   </div>
  )
}

export default App
