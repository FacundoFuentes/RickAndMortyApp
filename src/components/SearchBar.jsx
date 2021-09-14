import React, {useState} from 'react';
import './styles/SearchBar.css'

export default function SearchBar({onSearch}) {

  const [input, setInput] = useState('')
  return (
    <div className='container'>
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(input);
      setInput("")
    }}>
      <input
        className={'inputContainer'}
        value={input}
        onChange = {(e) => setInput (e.target.value)}
        type="text"
        placeholder="ID del personaje"
      />
      <input className={'button'} type="submit" value="Agregar" />
    </form>
    </div>
  );
}
