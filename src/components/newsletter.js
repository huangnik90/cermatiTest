import React from 'react'
import './../support/newsletter.css'
class NewsLetter extends React.Component{
    render(){
        return(
            <div className="newsletterContainer">
                <input type="button" className="closeBtn" value="x"/>
                <h2>Get latest updates in web technologies</h2>
                <p>I write articles related to web technologies, such as design trends, development
                tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
                them all.
                </p>
            <div className="row">
                <div className="col-12 col-md-8">
                    <input type="text" className="textCermati"></input>
                </div>
                <div className="col-12 col-md-4 pb-3">
                    <input type="button" className="btnCermati" value="Count Me In!"></input>
                </div>
            </div>
            </div>
        )
    }
}

export default NewsLetter;