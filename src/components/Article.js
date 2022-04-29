import { useParams } from "react-router"

const Article = ({ articles, onPlay, addToQueue, checkInQueue }) => {
  const params = useParams();
  const article = articles.filter( (article) => article.id == params.id )
  
  return (
    <div className="article">
        <p className="article-intro"><span className="article-theme">{ article[0].theme }. </span>{ article[0].teaser }</p>
        <h1 className="article-title">{ article[0].title }</h1>
        <div className="article-writer">
        <p className="article-writer-name">{ article[0].writer }</p>
        </div>
        { article[0].readLoud
          ? <div className="listen-toggles">
              { checkInQueue(article[0]) 
                  ? <img src={ require("../assets/icons/added_to_queue.svg").default } alt="" className="icon icon-listen-queue" /> 
                  : <img src={ require("../assets/icons/queue_add.svg").default } alt="" className="icon icon-listen-queue" onClick={ () => ( addToQueue(article[0]) ) } /> 
              } 
              <div className="listen-toggle" onClick={ () => { onPlay(article[0]) } } >
                  <img src={ require("../assets/icons/play.svg").default } alt="" className="icon listen-toggle-icon" />
                  <p className="listen-toggle-label" >Lyt til artiklen</p>
              </div>
              <div className="listen-toggle">
                  {article[0].type == "oplæst artikel" ? <img src={ require("../assets/icons/read_article_blue.svg").default } className="icon listen-toggle-icon" alt="" /> : ''}
                  <p className="listen-toggle-label">{ article[0].duration }.</p>
              </div>
            </div>
          : ''
        }
        <p className="article-text">
        { article[0].content } 
        <br/>
        <br/>
        { article[0].image !== "" ? <img src={ article[0].image } alt="" className="article-image" /> : ""}
        <br/>
        { article[0].content }
        </p>
    </div>
  )
}

export default Article