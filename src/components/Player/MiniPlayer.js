import TextTruncate from 'react-text-truncate'; 
import PauseIcon from './PauseIcon';
import PlayIcon from './PlayIcon';

const MiniPlayer = ({ onHidePlayer, isPlaying, onTogglePlaying, onTogglePlayerSize, currentlyPlaying, audio }) => {
  return (
    <div className="mini-player" >
      <div className="mini-player-progress">
        <div className="mini-player-progress-done"></div>
        <div className="mini-player-progress-todo"></div>
      </div>

      <div className="mini">
        <div className="mini-player-left">
          <img src={ require("../../assets/icons/close.svg").default } alt="" className='icon close-icon' onClick={ onHidePlayer }/>
          <div className="mini-player-content" onClick={ onTogglePlayerSize }>
              <TextTruncate line={2} element="p" truncateText="…" text={ currentlyPlaying.title } />
          </div>
        </div>

        <div className="play-pause" onClick={ onTogglePlaying }>
          { isPlaying 
                ? <PauseIcon onClick={ () => ( audio.play() ) } color={ "white" } /> 
                : <PlayIcon /> }
        </div>
      </div>
    </div>
  )
}

export default MiniPlayer