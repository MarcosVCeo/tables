import axios from 'axios'
import { useEffect, useState } from "react"
import CardMesa from "../../components/CardMesa"
import NavBar from "../../components/NavBar"
import './Mesas.css'

const Mesas = () => {

    const [teste, setTeste] = useState('')
    const [mesas, setMesas] = useState([
        {
            id: 1,
            nome: "Mesa of the abiguinhos",
            mestre: "Marcos Ceola",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but aLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.lso the leap into ",
            imagem: "https://blog.br.playstation.com/tachyon/sites/4/2023/05/e6605ccc610490600a5968325b58a8a2e56f83be.jpg?resize=1088%2C612&crop_strategy=smart"
        },
        {
            id: 2,
            nome: "Mesa of the abiguinhos 2",
            mestre: "Marcos Ceola",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but aLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.lso the leap into ",
            imagem: "https://blog.br.playstation.com/tachyon/sites/4/2023/05/e6605ccc610490600a5968325b58a8a2e56f83be.jpg?resize=1088%2C612&crop_strategy=smart"
        }
    ])

    useEffect(() => {
        axios
        .get('http://localhost/mesas')
        .then(response => { setMesas(response.data) })
        .catch(error => { console.log('Erro ao buscar os dados da API: ', error) })
    }, [])


    return (
        <div >
            <NavBar />
            <div className="mesas">
                {mesas.map(mesa => <CardMesa key={mesa.nome} mesa={mesa} />)}
            </div>
        </div>
    )
}

export default Mesas