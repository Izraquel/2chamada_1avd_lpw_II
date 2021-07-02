import React from 'react'
import { Container, Td } from './styles'
import { useEffect, useState } from 'react';
import api from '../services/api'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'



interface IEventos {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like: number;
  dislike: number;
}

const Header: React.FC = () => {
  const [eventos, setEventos] = useState<IEventos[]>([]);


  async function loadData() {
    const dados = await api.get(`/events`).then((res) => res.data)
    setEventos(dados)

  }

  useEffect(() => {
    loadData()
  }, [])

  async function deleteEvent(id: string) {
    await api.delete(`/events/${id}`)

    loadData()
  }

  const addLike = async (id: string) => {
    await api.post(`/events/like/${id}`);
    api.get('/events').then((res) => setEventos(res.data));
  }

  const addDislike = async (id: string) => {
    await api.post(`/events/dislike/${id}`);
    api.get('/events').then((res) => setEventos(res.data));
  }

  /* let ordemAlfa = []
  ordemAlfa = Array.from(new Set(eventos.map(evento => evento.nomeevento))).sort()
  console.log(ordemAlfa) */

  return (
    <Container>
      <h1>Eventos</h1>

       <table>
        <thead>
          <tr>
            <th>Evento</th>
            <th>Local</th>
            <th>Dia da Semana</th>
            <th>Horário</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {eventos.map((e: IEventos) => {
            return(

              <tr key={e.id}>
                <td>{` ${e.nomeevento}`}</td>
                <td>{` ${e.local}`}</td>
                <td>{` ${e.diasemana}`}</td>
                <td>{` ${e.horario}`}</td>


                <Td className="acoes">

                  <button onClick={() => {deleteEvent(e.id)}}>Apagar</button>

                  <a href="" className="buttonLike" >
                    <FaThumbsUp /* size={23} */ color="blue" onClick={() => addLike(e.id)}/>
                    <Td>{`${e.like}`}</Td>
                  </a>

                  <a href="" className="buttonDislike" >
                    <FaThumbsDown /* size={23}  */color="blue" onClick={() => addDislike(e.id)}/>
                    <Td>{`${e.dislike}`}</Td>
                  </a>

                </Td>
              </tr>
          )})}
        </tbody>
      </table >
    </Container>
  )
}

export default Header
