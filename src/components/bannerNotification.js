import React from 'react'
import "./../support/bannerTop.css"
import './../support/animated.css'

class BannerNotification extends React.Component{
    state={visible:true,class:"",classId:""}

    btnGotIt = ()=>{
        this.setState({class:"animated slow fadeOutUp"})
        setInterval(()=>this.setState({visible:false}),1100)
    }
    render(){
       
        return(
             this.state.visible ?
            <div className={this.state.class} id={this.state.classId}>
                <div className="row banner" >
                    <div className="col-md-11 col-12">
                        By accessing and using this website, you acknowledge that you have read and
                        understand our <a href="/" style={{color:"blue"}}>Cookie Policy, Privacy Policy,</a> and our <a href="/" style={{color:"blue"}}>Terms of Service.</a>   
                    </div>
                    <div className="col-md-1 col-12 mt-1">
                        <input id="button" type="button" onClick={this.btnGotIt} className="btn-primary btn" value="Got it"/>
                    </div>
                </div>
            </div>:null
        )
    }
}

export default BannerNotification