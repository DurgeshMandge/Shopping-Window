import { logoURL } from "../constants.js";

const Header=()=>{
    return(
        <div className="nav">
            <div className="nav-item">
                <ul className="services">
                    <li className="items">Home</li>
                    <li className="items">About</li>
                    <li className="items">Contact</li>
                </ul>
            </div>

            <div className="second">
                <a><img src = {logoURL} alt="Shopify"></img></a>
            </div>
            
            <div className="nav-item">
                <li className="items">Cart</li>
            </div>
        </div>
    );
}

export default Header;