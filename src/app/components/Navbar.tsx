import "../styles/Navbar.css";
import { GrGamepad } from "react-icons/gr";

export default function Navbar() {
    return (
        <nav className="Navbar-main">
            <div className="logo">
                <GrGamepad className="scale-150 mr-4 mb-3"/>
                <a className="gradient_text">Webgames</a>
                </div>
            <div>Navigation</div>
            <div>social icons</div>
        </nav>
    )
}