import { FormEvent, useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

// Calculo dividir o alcool / gasolina
// se o resultado for menor de 0.7 compesa usar o alcool

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [alcoolInput, setAlcoolInput] = useState(0);

  function calcular(event: FormEvent){
    event.preventDefault();

    const calculo = (alcoolInput / gasolinaInput);

    if(calculo <= 0.7){
      alert('compensa usar Alcool')
    }else {
      alert('compensa usar Gasolina')
    }
  }

  return (
    <div>
      <main className="container">
        <img
          className="logo"
          src={logoImg}
          alt="Logo da calculadora de gasolina ou alcool"
        />
        <h1 className="title">Qual melhor opção?</h1>

        <form className="form" onSubmit={calcular}>
          <label>Álcool (preço por litro):</label>
          <input
            className="input"
            type="number"
            placeholder="4,90"
            min="1"
            step="0.01"
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />

          <label>Gasolina (preço por litro):</label>
          <input
            className="input"
            type="number"
            placeholder="4,90"
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <input className="button"  type="submit" value="Calcular"/>
        </form>

        <section className='result'>
          <h2 className='result-title'>Compensa usar Alcool</h2>

          <span>Alcool R$ 4.30</span>
          <span>Gasolina R$ 5.10</span>
        </section>

      </main>
    </div>
  )
}

export default App
