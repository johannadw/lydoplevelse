import { useState } from 'react'
// import { DndProvider } from 'react-dnd';
// import { TouchBackend } from 'react-dnd-touch-backend'
// import { HTML5Backend } from 'react-dnd-html5-backend';
import { useNavigate } from 'react-router';
import QueueCurrent from './QueueCurrent';
import QueueList from './QueueList';

const Queue = ({ queue, currentlyPlaying, isPlaying, setIsPlaying, removeFromQueue, resetQueue, playFromQueue, setQueue }) => {
    const [editQueue, setEditQueue] = useState(false);
    let navigate = useNavigate();

    return (
    <div className="queue">
        <div className="queue-heading">
            <div className="queue-heading-title">
                <img src={ require("../../assets/icons/queue_black.svg").default } alt="" className="icon queue-heading-title-icon" />
                <p className="heading-title">Lyttekø</p>
            </div>
            <img src={ require("../../assets/icons/close_black.svg").default } alt="" className="icon queue-close-icon" onClick={ () => { navigate(-1) } } />
        </div>
        
        <div className="queue-edit">
            { !editQueue && <div className="queue-edit-action hide-edit">
                                <img src={ require("../../assets/icons/edit.svg").default } alt="" className="queue-edit-icon icon" />
                                <p className="queue-edit-label">Redigér liste</p>
                            </div> }
            { !editQueue && <div className="queue-edit-action" onClick={() => setEditQueue(!editQueue)} >
                                <img src={ require("../../assets/icons/edit.svg").default } alt="" className="queue-edit-icon icon" />
                                <p className="queue-edit-label">Redigér liste</p>
                            </div> }

            { editQueue &&  <div className="queue-edit-action" onClick={ resetQueue } >
                                <img src={ require("../../assets/icons/trash.svg").default } alt="" className="queue-edit-icon icon" />
                                <p className="queue-edit-label">Ryd kø</p>
                            </div> }
            { editQueue &&  <div className="queue-edit-action" onClick={() => setEditQueue(!editQueue)} >
                                <img src={ require("../../assets/icons/edit_done.svg").default } alt="" className="queue-edit-icon icon" />
                                <p className="queue-edit-label">Afslut</p>
                            </div> }
        </div>
        
        <div className="queue-list">
            <QueueCurrent currentlyPlaying={ currentlyPlaying } isPlaying={ isPlaying } setIsPlaying={ setIsPlaying } /> 
            { queue.length === 0 
                ?   <div className="queue-list">
                        <h2>Nothing in the queue yet</h2>
                    </div>
                :   <div>
                        <h2>Næste i lyttekøen</h2>
                        {/* <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}> */}
                        <QueueList queue={ queue } editQueue={ editQueue } removeFromQueue={ removeFromQueue } playFromQueue={ playFromQueue } setQueue={ setQueue } />
                        {/* </DndProvider> */}
                        {/* <DndProvider backend={HTML5Backend}>
                            <QueueList queue={ queue } editQueue={ editQueue } removeFromQueue={ removeFromQueue } playFromQueue={ playFromQueue } setQueue={ setQueue } />
                        </DndProvider> */}
                    </div> }
        </div>
    
    </div>
    )
}

export default Queue