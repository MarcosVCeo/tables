import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { useMesa } from '../../contexts/MesaContext'
import './Mesa.css'

export default function Mesa({ mesa }) {

    const { mesaId } = useParams()
    const mesaContext = useMesa()
    const [socket, setSocket] = useState(null)
    const [mensagens, setMensagens] = useState([])
    const [mensagemDigitada, setMensagemDigitada] = useState('')
    const username = "Marcos"
    useEffect(() => {
        setSocket(mesaContext.conectarAoSocket(mesaId, username))

        axios
            .get(`http://localhost/messages?roomId=${mesaId}`)
            .then(response => { setMensagens(response.data.content) })
            .catch(error => { console.log('Erro ao buscar os dados da API: ', error) })
    }, [])

    const onChangeTextAreaHandler = event => {
        setMensagemDigitada({ senderUsername: username, textMessage: event.target.value, roomId: mesaId });
    };

    const onSubmitHandler = () => {
        socket.emit('enviar_mensagem', mensagemDigitada)
    }

    if (socket) {
        socket.on('receber_mensagem', mensagem => {
            setMensagens([...mensagens, mensagem])
        })
    }

    return (

        <div>
            <NavBar />
            <div className='chat'>
                <section className='chat__mensages'>
                    {
                        mensagens.map((mensagem, i) => (
                            <p className='chat__mensagens__mensagem' key={i}>
                                <strong>{mensagem.senderUsername}:</strong>{mensagem.textMessage}
                            </p>
                        ))
                    }
                </section>
                <div className='chat__text_area'>
                    <textarea onChange={onChangeTextAreaHandler} />
                    <button onClick={onSubmitHandler}>Enviar</button>
                </div>
            </div>
        </div>
    )
}
