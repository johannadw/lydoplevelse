import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate'; 

const ReadArticlesItem = ({ article, addToQueue, onPlay, checkInQueue }) => {
  
  return (
    <>
    { article.readLoud ?
      <div className="read-articles-list-item">
          <div className="item-icons">
              <img src={ require("../assets/icons/play_read.svg").default } alt="" className="icon item-icon" onClick={ () => (onPlay(article)) } />
              { checkInQueue(article) 
                ? <img src={ require("../assets/icons/added_to_queue.svg").default } alt="" className="icon item-icon" /> 
                : <img src={ require("../assets/icons/queue_add.svg").default } alt="" className="icon item-icon" onClick={ () => ( addToQueue(article) ) } /> 
            } 
              {/* <img src={ require("../assets/icons/queue_add.svg").default } alt="" className="icon item-icon" onClick={ () => (addToQueue(article)) } /> */}
          </div>
          
          <div className="article-info">
            <Link to={`/article/${article.id}`}>
              <h2 className="article-title">{ article.title }</h2>

              <div className="article-content">
                  <TextTruncate  line={2}  element="p"  truncateText="…"  text={ article.content }  />
              </div>

              <p className="article-writer">Af <span className="article-writer-bold">{ article.writer }</span></p>
            </Link>
          </div>
      </div>
      : ''
    }
    </>
  )
}

export default ReadArticlesItem