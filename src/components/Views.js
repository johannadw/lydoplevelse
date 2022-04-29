import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home"
import Article from './Article';
import ReadArticles from './ReadArticles';
import Podcasts from './Player/Podcasts';
import Queue from './Player/Queue';
import ReadArticlesItem from './ReadArticlesItem';
import PodcastList from './Player/PodcastList';
import PodcastItem from './Player/PodcastItem';
import PodcastListItem from './Player/PodcastListItem';
import Main from './Main';

const Views = () => {
  return (
    <Routes>
        {/* <Route path="/" element={ <Main /> } /> */}
        <Route path="/" element={ <Home /> } />
        <Route path="artikel" element={ <Article /> } />
        <Route path="oplaeste-artikler" element={ <ReadArticles /> } />
        <Route path="podcasts" element={ <Podcasts /> } />
        <Route path="podcasts/list" element={ <PodcastList /> } />
        <Route path="ko" element={ <Queue /> } />
    </Routes>
  )
}

export default Views