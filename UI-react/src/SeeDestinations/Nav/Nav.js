import React, {Component} from 'react';
import as3 from './assets/as3.png';


class NavMain extends Component {
    state={
        auth:false,
    }


    getAuth() {
        let thisComp = this;
        let xhttp = new XMLHttpRequest();


        xhttp.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {

                        console.log(this.responseText)
                        if (this.responseText==='authenticated') {
                            thisComp.setState({
                                auth: true,
                            })
                        }

                    }
        };

        let params = null;
        xhttp.open('GET', "/api/accounts/", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(params);

    }

    componentDidMount(){
        this.getAuth();

        setTimeout(() => {
            document.getElementsByClassName("navmain")[0].style.marginTop = "0";
        })
      
      }    
    render() {
        return (
            <div className="navmain" style={{"z-index":"99"}}>
                <ul className="navlist">
                    <li className="navlist-inner1" onClick={()=>{
                        window.location="/";
                    }}>Over the Horizon</li>
                    <li className="navlist-inner" onClick={()=>{
                        window.location="/";
                    }} onMouseOver={()=>{
                        document.getElementsByClassName("n0")[0].style.marginTop="-7vw";
                    }} onMouseOut={()=>{
                        document.getElementsByClassName("n0")[0].style.marginTop="-15vw";
                    }}>see destinations</li>
                    <li className="navlist-inner" onMouseOver={()=>{
                        document.getElementsByClassName("n1")[0].style.marginTop="-7vw";
                    }} onMouseOut={()=>{
                        document.getElementsByClassName("n1")[0].style.marginTop="-15vw";
                    }} onClick={()=>{window.location="/planjourney"}}>plan a journey</li>
                    <li className="navlist-inner" onMouseOver={()=>{
                        document.getElementsByClassName("n2")[0].style.marginTop="-7vw";
                    }} onMouseOut={()=>{
                        document.getElementsByClassName("n2")[0].style.marginTop="-15vw";
                    }} onClick={()=>{
                        window.location="/seepackages";
                    }} >see our packages</li>

                                        
                    { this.state.auth ? 
                    <li className="navlist-inner" onMouseOver={()=>{
                        document.getElementsByClassName("n3")[0].style.marginTop="-7vw";
                    }} onMouseOut={()=>{
                        document.getElementsByClassName("n3")[0].style.marginTop="-15vw";
                    }} onClick={()=>{
                        window.location="/accounts/yourcart";
                    }} >see cart</li>
                    :
                    <li className="navlist-inner" onMouseOver={()=>{
                        document.getElementsByClassName("n3")[0].style.marginTop="-7vw";
                    }} onMouseOut={()=>{
                        document.getElementsByClassName("n3")[0].style.marginTop="-15vw";
                    }} onClick={()=>{
                        window.location="/accounts/signup";
                    }} >join us</li>
                    }


                    <li className="navlist-inner" onMouseOver={()=>{
                        document.getElementsByClassName("n4")[0].style.marginTop="-7vw";
                    }} onMouseOut={()=>{
                        document.getElementsByClassName("n4")[0].style.marginTop="-15vw";
                    }} onClick={()=>{
                        window.location="/contact";
                    }}>contact</li>
                </ul>

                <img src={as3} className="nav_as3 n0" onMouseOver={()=>{
                        document.getElementsByClassName("n0")[0].style.marginTop="-7vw";
                    }} onMouseOut={()=>{
                        document.getElementsByClassName("n0")[0].style.marginTop="-15vw";
                    }} onClick={()=>{window.location="/"}}></img>

                <img src={as3} className="nav_as3 n1" onMouseOver={()=>{
                        document.getElementsByClassName("n1")[0].style.marginTop="-7vw";
                    }} onMouseOut={()=>{
                        document.getElementsByClassName("n1")[0].style.marginTop="-15vw";
                    }} onClick={()=>{window.location="/planjourney"}}></img>

                <img src={as3} className="nav_as3 n2" onMouseOver={()=>{
                        document.getElementsByClassName("n2")[0].style.marginTop="-7vw";
                    }} onMouseOut={()=>{
                        document.getElementsByClassName("n2")[0].style.marginTop="-15vw";
                    }} onClick={()=>{
                        window.location="/seepackages";
                    }}></img>
                { this.state.auth ?     
                <img src={as3} className="nav_as3 n3" onMouseOver={()=>{
                        document.getElementsByClassName("n3")[0].style.marginTop="-7vw";
                    }} onMouseOut={()=>{
                        document.getElementsByClassName("n3")[0].style.marginTop="-15vw";
                    }} onClick={()=>{window.location='/accounts/yourcart'}}></img>
                :
                <img src={as3} className="nav_as3 n3" onMouseOver={()=>{
                    document.getElementsByClassName("n3")[0].style.marginTop="-7vw";
                }} onMouseOut={()=>{
                    document.getElementsByClassName("n3")[0].style.marginTop="-15vw";
                }} onClick={()=>{window.location='/accounts/signup'}} ></img>
                }


                <img src={as3} className="nav_as3 n4" onMouseOver={()=>{
                        document.getElementsByClassName("n4")[0].style.marginTop="-7vw";
                    }} onMouseOut={()=>{
                        document.getElementsByClassName("n4")[0].style.marginTop="-15vw";
                    }} onClick={()=>{window.location='/contact'}} ></img>
            </div>
        );
    }
} 


export default NavMain