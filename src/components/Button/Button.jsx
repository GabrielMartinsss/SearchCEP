import {FiSearch} from 'react-icons/fi'
import './button.css'

const Button = ({handleSearch}) => {
  return (
    <button onClick={handleSearch} className='btn-search'>
      <FiSearch 
        size={26} 
        color='#fff'
      />
    </button>
  )
}

export default Button