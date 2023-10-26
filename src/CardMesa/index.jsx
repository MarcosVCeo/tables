import { useTheme } from '../../contexts/ThemeContext'
import './CardMesa.css'

const CardMesa = ({ mesa }) => {

    const { fontePrimaria } = useTheme()

    return (
        <div className='card-mesa'>
            <h2 className='card-title' style={{ fontFamily: fontePrimaria }}>{mesa.nome}</h2>
            <div className='card-mesa_infos'>
                <div className="card-image">
                    <img src={mesa.imagem}></img>
                </div>
                <div className='informacoes-mesa'>
                    <p className='descricao' style={{ fontFamily: fontePrimaria }}>{mesa.descricao}</p>
                    <h3 className='mestre' style={{ fontFamily: fontePrimaria }}>Mestre: {mesa.mestre}</h3>
                </div>
            </div>
        </div >
    )
}

export default CardMesa