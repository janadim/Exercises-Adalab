import React, { useState } from 'react';
import '../stylesheets/App.css';
const App = () => {
  const [text, setText] = useState('');
  function handleChange(ev) {
    setText(ev.currentTarget.value );
  }
   const handleForm = (ev) => {
     ev.preventDefault();
  // };
  // const handleEmail = (ev) => {
  //   setEmail(ev.currentTarget.value);
  // };
  // const handleReset = () => {
  //   setEmail(‘’);
  //   setColor(‘’);
  // };
  return (
    <>
      <h1>Formulario para pelis</h1>
      <form>
        <label className='form__label' htmlFor=''>
          Escribe aquí el nombre de la película:
        </label>
        <br></br>
        <textarea
          value={text}
          placeholder='descripción'
          onChange={handleChange}
        ></textarea>
        <select value=''>
          <option value=''></option>
          <option value='Español'>Español</option>
          <option value='Inglés'>Inglés</option>
          <option value='Portugués'>Portugués</option>
        </select>
      </form>
      <div>
        <p>Película: </p>
        <p>Idioma: </p>
      </div>
    </>
  );
};
export default App;


