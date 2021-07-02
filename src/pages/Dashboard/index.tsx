import React from 'react';
import { useEffect, useState, FormEvent } from 'react';
import api from '../../services/api';
import { Container } from './styles';


interface IEventos {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like: number;
  dislike: number;
}

const Dashboard: React.FC = () => {
  const [eventos, setEventos] = useState<IEventos[]>([]);

  const [nomeEvento, setNomeEvento] = useState('')
  const [local, setLocal] = useState('')
  const [diaSemana, setDiaSemana] = useState('')
  const [horario, setHorario] = useState('')
  const [idS, setIdS] = useState(null)

  async function loadData() {
    const dados = await api.get(`/events`).then((res) => res.data)
    setEventos(dados)
  }

  useEffect(() => {
    loadData()
  }, [])

  async function addEvent(event: FormEvent) {
    event.preventDefault()


    const dado= {
      nomeevento: nomeEvento,
      local: local,
      diasemana: diaSemana,
      horario: horario

    }

    console.log(dado);

    if (idS) {
      await api.put(`/events/${idS}`, dado)
    } else {
      await api.post('/events', dado)
    }

    setNomeEvento('')
    setLocal('')
    setDiaSemana('')
    setHorario('')
    setIdS(null)
    loadData()
  }

  return (
    <Container>
      <h1>Cadastrar Eventos</h1>

      <form onSubmit={addEvent}>

        <input type="text" name="nomeevento" value={nomeEvento}
        placeholder="Nome do Evento" onChange={(e) => setNomeEvento(e.target.value)}/>

        <input type="text" name="local" value={local}
        placeholder="Local do Evento" onChange={(e) => setLocal(e.target.value)}/>

        <input type="text" name="diasemana" value={diaSemana}
        placeholder="Dia da Semana" onChange={(e) => setDiaSemana(e.target.value)}/>

        <input type="text" name="horario" value={horario}
        placeholder="Horário" onChange={(e) => setHorario(e.target.value)}/>

        <button type="submit">Salvar</button>

      </form>

    </Container>
  );
};



export default Dashboard
