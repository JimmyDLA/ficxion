import './__style__.css';

export const NavBar = () => {

    return (
        <div className="containerNav">
            <ul className="list">
                <li className="item">Home</li>
                <li className="item">Overview</li>
                <li className="item">Services</li>
                <li className="item">Projects</li>
                <li className="item">Contact Us</li>
            </ul>
        </div>
    );
}