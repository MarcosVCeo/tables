import CardMesa from "../CardMesa"
import NavBar from "../components/NavBar"
import './Mesas.css'

const Mesas = () => {
    const mesas = [
        {
            nome: "Mesa of the abiguinhos",
            mestre: "Marcos Ceola",
            imagem: "https://blog.br.playstation.com/tachyon/sites/4/2023/05/e6605ccc610490600a5968325b58a8a2e56f83be.jpg?resize=1088%2C612&crop_strategy=smart"
        }
    ]


    return (
        <div >
            <NavBar />
            <div className="mesas">
                {mesas.map(mesa => <CardMesa mesa={mesa} />)}
            </div>
        </div>
    )
}

export default Mesas