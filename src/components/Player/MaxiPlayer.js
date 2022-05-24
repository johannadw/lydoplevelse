import PlayIcon from "../Player/PlayIcon"
import PauseIcon from "../Player/PauseIcon"
import PlayerSpeed from "./PlayerSpeed"
import { useState } from "react"
import { Link } from "react-router-dom"
import SpeakerToaster from "./SpeakerToaster"

const MaxiPlayer = ({ onTogglePlaying, onTogglePlayerSize, currentlyPlaying, isPlaying, playNext, playPrev, playingSpeed, togglePlayingSpeed, currentSpeed }) => {
    let [showPlayerSpeed, setShowPlayerSpeed] = useState( false )
    let [showSpeakerToaster, setShowSpeakerToaster] = useState( false )

    return (
    <div className="maxi-player">
        <div className="maxi-player-top">
            <div className="player-header">
                <div className="hidden-icon"></div>
                <p className="player-type">{currentlyPlaying.type}</p>
                <img src={ require("../../assets/icons/close.svg").default } alt="" className="icon close-player-icon " onClick={ onTogglePlayerSize } />
            </div>
            <img src={ currentlyPlaying.image } className="background-image" alt="" style={{ height: "320px" }}/>
        </div>

        <div className="maxi-player-bottom">
            <div className="player-info">
                { currentlyPlaying.podcast ? <p className="player-info-item info-detail">{ currentlyPlaying.podcast }</p> : '' }
                { currentlyPlaying.writer ? <p className="player-info-item info-detail" >Oplæst af { currentlyPlaying.writer }</p> : ''}
                <h1 className="player-info-item info-title">{ currentlyPlaying.title }</h1>
                <p className="player-info-item info-date">{ currentlyPlaying.date }</p>
            </div>

            <div className="player-audio">
                <div className="progress">
                    <p className="played">2.52</p>
                    <div className="progress-bar"><div className="progress-bar-btn"></div></div>
                    <p className="time-left">-0.12</p>
                </div>

                <div className="player-toggles">
                    <img src={ require("../../assets/icons/backward.svg").default } alt="" className="icon backward-icon toggle-icon" onClick={ () => ( playPrev(currentlyPlaying) ) } />
                    <img src={ require("../../assets/icons/backward_seconds.svg").default } alt="" className="icon backward-seconds-icon toggle-icon" />
                    <div className="play-pause" onClick={ onTogglePlaying }>{ isPlaying ? <PauseIcon /> : <PlayIcon /> }</div>
                    <img src={ require("../../assets/icons/forward_seconds.svg").default } alt="" className="icon forward-seconds-icon toggle-icon" />
                    <img src={ require("../../assets/icons/forward.svg").default } alt="" className="icon forward-icon toggle-icon" onClick={ () => ( playNext(currentlyPlaying) ) } />
                </div>

                <div className="player-settings">
                    <img src={ require("../../assets/icons/devices.svg").default } alt="" className="icon device-icon settings-icon" onClick={ () => setShowSpeakerToaster(true)} />                   
                    <p className="timing" onClick={ () => setShowPlayerSpeed(!showPlayerSpeed) } >{ currentSpeed ? currentSpeed.speed : "" }</p>                 
                    <Link to="ko" >
                        <img src={ require("../../assets/icons/queue.svg").default } alt="" className="icon queue-icon settings-icon" />
                    </Link>
                </div>
            </div>
        </div>
        
        { showSpeakerToaster ? <SpeakerToaster setShowSpeakerToaster={ setShowSpeakerToaster } /> : '' }
        { showPlayerSpeed && <PlayerSpeed onTogglePlayerSpeed={ () => setShowPlayerSpeed(!showPlayerSpeed) } playingSpeed={ playingSpeed } togglePlayingSpeed={ togglePlayingSpeed } currentImage={currentlyPlaying.image} /> }
    </div>
    )
}

export default MaxiPlayer