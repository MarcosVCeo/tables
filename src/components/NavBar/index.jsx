import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav className='navbar'>
                <a href='/'><img src='images/logo.png' ></img></a>
                <a className="home" href='/'>Home</a>
                <a href="/mesas">Mesas</a>
                <a>Alguma coisa</a>
            </nav>
        </div>
    )
}

export default NavBar