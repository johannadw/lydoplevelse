import PodcastItem from "../Player/PodcastItem"

const Podcasts = ({ podcasts }) => {
  return (
    <div className="podcasts">
        <img src={ require("../../assets/listening_image.svg").default } alt="" className="podcasts-heading"/>
        {podcasts.map( ( podcast ) => ( <PodcastItem podcast={ podcast } key={ podcast.id } /> ))}
    </div>
  )
}

export default Podcasts