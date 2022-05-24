import { Link } from "react-router-dom"

const ProfileNav = ({ onToggleProfileNav }) => {
  return (
    <div className="navigation">
        <div className="navigation-side"  onClick={ onToggleProfileNav } ></div>
        <div className="navigation-content">
            <div className="nav-links">
                <p className="nav-welcome">Velkommen Jesper Dalsten</p>
                <div className="nav-link profile-link" >
                    <img src={ require("../assets/icons/settings.svg").default} alt="" className="nav-link-icon"/>
                    <p>Indstillinger</p>
                </div>
                <div className="divider"></div>
                <div className="nav-link profile-link">
                    <img src={ require("../assets/icons/queue_black.svg").default} alt="" className="nav-link-icon"/>
                    <p><Link to="ko" onClick={ onToggleProfileNav } >Lyttekø</Link></p>
                </div>
            </div>

            <div className="nav-highlight">
                <p className="nav-abo">Digital Plus</p>
                <p className="nav-abo-cta">Opgrader</p>
            </div>

            <div className="nav-links">
                <div className="nav-link profile-link">
                    <img src={ require("../assets/icons/abonnement.svg").default} alt="" className="nav-link-icon"/>
                    <p>Abonnement</p>
                </div>
                <div className="divider"></div>
            </div>

            <div className="nav-links logout">
                <div className="nav-link profile-link">
                    <img src={ require("../assets/icons/logout.svg").default} alt="" className="nav-link-icon"/>
                    <p>Log ud</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileNav