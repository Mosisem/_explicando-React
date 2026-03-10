import { useState } from 'react'
import reactLogo from './assets/react.svg'
import htmlLogo from './assets/HTML5.png'
import jsLogo from './assets/JavaScript.png'
import nodelogo from './assets/Node.js.png'
import csslogo from './assets/CSS3.png'
import gitlogo from './assets/git.png'
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
                <div className='logo_git'>
                    <img src={gitlogo} alt=" logo git" />
                </div>
                <div className='logo_html'>
                    <img src={htmlLogo} alt=" logo html5" />
                </div>

                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>

                <div className='logo_js' data-aos="fade-up">
                   <img src={jsLogo} alt=" logo javascript" />
                </div>

                 <div className='logo_css' data-aos="fade-up">
                   <img src={csslogo} alt=" logo CSS#" />
                </div>

                <h1> React</h1>

              </div>
              <div className="card" data-aos="fade-up">
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
        <h2 data-aos="fade-up"> COMO UTILIZAR ??</h2>
        <div className='card_passos' data-aos="fade-right">
                  <p className='txt_explicacao'>
                      <h3>
                       <strong>
                         <a href="https://nodejs.org/pt-br/download">1</a> Instalar o Node.js
                       </strong> 
                      </h3>
                        <p>
                           O primeiro passo para criar um projeto React é instalar o Node.js, que é um ambiente que permite executar JavaScript fora do navegador. Ele também instala automaticamente o npm (Node Package Manager), que é usado para baixar bibliotecas e ferramentas necessárias para o projeto.

                            Passos:
                        </p>
                            Acesse o site oficial do Node.js.

                            Baixe a versão LTS (Long Term Support), que é a mais estável.

                            Execute o instalador e finalize a instalação.

                            Depois de instalar, abra o terminal ou prompt de comando e digite

                        <div className='comando_cmd'>
                               <img src={nodelogo} alt="logo do Node.js" />
                               <div className='cmd_prompt' >
                                    <p> anode -v</p>
                                    <p>npm -v</p>
                               </div>
                        </div>
                  </p>
        </div>

        <div className='card_passos' data-aos="fade-left">
                  <p className='txt_explicacao'>
                       <h3>
                         <strong>
                           <a href="">2</a> Criar o projeto React
                         </strong>
                       </h3> 
                       Depois de instalar o Node.js, você pode criar um novo projeto React utilizando o Vite, que é uma ferramenta moderna para criar projetos front-end rapidamente.
                            No terminal, digite:
                       <div className='cmd_prompt' >
                            <p> npm create vite@latest nome-do-projeto -- --template react </p>
                       </div>
                  </p>
        </div>

        <div className='card_passos' data-aos="fade-right">

                  <p className='txt_explicacao'>
                        <h3>
                          <strong>
                             <a href="">3</a> Acessar a pasta do projeto
                          </strong>
                        </h3>
                          Depois que o projeto for criado, você precisa entrar na pasta dele através do terminal.
                          Use o comando:
                           <div className='cmd_prompt' >
                                 <p>cd nome-do-projeto</p>
                           </div>
                  </p>
        
        </div>

        <div className='card_passos' data-aos="fade-left">
                  <p className='txt_explicacao'>
                        <h3>
                          <strong>
                             <a href="">4</a> Instalar as dependências do projeto
                          </strong>
                        </h3>
                          Agora é necessário instalar todas as bibliotecas que o projeto precisa para funcionar.
                          Execute o comando:
                          <div className='cmd_prompt' >
                                 <p>npm install</p>
                           </div>
                  </p>

        </div>

        <div className='card_passos' data-aos="fade-right">
                  <p className='txt_explicacao'>
                        <h3>
                          <strong>
                             <a href="">5</a> Executar o projeto
                          </strong>
                        </h3> 
                         Depois de instalar as dependências, você pode iniciar o servidor de desenvolvimento para visualizar o projeto no navegador.
                         Digite no terminal:
                         <div className='cmd_prompt' >
                                 <p>npm run dev</p>
                           </div>
                  </p>

        </div>

        <div className='card_passos'data-aos="fade-left">
                  <p className='txt_explicacao'>
                       <h3>
                         <strong>
                            <a href="">6</a> Começar a desenvolver o projeto
                         </strong>
                       </h3> 
                        <p>
                          A maior parte do desenvolvimento acontece dentro da pasta src.
                          Arquivos importantes:
                        </p>
                        <div className='cmd_prompt' >
                                 <p>main.jsx → ponto de entrada da aplicação</p>

                                 <p>App.jsx → componente principal da aplicação</p>

                                 <p>assets/ → imagens e arquivos estáticos</p>

                                 <p>index.html → arquivo base da página</p>
                           </div>          
                   </p>
        </div>

      </section>
    </>
  )
}

export default App
