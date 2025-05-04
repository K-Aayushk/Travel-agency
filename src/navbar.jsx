import './navbar.css';
import Logo from './assets/travel-agency-ui-logo-removebg-preview.jpg'
import searching from './assets/magnifying-glass.png';


function navbar(){
    return(
        <div className="navbar-container">
            <div className="logo-container">
                <img src={Logo} alt="logo" />
                <h3>TRAVEL AGENCY</h3>
            </div>
            <div className="navbar-list">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <img src={searching} alt="search icon" id='search-img'/>
        </div>
    );
}


export default navbar;