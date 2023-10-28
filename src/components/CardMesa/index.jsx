import { useTheme } from '../../contexts/ThemeContext'
import './CardMesa.css'

const CardMesa = ({ mesa }) => {

    const { fontePrimaria } = useTheme()

    const urlLinkMesa = `/mesa/${mesa.id}`

    return (
        <a className='card-mesa' href={urlLinkMesa}>
            <h2 className='card-title' style={{ fontFamily: fontePrimaria, color: 'black' }}>{mesa.nome}</h2>
            < div className='card-mesa_infos' >
                <div className="card-image">
                    <img src={mesa.imagem}></img>
                </div>
                <div className='informacoes-mesa'>
                    <p className='descricao' style={{ fontFamily: fontePrimaria, color: 'black' }}>{mesa.descricao}</p>
                    <h3 className='mestre' style={{ fontFamily: fontePrimaria, color: 'black' }}>Mestre: {mesa.mestre}</h3>
                </div>
            </div >
        </a >
    )
}

export default CardMesa