import { Link } from "react-router-dom"

const Home = ({ articles, onPlay }) => {

  return (
    <div className="content">   
        { articles.map( function(article, id) {
          if ( article.size == 'large') {
            return (  <Link to={`/article/${article.id}`} key={article.id} >
                        <div className="teaser-large">
                            { article.image !== "" ? <img src={ article.image } alt="" className="teaser-image" /> : ""}
                            <p className="teaser-theme">{ article.theme }</p>
                            <h1 className="teaser-title">{ article.title }</h1>
                            <p className="teaser-content">{ article.teaser }</p>
                            { article.readLoud ?
                              <div className="teaser-sound">
                                  { article.type == "oplæst artikel" ? <img src={ require("../assets/icons/read_article_blue.svg").default } alt="" className='teaser-image' /> : "" }
                                  <p className="teaser-writer">{ article.writer }</p>
                              </div>
                              : <div className="teaser-sound">
                                    <p className="teaser-writer">{ article.writer }</p>
                                </div>
                            }
                        </div>
                      </Link> )
          } else {
            return (  <Link  to={`/article/${article.id}`} key={article.id} >
                        <div className="teaser-small">
                            { article.image !== "" ? 
                              <div className="teaser-image-container">
                              <img src={ article.image } alt="" className="teaser-image" />
                              </div>
                             : ""}
                            <div className="teaser-content">
                              <p className="teaser-theme">{ article.theme }</p>
                              <h1 className="teaser-title">{ article.title }</h1>
                              { article.readLoud ?
                                <div className="teaser-sound">
                                    { article.type == "oplæst artikel" ? <img src={ require("../assets/icons/read_article_blue.svg").default } alt="" className='teaser-image' /> : "" }
                                    <p className="teaser-writer">{ article.writer }</p>
                                </div>
                                : <p className="teaser-writer">{ article.writer }</p>
                              }
                            </div>
                        </div>
                      </Link>
            )
          }
        }
      )} 
    </div>
  )
}

export default Home