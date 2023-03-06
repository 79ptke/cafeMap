import './common.css';
import Logo from '../img/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>© 2022 Jungdahee.All Right Reserved.</p>
                <img src={Logo} alt="cafe map logo"/>
            </div>
        </footer>
    )
}

export default Footer;