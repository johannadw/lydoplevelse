import React from 'react'

const ChangeQueueToaster = ({ setShowChangeQueueToaster }) => {
  return (
    <div className="change-queue-toaster">
      <div className="change-queue-container">
        <p>Ved hjælp af dette ikon vil du kunne rykke rundt på rækkefølgen af de oplæste artikler.</p>
        <br />
        <br />
        <p className='back' onClick={ () => setShowChangeQueueToaster(false)} >Gå tilbage</p>
      </div>
    </div>
  )
}

export default ChangeQueueToaster