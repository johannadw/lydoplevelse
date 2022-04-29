import React from 'react'

const SpeakerToaster = ({ setShowSpeakerToaster }) => {
  return (
    <div className="speaker-toaster">
        <div className="speaker-container">
            <p>Her kommer der til at være en liste over eksterne enheder.</p>
            <br />
            <br />
            <p className='back' onClick={ () => setShowSpeakerToaster(false)} >Gå tilbage</p>
        </div>
    </div>
  )
}

export default SpeakerToaster