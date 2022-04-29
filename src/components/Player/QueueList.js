import { useCallback } from 'react'
import QueueListItem from './QueueListItem'

const QueueList = ({ queue, editQueue, removeFromQueue, playFromQueue, setQueue }) => {

  const moveQueueListItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = queue[dragIndex]
      const hoverItem = queue[hoverIndex]
      // swap places of dragItem and hoverItem in the queue array
      setQueue( queue => {
        const updatedQueue = [...queue]
        updatedQueue[dragIndex] = hoverItem
        updatedQueue[hoverIndex] = dragItem
        return updatedQueue
      })
    }, [ queue ],
  )
  
  return (
    <div>
      { queue.map( ( queueItem, index ) => (       
        <QueueListItem  key={ queueItem.id }
                        queueItem={ queueItem }
                        removeFromQueue={ removeFromQueue }
                        editQueue={ editQueue }
                        playFromQueue={ playFromQueue }
                        index= { index }
                        moveQueueListItem={ moveQueueListItem } />
      ) ) }
    </div>
  )
}

export default QueueList