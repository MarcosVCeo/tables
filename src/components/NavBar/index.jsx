import { useTheme } from '../../ThemeContext/ThemeContext';
import './NavBar.css'

const NavBar = () => {

    const { fontePrimaria } = useTheme();

    return (
        <div>
            <nav className='navbar'>
                <a href='/'><img src='images/logo.png' ></img></a>
                <a style={{ fontFamily: fontePrimaria }} className="home" href='/'>Home</a>
                <a style={{ fontFamily: fontePrimaria }} href="/mesas">Mesas</a>
                <a style={{ fontFamily: fontePrimaria }}>Alguma coisa</a>
            </nav>
        </div>
    )
}

export default NavBar