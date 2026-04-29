import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header-custom'>
            <h1>restaurant reservation and seating management</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header