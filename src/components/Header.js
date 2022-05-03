import { Link } from "react-router-dom";
import Navigation from './Navigation';
import ProfileNav from "./ProfileNav";


const Header = ({ navigation, setNavigation, profileNav, setProfileNav }) => {
  return (
    <header className={`header ${ navigation ? "menu-open" : ""} ${ profileNav ? "menu-open" : ""}`}>
      <div className={`header-top ${ navigation ? "header-fixed" : ""} ${ profileNav ? "header-fixed" : ""}`}>
        <Link to="/" onClick={ () => { setNavigation(false); setProfileNav(false) } }>
        <img src={ require("../assets/logo/W_logo_big.svg").default } alt="" className="logo" />
        </Link>
        <div className="header-items">
          { !profileNav && <div className="header-item"  onClick={() => {setProfileNav(!profileNav); setNavigation(false)}}>
            <div className="header-icon">
            <img src={ require("../assets/icons/profile.svg").default } alt="" className="icon icon-profile" />
            </div>
            <p className="header-item-label">Profil</p>
          </div> }
          { profileNav && <div className="header-item" onClick={() => {setProfileNav(!profileNav)}}>
            <div className="header-icon">
            <img src={ require("../assets/icons/close_black.svg").default } alt="" className="icon header-icon icon-close" />
            </div>
            <p className="header-item-label">Luk</p>
          </div> } 
          { !navigation && <div className="header-item" onClick={() => {setNavigation(!navigation); setProfileNav(false)}}>
            <div className="header-icon">
            <img src={ require("../assets/icons/hamburger.svg").default } alt="" className="icon header-icon icon-hamburger" />
            </div>
            <p className="header-item-label">Menu</p>
          </div> }
          { navigation && <div className="header-item" onClick={() => setNavigation(!navigation)}>
            <div className="header-icon">
            <img src={ require("../assets/icons/close_black.svg").default } alt="" className="icon header-icon icon-close" />
            </div>
            <p className="header-item-label">Luk</p>
          </div> } 
        </div>
      </div>
      {navigation && <Navigation onToggleNavigation={ () => setNavigation(false) } /> }
      {profileNav && <ProfileNav  onToggleProfileNav={ () => setProfileNav(false)} /> }
    </header>
  )
}

export default Header