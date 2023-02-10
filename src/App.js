import React, {Component} from 'react';
// import logo from './logo.svg';
import './CSS/App.css';
import './CSS/Loading.css';
import './CSS/WorkExperience.css';
import './CSS/Nav.css';
import './CSS/Social.css';
import './CSS/Glitch.css';
import './CSS/Edu.css';
import './CSS/card.style.css';
import './CSS/Badges.css';
import './CSS/Projects.css';

import Loading from './containers/Loading'

import Header from './components/Header.js';
// const fetchURL = "https://dev.to/api/articles?username=caffiendkitten&page=1";
const username = "caffiendkitten";

const articlez = []
const articleContentz = []
const wordCountArray = []
const tempIDList = []

class App extends Component {
    state = {
      done: false,
      addClass: false,
      navClass: "",
      articlezList: [],
      data: [],
      author: "", 
      profile_image_90: "",
      articleContent: [], 
      wordCountArrayz: []
  }


  componentDidMount(){
    this.fetchArticles()
  }

  async getWordCount(articleNum, wordz){
    let wordCountz = wordz.match(/\w+/g).length;
    wordCountArray.push(wordCountz)

    let datatest = this.state.data  
    let newArray = [...datatest]
    let elementWordId = datatest.findIndex(element => element.id === articleNum)
    newArray[elementWordId] = {...newArray[elementWordId], word_count: wordCountz}     
    return this.setState({
      data:  newArray,
      done: true
    })      

    // At this point each it will return each individual word count
  }

  async fetchArticle(articleNum){
    return await fetch("https://dev.to/api/articles/"+articleNum)
    .then(res=>res.json())
    .then(d=>{
      // "d" is each article object here

      // let singlePoint  =  `<span>${d["body_html"].toString()}</span>`
      let wordcount = this.getWordCount(articleNum, d["body_html"])

      // WordCount is a "promise" here and will be filled
      return wordcount
             
    })  
  }


  async fetchArticles(){
    await fetch("https://dev.to/api/articles?username="+username)
    .then(res=>res.json())
    .then(s=>{
      // "s" is an object and is length 30 here

      for (const article in s) {
        articlez.push(s[article])
      }
      this.setState({
          data: s,
          author: s[0]["user"]["name"],
          profile_image_90: s[0]["user"]["profile_image_90"],
          articlezList: articlez, 
          articleContent: articleContentz
      })              
    }) 
    
    let articlesArray = articlez
    for (const article in articlesArray) {
      let tempID = articlesArray[article]["id"]
      let value1 = this.fetchArticle(tempID)
      tempIDList.push(value1)

    }
    return 
  } 

  render () {
    return (
    <div className="App">
        {this.state.done === false?//articlez.length === 0 ?//|| articleContentz.length == 29?
          <Loading />
          :
        <Header 
          // addClass={this.state.addClass}
          // navClass={this.state.navClass}
          data={this.state.data}
          author={this.state.author}
          articlezList={this.state.articlezList}
          profile_image_90={this.state.profile_image_90}
          // articleContent={this.state.articleContent}
          // wordCountArrayz={this.state.wordCountArrayz}
          done={this.state.done}
        />
         
      }


        

    </div>
    );
  }
}

export default App;