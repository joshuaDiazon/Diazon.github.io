import { Card } from "antd";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                <Card className="links">
                    <Link to="/power">Strongest Pokemon</Link>
                    <Link to="/weak">Weakest Pokemon</Link>
                    <Link to="/fav">Favorite</Link>
                </Card>
            </nav>
        </div>
    );
}

export default NavBar;