import React, {Fragment} from 'react';

let SingleArticle = ""
let articleGroup = []
let articleList = document.getElementsByClassName("cardzContent")
const avgWordsPerMin = 250;


class DevCard extends React.Component {
   state = {
      data: this.props.data,
      done: this.props.done,
      countz: 0
   }

   componentDidUpdate(){
      this.state.countz += 1
   }




   renderHeader(){
      return <div className="cardHeader">
         <img className="dev-logo" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="DEV widget logo" />

         <img className="profile-pic" src={this.props.profile_image_90} alt="{this.props.author}'s DEV Profile" />
         <div className="name-container" >
            <span>{this.props.author}</span>
            <div className="view-profile-container">
               <a target="_blank"   rel="noopener noreferrer" className="view-profile-button" href='https://dev.to/caffiendkitten'>View Profile</a>
            </div>           
         </div>
      </div>
   }


   renderCard(){
      let renderarticlesList = this.renderArticles(this.props.data)
      return renderarticlesList.map((item, index) => (
         <span key={index}>{articleList.append = item}</span>
      ))
   }
   

   renderArticles(dataz){
      for (let i in dataz){
         let articleTitle = dataz[i].title;
         // let articlePreview = dataz[i].description;
         let articleURL = dataz[i].url;
         let positive_reactions_count = dataz[i].positive_reactions_count;
         let comments_count = dataz[i].comments_count;
         let published_timestamp = dataz[i].published_timestamp;
         let tag_list = dataz[i].tag_list;
         let wordz = dataz[i].word_count;


         SingleArticle = <a href={articleURL} target="_blank"  rel="noopener noreferrer"  className="article-card">
            <span className="articleTitle">{articleTitle}</span><br />
            <div className="articleTimeStamp">
               {this.processTimeStamp(published_timestamp)}
            </div>

            {this.setReadingTime(wordz)}
            {this.processTags(tag_list)}<br />
            
            <div className="article-icon">
               <span><i className="fas fa-heart"></i></span>  {positive_reactions_count}&nbsp;&nbsp;
               <span><i className="fas fa-comment"></i></span> {comments_count} 
            </div>

         </a>
         articleGroup.push(SingleArticle)
      }
      return articleGroup;
   }


   processTimeStamp(timeStamp){
      let time = new Date(timeStamp)
      return `Published ${time.toDateString()}`
   }


   

   
   setReadingTime(count){
      let time = Math.ceil(count / avgWordsPerMin);
      return <div className="reading_time">{time} min read</div>
      
      // <div className="reading_time">
      //    <details>
      //       <summary>{time} min read</summary><span>{count} words read at {avgWordsPerMin}  words per minute.</span>
      //    </details>
      // </div>

   }

   processTags(tag_list){
      return tag_list.map((tag, index) => (
         <span className="articleTags" key={index}>
            <span className={this.processTagStyle(tag)}><i className="fas fa-hashtag"></i>{tag}&nbsp;&nbsp;</span>
         </span>
      ))
   }
   processTagStyle(tag){
      switch (tag.toLowerCase()) {
         case "security" || "cybersecurity":
            return "secStyle";
         case "codenewbie" || "devops" || "opensource":
            return"codeNoobStyle";
         case "todayilearned":
            return "todayilearnedStyle";
         case "javascript":
            return "jsStyle";
         case "react":
            return "reactStyle";
         case "css":
            return "cssStyle";
         case "webdev":
            return "webdevStyle";
         case "git":
            return "gitStyle";
         case "github":
            return "githubStyle";
         case "database":
            return "dbStyle";
         case "rails":
            return "railsStyle;"
         case 6:
            return "null";
       }
   }


   render(){
      return (<div>
         {this.state.counts < 29?
            <div className="wrap">
              <div className="loading">
                <div className="bounceball"></div>
                <div className="text">NOW LOADING...</div>
              </div>
            </div>
            :
            <div className="card" >
            {this.renderHeader()}
            <div className="cardContent">
               {this.renderCard()}
            </div>
         </div>          
            }

   </div>

      )
   }
}
export default ("dev-widget",DevCard)