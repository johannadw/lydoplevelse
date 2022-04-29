import { Link } from "react-router-dom"

const Navigation = ({ onToggleNavigation }) => {
  return (
    <div className="navigation">
        <div className="navigation-side"></div>
        <div className="navigation-content">
            <div className="nav-links">
                <h1><Link to="/" onClick={ onToggleNavigation }>Samfund</Link></h1>
                <h1><Link to="/" onClick={ onToggleNavigation }>Kultur</Link></h1>
                <h1><Link to="/" onClick={ onToggleNavigation }>Bøger</Link></h1>
                <h1><Link to="/" onClick={ onToggleNavigation }>Ideer</Link></h1>
            </div>
            <div className="nav-search">
                <img src={ require("../assets/icons/search.svg").default } alt="" className="icon nav-icon" />
                <p className="nav-search-label">Søg</p>
            </div>
            <div className="nav-links">
                <div className="nav-link">
                    <img src={ require("../assets/icons/read_articles.svg").default } alt="" className="icon nav-icon" />
                    <p><Link to="/oplaeste-artikler" onClick={ onToggleNavigation } >Oplæste artikler</Link></p>
                </div>
                <div className="nav-link">
                    <img src={ require("../assets/icons/podcast.svg").default } alt="" className="icon nav-icon" />
                    <p><Link to="/podcasts" onClick={ onToggleNavigation }>Podcast</Link></p>
                </div>
                <div className="nav-link">
                    <img src={ require("../assets/icons/newsletter.svg").default } alt="" className="icon nav-icon" />
                    <p><Link to="/" onClick={ onToggleNavigation }>Nyhedsbreve</Link></p>
                </div>
                <div className="nav-link">
                    <img src={ require("../assets/icons/e-paper.svg").default } alt="" className="icon nav-icon" />
                    <p><Link to="/" onClick={ onToggleNavigation }>E-avis</Link></p>
                </div>
            </div>
            <div className="nav-links nav-cta">
                <p className="nav-cta-item">Køb abonnement</p>
                <p className="nav-cta-item">Kontakt</p>
            </div>
        </div>
    </div>
  )
}

export default Navigation