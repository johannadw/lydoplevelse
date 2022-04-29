import { useParams } from "react-router";
import PodcastListItem from "./PodcastListItem";


const PodcastList = ({ podcasts, onShowPlayer, queue, addToQueue, onShowQueue, onPlay, checkInQueue }) => {
  const params = useParams();
  const podcast = podcasts.filter( (podcast) => podcast.id == params.id )

  return (
    <div className="podcast-list">
      <h1 className="podcast-name">{ podcast[0].name }</h1>
      <div className="podcast-details">
        <img src={ podcast[0].image } alt="" className="podcast-image" />
        <p className="podcast-about"><span className="podcast-theme">{ podcast[0].theme }. </span>{ podcast[0].teaser }</p>
      </div>
      <div className="podcast-follow">
      <p className="podcast-list-title">Følg { podcast[0].name }</p>
      <img src={ require("../../assets/logo/24syv_logo.svg").default} alt="" className="follow-logo"/>

      </div>
      <div className="podcast-list-queue">
        <p className="podcast-list-title">Alle episoder</p>
          { podcast[0].episodes.map( ( episode ) => ( 
                <PodcastListItem  key={episode.id} 
                                  episode={ episode } 
                                  onShowPlayer={ onShowPlayer } 
                                  onShowQueue={ onShowQueue } 
                                  addToQueue={ addToQueue }
                                  queue={ queue }
                                  onPlay={ onPlay }
                                  checkInQueue={ checkInQueue } /> ) ) }
      </div>
    </div>
  )
}

export default PodcastList