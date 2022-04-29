import { useRef } from "react"
import { useDrag, useDrop } from "react-dnd"
import { Link } from "react-router-dom"


const QueueListItem = ({ queueItem, editQueue, removeFromQueue, playFromQueue, index, moveQueueListItem }) => {

  // useDrag - the list item is draggable
  const [{ isDragging }, dragRef] = useDrag({
    type: 'item',
    item: { index },
    collect: ( monitor ) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  // useDrop - the list item is a drop area
  const [spec, dropRef] = useDrop({
    accept: 'item',
    hover: (item, monitor) => {
      const dragIndex = item.index
      const hoverIndex = index
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top
      
      // if dragging down, continue only when hover is smaller than middle Y
      if ( dragIndex < hoverIndex && hoverActualY < hoverMiddleY ) return
      // if dragging up, continue only when hover is bigger than middle Y
      if ( dragIndex > hoverIndex && hoverActualY > hoverMiddleY ) return
      
      moveQueueListItem(dragIndex, hoverIndex)
      item.index = hoverIndex
    }
  })

  // Join 2 refs together into 1
  const ref = useRef(null)
  const dragDropRef = dragRef(dropRef(ref))

  // Make items being dragged transparent
  const opacity = isDragging ? 0.2 : 1

  return (
    <>
    { editQueue 
      ? <div className="queue-item" style={{ opacity }}    >
          <div className={`current-info ${ editQueue ? 'edit-queue' : '' }`}>
            <img src={ require("../../assets/icons/close_black.svg").default } alt="" className="remove-icon" onClick={ () => ( removeFromQueue(queueItem) )} />
            <div className="current-info-about" onClick={ () => ( editQueue ? '' : playFromQueue( queueItem ) ) } >
              <p className="current-title">{ queueItem.title }</p>

              { queueItem.readLoud 
                  ? <> { queueItem.type == "oplæst artikel" ? <p className="current-reading">Oplæst af {queueItem.writer}</p> : <p className="current-reading">Automatisk oplæst</p> } </>
                  : ""
              }
              { queueItem.podcast ? <p className="current-reading">Podcast: {queueItem.podcast}</p> : "" }

              { queueItem.duration 
                ? <div className="current-details">
                    <p className="current-detail">{ queueItem.date }</p>
                    <div className="current-divider"></div>
                    <p className="current-detail">Lyttetid: { queueItem.duration }</p>
                  </div>
                : <div className="current-details">
                    <p className="current-detail">{ queueItem.date }</p>
                  </div> }
            </div>
            <div className="change-order">
              <img src={ require("../../assets/icons/change_order.svg").default } alt="" className="change-icon" ref={ dragDropRef }/>
            </div>
          </div>
        </div>
      : <div className="queue-item" >
          <div className={`current-info ${ editQueue ? 'edit-queue' : '' }`}>
            <img src={ require("../../assets/icons/play.svg").default } alt="" className="current-icon" onClick={ () => ( editQueue ? '' : playFromQueue( queueItem ) ) }/>
            <Link to={`/article/${ queueItem.id }`}>
              <div className="current-info-about"  >
                <p className="current-title">{ queueItem.title }</p>

                { queueItem.readLoud 
                    ? <> { queueItem.type == "oplæst artikel" ? <p className="current-reading">Oplæst af {queueItem.writer}</p> : <p className="current-reading">Automatisk oplæst</p> } </>
                    : ""
                }
                { queueItem.podcast ? <p className="current-reading">Podcast: {queueItem.podcast}</p> : "" }

                { queueItem.duration 
                  ? <div className="current-details">
                      <p className="current-detail">{ queueItem.date }</p>
                      <div className="current-divider"></div>
                      <p className="current-detail">Lyttetid: { queueItem.duration }</p>
                    </div>
                  : <div className="current-details">
                      <p className="current-detail">{ queueItem.date }</p>
                    </div> }
              </div>
            </Link>
          </div>
        </div>
    }
    </>
  )
}

export default QueueListItem