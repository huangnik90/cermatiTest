import React from 'react'
import './../support/newsletter.css'
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

class NewsLetter extends React.Component{
    state={closeTab:true, cook :""}

    close = ()=>{
        this.setState({closeTab:false})
        var date = new Date();
        date.setTime(date.getTime() + (600* 1000));
        cookies.set('news','abc',{path:'/',expires:date})
        
    }
    componentDidMount(){
        var cook = cookies.get('news')
        if (cook){
            this.setState({cook})
        }
    }
    render(){
        return(
            this.state.closeTab && this.state.cook===""? 
            <div>

            <div className="newsletterContainer animated fadeInUp">
            <input type="button" className="closeBtn" onClick={this.close} value="x"/>
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

            </div>
            
            :null
        )
    }
}

export default NewsLetter;