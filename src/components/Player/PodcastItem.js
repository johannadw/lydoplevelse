import { Link } from "react-router-dom"

const PodcastItem = ({ podcast }) => {
  return (
    <Link to={`/podcasts/${podcast.id}`}>
      <div className="podcast-item">
          <img src={ podcast.image } alt="" className="podcast-image" />
          <p className="podcast-about"><span className="podcast-theme">{podcast.theme}. </span>{ podcast.teaser }</p>
          <h1 className="podcast-name">{ podcast.name }</h1>
      </div>
    </Link>
  )
}

export default PodcastItem