import './CardMesa.css'

const CardMesa = ({ mesa }) => {
    return (
        <div className='card-mesa'>
            <div>
                <img src={mesa.imagem}></img>
            </div>
            <div className='informacoes-mesa'>
                <h2>{mesa.nome}</h2>
            </div>
        </div>
    )
}

export default CardMesa