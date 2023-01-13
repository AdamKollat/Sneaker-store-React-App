import logo from '../sneaker-logo.png';

const Header = () => {
    return (
    <div class='header'>
            <img class='logo' src={logo} alt="Logo" />
            <h1>The Sneaker Company</h1>
        </div>
    )
}

export default Header;