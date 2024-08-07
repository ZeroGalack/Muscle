import { useState, useRef, useEffect } from "react"; 
import './Hooke.css'

import graf_dT from '../assets/img/Deslocamento_vs_Tempo.png'; 
import graf_FT from '../assets/img/Forca_vs_Tempo.png';

import graf_test_k05 from '../assets/img/k=0.5.png';
import graf_test_k1 from '../assets/img/k=1.png';
import graf_test_k2 from '../assets/img/k=2.png';

import molap1 from '../assets/img/molap1.png'
import molap2 from '../assets/img/molap2.png'
import medidaD from '../assets/img/medidaD-mola.png'


const Hooke = () => {
  const [resposta, setResposta] = useState([]);
  const [mostrarResp, setMostrarResp] = useState(false);
  const divRef = useRef(null);
  
  const [widthValue, setWidthValue] = useState(100);
  const [input_dValue, setInput_dValue] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setWidthValue(prevWidthValue => prevWidthValue === 100 ? (parseInt(input_dValue) * 50)+100 : 100);
    }, 1000);
  
    return () => clearInterval(interval);
  }, [input_dValue]);

  function Enviar_k_d() {
    const input_kValue = document.getElementById('input_k').value;
    const input_dValue = document.getElementById('input_d').value;

    setInput_dValue(input_dValue); // Update the state with the new input_dValue
  
    fetch('http://localhost:5000/Hooke', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input_k: input_kValue, input_d: input_dValue, limpar: '0', resposta: '' }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Resposta do servidor (Enviar_k_d):', data);
        setResposta(data);
        setMostrarResp(true);
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
      });
    }

  function Limpar_grafico() {

    fetch('http://localhost:5000/Hooke', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input_k: '', input_d: '', limpar: '1', resposta: '' }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Resposta do servidor (limpar grafico):', data);
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
      });
  }

  function Testar() {
    const input_kValue = document.getElementById('input_k').value;
    const input_dValue = document.getElementById('input_d').value;
    const resposta = document.getElementById('resposta').value;

    fetch('http://localhost:5000/Hooke', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input_k: input_kValue, input_d: input_dValue, limpar: '0', resposta: resposta }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Resposta do servidor (Teste):', data);
        
        if (data.resps[0] === 1) {
          data.resps[0] = 'Passou';
        } else {
          data.resps[0] = 'Falhou';
        }

        if (data.resps[1] === 1) {
          data.resps[1] = 'Passou';
        } else {
          data.resps[1] = 'Falhou';
        }

        if (data.resps[2] === 1) {
          data.resps[2] = 'Passou';
        } else {
          data.resps[2] = 'Falhou';
        }
        setResposta(data.resps);
        setMostrarResp(true);
        if (divRef.current) {
          divRef.current.scrollIntoView({ behavior: 'smooth' });
        }

      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
      });
  }
  

  return (

  <div className="text">
    <h1 style={{ textAlign: "center", fontSize: '50px'}}> ⓂⓊⓈⒸⓁⒺ </h1>

    <div className="container">
      <div className="leftColumn">

        <h2>Mola Única</h2>
        <h3>Question, 1</h3>        
        <p>No laboratório virtual, você pode experimentar com uma mola, alterando a constante k da mola para esticá-la por um comprimento d.</p>        
        <p>Observe a força de saída F e derive uma equação conectando F, k e d.</p>        
        <p>Qual é a força F gerado por uma mola com constante elástica K quando é esticado por um comprimento d?</p>
        <label className="input-label" htmlFor='resposta'> F = </label>
        <input className="input-espaco" type='text' id='resposta' placeholder='' />
        <button className="btn_Hooke" onClick={Testar}>Testar</button>
        <div className="info_box">         
          <p>Use a constante de mola k, a mudança no comprimento d, números e os operadores + , - , * , / , ( , ) , = .</p>
        </div>

      </div>

      <div className="rightColumn">
        <div style={{ textAlign: "center" }}>
          <label className="input-label" htmlFor='input_k'> k = </label>
          <input className="" type='text' id='input_k' placeholder='' />

          <label className="input-label" htmlFor='input_d'> d = </label>
          <input className="input-espaco" type='text' id='input_d' placeholder='' />

          <button className="btn_Hooke" onClick={Enviar_k_d}>Enviar</button>
          <button className="btn_Hooke" onClick={Limpar_grafico}>Limpar</button>

          <div>
            <img style={{width: "50%"}} src={graf_dT} alt='graf_dT' />
            <img style={{width: "50%"}} src={graf_FT} alt='graf_FT' />
          </div>
        
          <div style={{display: 'flex'}}>
            <img style={{width: `${widthValue}px`, height: "50px"}} src={molap1} alt='molap1' />
            <img style={{height: "50px"}} src={molap2} alt='molap2' />   
          </div>
          
          <div className="container" style={{ gridTemplateColumns: '125px auto', width: 'auto', padding: '0px' }}>
            <div></div>
            <div style={{display: 'flex', justifycontent: 'flex-start'}}>
              {/* <img style={{width: `${widthValue -100}px`, height: "40px"}} src={medidaD} alt='medidaD' />    */}
            </div>

          </div>


        </div>
      </div>


  </div>

  {mostrarResp && (
  <>
    <div className="resposta">


        <div className="titulo-testes">
          <h2 style={{textAlign: "justify", fontSize: 20}}>Teste</h2>
          <p> Avaliando
            <span style={{fontWeight: "bold"}} className="highlight_text-red"> sua resposta </span>
            para diferentes
            <span style={{fontWeight: "bold"}} className="highlight_text-verde"> testes do sistema. </span>
          </p>
      </div>

    </div>
  
      <div className="resposta">
          <div className="leftColumn">  
            <h3>
              Teste 1, Mola: k=1N/m.{' '}
              <span className={resposta[0] === 'Passou' ? 'highlight_text-verde' : 'highlight_text-red'}>
                {resposta[0]}
              </span>
            </h3>
            <div style={{textAlign: "center"}}><img style={{width: "300px"}} src={graf_test_k1}   alt='graf_test_k1' /></div>
          </div>
  
          <div className="leftColumn">
            <h3>
                Teste 2, Mola: k=0.5N/m.{' '}
                <span className={resposta[1] === 'Passou' ? 'highlight_text-verde' : 'highlight_text-red'}>
                  {resposta[1]}
                </span>
              </h3>
              <div style={{textAlign: "center"}}><img style={{width: "300px"}} src={graf_test_k05}  alt='graf_test_k05' /></div>
          </div>
  
          <div className="leftColumn">
            <h3>
                Teste 3, Mola: k=2N/m.{' '}
                <span className={resposta[2] === 'Passou' ? 'highlight_text-verde' : 'highlight_text-red'}>
                  {resposta[2]}
                </span>
              </h3>
              <div style={{textAlign: "center"}}><img style={{width: "300px"}} src={graf_test_k2}   alt='graf_test_k2' /></div>
          </div>
          <div></div>
          <div></div>

          { resposta[0] === 'Passou' && resposta[1] === 'Passou' && resposta[2] === 'Passou' ? (
            <div style={{display: 'flex', marginTop: '5px', justifyContent: 'flex-end'}}>
              <button style={{width: '170px', backgroundColor: '#158a15'}} className="btn_Hooke" onClick={Limpar_grafico}>Proxima etapa</button>
            </div>
          ): (
            <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '10px'}}>
              <div style={{display: 'flex', justifyContent: 'center', width: '300px', backgroundColor: '#bd1818'}} className="info_box">
                <p style={{color: '#ffffff'}}>Você não passou em todos os testes, tente novamente!!!</p>
              </div>
            </div>
          )}
        </div>
    </>
    )}
  </div>
      
    );
  };

export default Hooke;
