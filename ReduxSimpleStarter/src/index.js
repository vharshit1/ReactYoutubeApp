import React,{Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash';
const API_KEY = 'AIzaSyCL15S6qpmjsUfbbz8lUuM8UXI2DL1cV_c';

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      videos:[],
    selectedVideo:null
  };
this.videoSearch('grand canyon 4k');

  }

  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos)=>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]

      })
    });

  }

  render(){

const videoSearch= _.debounce((term)=> {this.videoSearch(term)},300)
    return (<div>
    <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      onVideoSelect= {selectedVideo=>this.setState({selectedVideo})}
      videos={this.state.videos}/>

    </div>);}
  }

  ReactDom.render(<App/>,document.querySelector('.container'));
