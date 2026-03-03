import { useState } from 'react'
import reactLogo from './assets/react.svg'
import reactPrompt from './assets/React_cmd.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> React</h1>
      <div className="card">
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
      <section className='Como_usar'>
        <h2> COMO UTILIZAR ??</h2>
        <div>
          <p className='txt_expicacao'>

              1. Instale o Node.js
                Antes de tudo, você precisa instalar o Node.js no seu computador. Ele é necessário para criar e rodar projetos em React.
          </p>
          <p className='txt_expicacao'>
                2. Crie um novo projeto
                Depois de instalar o Node, você pode criar um projeto usando um comando pronto (como o Vite ou Create React App). Esse comando já monta toda a estrutura básica para você começar.
          </p>

          <p className='txt_expicacao'>
                3. Abra o projeto no editor
                Com o projeto criado, abra a pasta no seu editor de código (como o VS Code). Lá você verá vários arquivos organizados.
          </p>

          <p className='txt_expicacao'>
                4. Crie componentes
                No React, você constrói a tela usando pequenas partes chamadas componentes. Pense neles como blocos da sua página (por exemplo: um botão, um cabeçalho ou um card).
          </p>
          <p className='txt_expicacao'>
                5. Mostre informações na tela
                Você pode colocar textos, imagens e botões dentro desses componentes. Também pode mudar o que aparece na tela quando o usuário clica em algo.
          </p>
          <p className='txt_expicacao'>
                6. Rode o projeto
                Por fim, use o comando para iniciar o projeto. Ele abrirá automaticamente no navegador, e tudo que você alterar no código será atualizado quase na hora.
          </p>
        </div>

      </section>
    </>
  )
}

export default App
