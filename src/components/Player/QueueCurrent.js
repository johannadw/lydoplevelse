import { Link } from "react-router-dom"

const QueueCurrent = ({ currentlyPlaying, isPlaying, setIsPlaying }) => {
  return (
    <>
    { currentlyPlaying 
        ? <div className="queue-item">
              <div className="current-info">
                  {/* Toggle play/pause */}
                  { isPlaying 
                    ? <img src={ require("../../assets/icons/pause_black.svg").default } onClick={ () => ( setIsPlaying(!isPlaying) )} className="current-icon icon" />
                    : <img src={require("../../assets/icons/play.svg").default} onClick={ () => ( setIsPlaying(!isPlaying) )} className="current-icon icon" /> }
                    
                  <div className="current-info-about">
                      <Link to={`/article/${ currentlyPlaying.id }`}>
                        <p className="current-title">{ currentlyPlaying.title }</p>
                        { currentlyPlaying.readLoud 
                            ? <> { currentlyPlaying.type == "oplæst artikel" ? <p className="current-theme">Oplæst af { currentlyPlaying.writer }</p> : <p className="current-theme">Automatisk oplæst</p> } </>
                            : "" }

                        { currentlyPlaying.podcast ? <p className="current-theme">Podcast: { currentlyPlaying.podcast }</p> : "" }

                        { currentlyPlaying.duration 
                          ? <div className="current-details">
                              <p className="current-detail">{ currentlyPlaying.date }</p>
                              <div className="current-divider"></div>
                              <p className="current-detail">Resterende lyttetid: { currentlyPlaying.duration }</p>
                            </div>
                          : <div className="current-details">
                              <p className="current-detail">{ currentlyPlaying.date }</p>
                            </div> }
                      </Link>
                  </div>
              </div>

              <div className="current-progress"></div>
          </div>
        : '' }
    </>
  )
}

export default QueueCurrent