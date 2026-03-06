import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Aos, {AOS} from 'aos'
import 'aos/dist/aos.css'
import reactPrompt from './assets/React_cmd.png'
import viteLogo from '/vite.svg'
import './App.css'
function Anima_pg(){
    Aos.init({
      duration: 1800,
      once: true,
      offset: 100
    })
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='logo_contente_txt'>
        <Anima_pg/>
              <div className='react_sectiom' data-aos="fade-up">
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <h1> React</h1>
              </div>
              <div className="card" data-aos="fade-right">
                <img src={reactPrompt} className='terminal_img'></img>
                <div className='txt_apresentando'>
                  <h2>O QUE É?</h2>
                  <div>
                    <p>
                        O React é uma biblioteca JavaScript criada pela Meta (empresa responsável pelo Facebook) que facilita a criação de interfaces modernas para sites e aplicações web. Ele surgiu da necessidade de tornar as páginas mais rápidas, organizadas e fáceis de atualizar conforme o usuário interage.
                    </p>
                    <p>
                        Uma das ideias mais interessantes do React é dividir a interface em pequenas partes chamadas componentes. Pense como se fosse montar algo com peças de LEGO: cada peça tem sua função e pode ser reutilizada em diferentes partes do projeto. Isso deixa o código mais organizado e simples de manter.

                        Outro ponto forte do React é o desempenho. Ele utiliza algo chamado Virtual DOM, que basicamente ajuda a atualizar somente o que realmente mudou na tela, em vez de recarregar tudo. Isso torna a experiência mais fluida e agradável para quem está usando a aplicação.
                    </p>

                  </div>
                
                </div>
              </div>
      </section>

      <section className='Como_usar'>
        <h2> COMO UTILIZAR ??</h2>
        <div className='card_passos'>
                  <p className='txt_explicacao'>
                      <h3>
                       <strong>
                         <a href="">1.</a> Instale o Node.js
                       </strong> 
                      </h3>
                        Antes de tudo, você precisa instalar o Node.js no seu computador. Ele é necessário para criar e rodar projetos em React.
                        <div className='comando_cmd'>
                           <p> npm create vite@latest nome-do-projeto -- --template react </p>
                        </div>
                  </p>
        </div>

        <div className='card_passos_1'>
                  <p className='txt_explicacao'>
                       <h3>
                         <strong>
                           <a href="">2.</a> Crie um novo projeto
                         </strong>
                       </h3> 
                        Depois de instalar o Node, você pode criar um projeto usando um comando pronto (como o Vite ou Create React App). Esse comando já monta toda a estrutura básica para você começar.
                  </p>
        </div>

        <div className='card_passos'>

                  <p className='txt_explicacao'>
                        <h3>
                          <strong>
                             <a href="">3.</a> Abra o projeto no editor
                          </strong>
                        </h3>
                        Com o projeto criado, abra a pasta no seu editor de código (como o VS Code). Lá você verá vários arquivos organizados.
                  </p>
        
        </div>

        <div className='card_passos'>
                  <p className='txt_explicacao'>
                        <h3>
                          <strong>
                             <a href="">4.</a> Crie componentes
                          </strong>
                        </h3>
                        No React, você constrói a tela usando pequenas partes chamadas componentes. Pense neles como blocos da sua página (por exemplo: um botão, um cabeçalho ou um card).
                  </p>

        </div>

        <div className='card_passos'>
                  <p className='txt_explicacao'>
                        <h3>
                          <strong>
                             <a href="">5.</a> Mostre informações na tela
                          </strong>
                        </h3> 
                        Você pode colocar textos, imagens e botões dentro desses componentes. Também pode mudar o que aparece na tela quando o usuário clica em algo.
                  </p>

        </div>

        <div className='card_passos'>
                  <p className='txt_explicacao'>
                       <h3>
                         <strong>
                            <a href="">6.</a> Rode o projeto
                         </strong>
                       </h3> 
                        Por fim, use o comando para iniciar o projeto. Ele abrirá automaticamente no navegador, e tudo que você alterar no código será atualizado quase na hora.
                  </p>
        </div>

      </section>
    </>
  )
}

export default App
