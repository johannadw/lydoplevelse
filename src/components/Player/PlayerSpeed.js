const PlayerSpeed = ({ onTogglePlayerSpeed, playingSpeed, togglePlayingSpeed, currentImage }) => {

  return (
    <div className="player-speed">
      <div className="player-speed-top" style={{ backgroundImage: `url(${currentImage})`}}>
      </div>
      <div className="player-speed-bottom">
        <div className="player-speed-heading" >
          <img src={ require("../../assets/icons/close.svg").default } alt="" className="icon close-player-icon hide-icon" />
            <p className="player-speed-title">Skift hastighed</p>
          <img src={ require("../../assets/icons/close.svg").default } alt="" className="icon close-player-icon" onClick={ onTogglePlayerSpeed } />
        </div>

        <div className="player-speeds">
            <div className="speeds">
              { playingSpeed.map( ( playingSpeedItem, index ) => (
                  <div className="speed-item" key={index}>
                    <img src={ require("../../assets/icons/checked.svg").default } style={ playingSpeedItem.selected ? { opacity: 1 } : { opacity: 0 } } alt="" /> 
                    <p className={`speed ${ playingSpeedItem.selected ? 'selected-speed' : '' } `}  onClick={ () => ( togglePlayingSpeed( playingSpeedItem ) ) }>
                      { playingSpeedItem.speed }
                    </p>
                  </div>
                ) )}
            </div>
          </div>
      </div>
    </div>
  )
}

export default PlayerSpeed