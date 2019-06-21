import React from 'react'
import logo from './../support/img/logo.png'
import swal from 'sweetalert'
import './../support/header.css'

class Header extends React.Component{
    render(){
        return(
            <div className="headerMain">
                <div className="overlayColor"/>
                <div className="row">
                    <div className="col-md-12 col-12 logo">
                        <img width="40px" src={logo} alt="logo"></img>
                    </div>
                </div>
                <div className="row ">  
                <div className="col-md-12 col-12" align="center">
                    <div className="word2">
                    <h1>Hello! I'm Nikolas Wijaya</h1><br></br>
                    <h2>Consult, Design and Develop Website</h2>
                    <p>Have something great in mind? Feel free to contact me.<br></br> I'll help you make it happen.</p>
                    <input type="button" className="cermatiBtn" value="LET'S MAKE CONTACT" onClick={()=> swal("Cermati.com","Created by Niko","success")}/>
                    </div>
                   
                </div>

                </div>
              
                
             
                
            </div>
        )
    }
}

export default Header;