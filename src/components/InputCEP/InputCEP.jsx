
import './inputCEP.css'
import Button from '../Button/Button'


const InputCEP = ( { inputValue, setInputValue, handleSearch } ) => {
    return (
        <div className='input__container'>
            <input 
                type="text"
                placeholder="Digite o CEP..." 
                value={inputValue}
                onChange={(ev) => setInputValue(ev.target.value)}
            />
            <Button handleSearch={handleSearch} />
        </div>
    )
}

export default InputCEP