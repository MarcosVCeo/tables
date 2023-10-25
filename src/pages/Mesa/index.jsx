import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import NavBar from '../../components/NavBar'
import './Mesa.css'

export default function Mesa() {

    const [mensagemDigitada, setMensagemDigitada] = useState('')
    const [mensagens, setMensagens] = useState([])
    const [socket, setSocket] = useState()
    const User = "Marcos"

    const onChangeTextAreaHandler = event => {
        setMensagemDigitada({ usuario: User, mensagem: event.target.value })
    }

    const onSubmitHandler = async () => {
        console.log("fui submetido")

        socket.emit('enviar_mensagem', mensagemDigitada)
    }

    useEffect(() => {
        const socketTemp = io.connect('http://localhost:8080')

        setSocket(socketTemp)
    }, [])


    return (
        <div>
            <NavBar />
            <div className='chat'>
                <section className='chat__mensages'>
                    {
                        mensagens.map((mensagem, i) => (
                            <p className='chat__mensagens__mensagem' key={i}>
                                <strong>{mensagem.usuario}:</strong>{mensagem.mensagem}
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
