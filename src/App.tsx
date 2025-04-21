import { FormEvent, useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

// Calculo dividir o alcool / gasolina
// se o resultado for menor de 0.7 compesa usar o alcool

interface InfoProps{
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState<string>('');
  const [alcoolInput, setAlcoolInput] = useState<string>('');
  const [info, setInfo] = useState<InfoProps>()

  function calcular(event: FormEvent){
    event.preventDefault();

    const gasolina = Number(gasolinaInput);
    const alcool = Number(alcoolInput);

    if (gasolina === 0 || alcool === 0 || isNaN(gasolina) || isNaN(alcool)) {
      alert("Preencha os campos com valores válidos.");
      return;
    }
    
    const calculo = alcool / gasolina;

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar álcool",
        gasolina: formatarMoeda(gasolina),
        alcool: formatarMoeda(alcool),
      });
    } else {
      setInfo({
        title: "Compensa usar gasolina",
        gasolina: formatarMoeda(gasolina),
        alcool: formatarMoeda(alcool),
      });
    }
  }

  function formatarMoeda(valor: number){
    const valorFormatado = valor.toLocaleString("pt-br", 
      {
        style: 'currency',
        currency: 'BRL'
      })
      return valorFormatado
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
            placeholder="Digite um valor"
            min="1"
            step="0.01"
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(e.target.value)}
          />

          <label>Gasolina (preço por litro):</label>
          <input
            className="input"
            type="number"
            placeholder="Digite um valor"
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(e.target.value)}
          />

          <input className="button"  type="submit" value="Calcular"/>
        </form>
        
        {info && Object.keys(info).length > 0 && (
          <section className='result'>
            <h2 className='result-title'>
              {info.title}
            </h2>

            <span>Álcool {info.alcool}</span>
            <span>Gasolina {info.gasolina}</span>
          </section>

        )}
        
      </main>
    </div>
  )
}

export default App
