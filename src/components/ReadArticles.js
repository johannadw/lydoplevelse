import ReadArticlesItem from "./ReadArticlesItem"

const ReadArticles = ({ articles, onShowPlayer, queue, addToQueue, onShowQueue, onPlay, checkInQueue }) => {
  return (
    <div className="read-articles">
        <div className="heading">
            <img src={ require("../assets/listening_image.svg").default } alt="" className="heading-img" />
            <p className="heading-title">Oplæste artikler</p>
        </div>

        <h1 className="theme-name">Samfund</h1>
        <div className="article-list">
          { articles.map( ( article ) => (
            <div  key={ article.id }>  {
              article.category === "Samfund" 
              ? <ReadArticlesItem article={ article } 
                                  onShowPlayer={ onShowPlayer } 
                                  onShowQueue={ onShowQueue }
                                  addToQueue={ addToQueue }
                                  queue={ queue }
                                  onPlay={ onPlay }
                                  checkInQueue={ checkInQueue } />
              : ""
            }  </div>
           ) ) }
        </div>
        
        <h1 className="theme-name">Kultur</h1>
        <div className="article-list">
          { articles.map( ( article ) => (
            <div  key={ article.id }>  {
              article.category == "Kultur" 
              ? <ReadArticlesItem article={ article }
                                  onShowPlayer={ onShowPlayer }
                                  onShowQueue={ onShowQueue }
                                  addToQueue={ addToQueue }
                                  queue={ queue }
                                  onPlay={ onPlay }
                                  checkInQueue={ checkInQueue } />
              : ""
            }  </div>
           ) ) }
        </div>

        <h1 className="theme-name">Bøger</h1>
        <div className="article-list">
          { articles.map( ( article ) => (
            <div  key={ article.id }>  {
              article.category == "Bøger" 
              ? <ReadArticlesItem article={ article }
                                  onShowPlayer={ onShowPlayer }
                                  onShowQueue={ onShowQueue }
                                  addToQueue={ addToQueue }
                                  queue={ queue }
                                  onPlay={ onPlay }
                                  checkInQueue={ checkInQueue } />
              : ""
            }  </div>
           ) ) }
        </div>

        <h1 className="theme-name">Ideer</h1>
        <div className="article-list">
          { articles.map( ( article ) => (
            <div  key={ article.id }>  {
              article.category == "Ideer" 
              ? <ReadArticlesItem article={ article }
                                  onShowPlayer={ onShowPlayer }
                                  onShowQueue={ onShowQueue }
                                  addToQueue={ addToQueue }
                                  queue={ queue }
                                  onPlay={ onPlay }
                                  checkInQueue={ checkInQueue } />
              : ""
            }  </div>
           ) ) }
        </div>

    </div>
  )
}

export default ReadArticles