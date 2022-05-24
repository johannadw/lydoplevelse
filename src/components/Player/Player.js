import { useState } from 'react';
import MaxiPlayer from './MaxiPlayer';
import MiniPlayer from './MiniPlayer';



const Player = ({ audio, onHidePlayer, currentlyPlaying, onTogglePlaying, isPlaying, playNext, playPrev, playingSpeed, togglePlayingSpeed, currentSpeed }) => {
  let [showMini, setShowMini] = useState(true);

  return (
    <div className="player" >
        { showMini 
            ? <MiniPlayer isPlaying={ isPlaying } 
                          onHidePlayer={ onHidePlayer }
                          onTogglePlaying={ onTogglePlaying } 
                          onTogglePlayerSize={ () => setShowMini( !showMini ) } 
                          currentlyPlaying={ currentlyPlaying }
                          audio={ audio } />
            : <MaxiPlayer isPlaying={ isPlaying } 
                          onTogglePlaying={ onTogglePlaying } 
                          onTogglePlayerSize={ () => setShowMini( !showMini ) } 
                          currentlyPlaying={ currentlyPlaying }
                          playNext={ playNext }
                          playPrev={ playPrev }
                          playingSpeed={ playingSpeed }
                          togglePlayingSpeed={ togglePlayingSpeed } 
                          currentSpeed={ currentSpeed } /> 
        }
    </div>
  )
}

export default Player