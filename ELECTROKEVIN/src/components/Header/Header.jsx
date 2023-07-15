import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return (
    <header>

        <>
        
            <div className="logo">
                <h1 className="logo_name">ELECTROKEVIN</h1>
            </div>

            <nav>
                <ul className="nav_links">
                    <li className="li_links"><Link className="nav_link" to="/">Inicio</Link></li>
                    <li className="li_links"><Link className="nav_link" to="/products/computadoras">Computadoras</Link></li>
                    <li className="li_links"><Link className="nav_link" to="/products/parlantes">Parlantes</Link></li>
                    <li className="li_links"><Link className="nav_link" to="/products/televisores">Televisores</Link></li>
                    <li className="li_links"><Link className="nav_link" to="/products/celulares">Celulares</Link>  </li>
                </ul>
            </nav>
            
            <button className="nav_link_button"><Link className="nav_link size-img-buton-link">🛒</Link></button>
        </>
        
    </header>
    )
}
