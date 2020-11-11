import './NavBar.css';

export const NavBar = () => {

    return (
        <div className="containerNav">
            <ul className="list">
                <li className="item">Overview</li>
                <li className="item">Detail</li>
                <li className="item">Services</li>
                <li className="item">Projects</li>
                <li className="item">Contact Us</li>
            </ul>
        </div>
    );
}