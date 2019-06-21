import React from 'react'
import "./../support/bannerTop.css"
class BannerNotification extends React.Component{
    state={visible:true}

    btnGotIt = ()=>{
        this.setState({visible:false})
    }
    render(){
       
        return(
             this.state.visible ?
            <div>
                <div className="row banner" id="panel" >
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