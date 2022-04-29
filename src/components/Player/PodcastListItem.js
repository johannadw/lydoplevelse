import React from 'react'
import TextTruncate from 'react-text-truncate'; 


const PodcastListItem = ({ episode, addToQueue, onPlay, checkInQueue }) => {

  return (
    <div className="podcast-list-item">
        <div className="item-info">
            <div className="item-toggles">
              <img src={ require("../../assets/icons/play.svg").default } alt="" className="item-icon" onClick={ () => (onPlay(episode)) } />
              { checkInQueue(episode) 
                ? <img src={ require("../../assets/icons/added_to_queue.svg").default } alt="" className="icon icon-listen-toggle" /> 
                : <img src={ require("../../assets/icons/queue_add.svg").default } alt="" className="icon icon-listen-toggle" onClick={ () => ( addToQueue(episode) ) } /> 
            } 
            </div>
              <div className="item-info-about">
                  <p className="item-title">{ episode.title }</p>
                  <div className="item-content">
                    <TextTruncate 
                            line={2}
                            element="p"
                            truncateText="…"
                            text={ episode.teaser }
                            />
                  </div>
                  <div className="item-details">
                      <p className="item-detail">{ episode.date }</p>
                      <div className="item-divider"></div>
                      <p className="item-detail">Lyttetid: { episode.duration }</p>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default PodcastListItem