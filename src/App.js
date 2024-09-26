import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA SOUZA',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://cdn-icons-png.flaticon.com/512/4842/4842664.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL SILVA',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://cdn-icons-png.flaticon.com/512/4394/4394517.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME OLIVEIRA',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	https://cdn-icons-png.flaticon.com/512/6773/6773382.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO FERREIRA',
      cargo: 'CEO do Organo',
      imagem: 'https://cdn-icons-png.flaticon.com/512/1373/1373255.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA SOUZA',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://cdn-icons-png.flaticon.com/512/4842/4842664.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL SILVA',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://cdn-icons-png.flaticon.com/512/4394/4394517.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME OLIVEIRA',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	https://cdn-icons-png.flaticon.com/512/6773/6773382.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO FERREIRA',
      cargo: 'CEO do Organo',
      imagem: 'https://cdn-icons-png.flaticon.com/512/1373/1373255.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA SOUZA',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://cdn-icons-png.flaticon.com/512/4842/4842664.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL SILVA',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://cdn-icons-png.flaticon.com/512/4394/4394517.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME OLIVEIRA',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	https://cdn-icons-png.flaticon.com/512/6773/6773382.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO FERREIRA',
      cargo: 'CEO do Organo',
      imagem: 'https://cdn-icons-png.flaticon.com/512/1373/1373255.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA SOUZA',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://cdn-icons-png.flaticon.com/512/4842/4842664.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL SILVA',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://cdn-icons-png.flaticon.com/512/4394/4394517.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME OLIVEIRA',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	https://cdn-icons-png.flaticon.com/512/6773/6773382.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO FERREIRA',
      cargo: 'CEO do Organo',
      imagem: 'https://cdn-icons-png.flaticon.com/512/1373/1373255.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA SOUZA',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://cdn-icons-png.flaticon.com/512/4842/4842664.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL SILVA',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://cdn-icons-png.flaticon.com/512/4394/4394517.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME OLIVEIRA',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	https://cdn-icons-png.flaticon.com/512/6773/6773382.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO FERREIRA',
      cargo: 'CEO do Organo',
      imagem: 'https://cdn-icons-png.flaticon.com/512/1373/1373255.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA SOUZA',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://cdn-icons-png.flaticon.com/512/4842/4842664.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL SILVA',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://cdn-icons-png.flaticon.com/512/4394/4394517.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME OLIVEIRA',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	https://cdn-icons-png.flaticon.com/512/6773/6773382.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO FERREIRA',
      cargo: 'CEO do Organo',
      imagem: 'https://cdn-icons-png.flaticon.com/512/1373/1373255.png',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCordoTime(cor, id){
    setTimes(times.map(time=>{
      if(time.id === id ){
        time.cor = cor
      }
      return time
    }))
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map( colaborador=> {
      if(colaborador.id === id) colaborador.favorito = ! colaborador.favorito
      return colaborador
    }))
  }


  return (
    <div>
      <Banner />
      <Formulario cadastrarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
          <Time 
            key={indice} 
            mudarCor = {mudarCordoTime}
            time={time} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
            aoDeletar={deletarColaborador}
            aoFavoritar={resolverFavorito}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
