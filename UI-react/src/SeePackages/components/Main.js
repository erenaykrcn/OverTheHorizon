import React from 'react';


import bg from './assets/bg.png';
import fl from './assets/fl.png';
import bag from './assets/bag.png';
import as3 from './assets/as3.png';
import as5 from './assets/as5.png';
import eg from './assets/eg.png';
import taj from './assets/bud.png';
import ef from './assets/nd.png';
import is from './assets/is.png';
import fk from './assets/fk.png';


class Main extends React.Component {
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

    componentDidMount() {
        this.getAuth();
    }

    render() {
        function nextPage(url) {
            document.getElementsByClassName("sp-fl")[0].style.marginLeft = "-80vw";


            let intt = window.setInterval(function() {
                window.location=url;
                window.clearInterval(intt)
            } , 1000)

        }
        return (
            <div className="window">  
            <div className="sp-main">
                <img src={bg} className="sp-bg abs" ></img>
                <img src={fl} className="sp-fl abs"></img>
                <img src={bag} className="sp-bag abs" ></img>
                <img src={as3} className="sp-as3 abs" ></img>
                <img src={as5} className="sp-as5 abs" ></img>

                <div className="sp-logo abs"  >Over the Horizon</div>
                <div className="sp-head abs" >Overview of our Packages</div>
                <div className="sp-nav abs">
                    <div className="sp-nav1" onClick={()=>{window.location='/'}}>see destinations</div>
                    <div className="sp-nav1" onClick={()=>{window.location='/planjourney'}}>plan a journey</div>
                    
                    { this.state.auth ? 
                    <div className="sp-nav1" onClick={()=>{window.location="/accounts/yourcart"}}>see cart</div>
                    :
                    <div className="sp-nav1" onClick={()=>{window.location="/accounts/signup"}}>join us</div>
                    }



                    <div className="sp-nav1">contact us</div>
                </div>

                <div className="sees-page2 sp-sees1 abs">
                    <img src={eg} className="eg sp-eg" onMouseOver={()=>{
                        
                        if (window.getComputedStyle(document.getElementsByClassName("sp-nextpage")[0]).getPropertyValue("display")===
                        "none") {
                            document.getElementsByClassName("eg")[0].style.width="11vw";
                            document.getElementsByClassName("eg")[0].style.marginTop="-2vw";
                        }

                    }} onMouseOut={()=>{
                        if (window.getComputedStyle(document.getElementsByClassName("sp-nextpage")[0]).getPropertyValue("display")===
                        "none") {
                            document.getElementsByClassName("eg")[0].style.width="9vw";
                            document.getElementsByClassName("eg")[0].style.marginTop="0";
                        }
                    }} style={{"display":"block"}} onClick={()=>{nextPage('/seepackages/africa')}}></img>
                    <img src={fk} className="fk1 "></img>
                    <div className="disc1 sp-desc1">packages in Africa</div>                 
                </div>

                <div className=" sp-sees2 abs">    
                <img src={taj} className="taj sp-as" onMouseOver={()=>{
                        if (window.getComputedStyle(document.getElementsByClassName("sp-nextpage")[0]).getPropertyValue("display")===
                        "none") {                    
                            document.getElementsByClassName("taj")[0].style.width="12vw";
                            document.getElementsByClassName("taj")[0].style.marginTop="0vw";
                        }

                    }} onMouseOut={()=>{
                        if (window.getComputedStyle(document.getElementsByClassName("sp-nextpage")[0]).getPropertyValue("display")===
                        "none") {                        
                            document.getElementsByClassName("taj")[0].style.width="10vw";
                            document.getElementsByClassName("taj")[0].style.marginTop="2vw";
                        }

                    }} style={{"display":"block"}} onClick={()=>{nextPage('/seepackages/asia')}}></img>
                <img src={fk} className="fk2"  style={{"display":"block"}}></img>
                <div className="disc2 sp-desc4" >packages in Asia</div>         
                </div> 


                <div className="sp-sees3 abs">    
                <img src={ef} className="ef sp-eu" onMouseOver={()=>{
                        if (window.getComputedStyle(document.getElementsByClassName("sp-nextpage")[0]).getPropertyValue("display")===
                        "none") {                    
                            document.getElementsByClassName("ef")[0].style.width="12vw";
                            document.getElementsByClassName("ef")[0].style.marginTop="5vw";
                        }

                    }} onMouseOut={()=>{
                        if (window.getComputedStyle(document.getElementsByClassName("sp-nextpage")[0]).getPropertyValue("display")===
                        "none") {                        
                            document.getElementsByClassName("ef")[0].style.width="10vw";
                            document.getElementsByClassName("ef")[0].style.marginTop="7vw";
                        }

                    }} style={{"display":"block"}} onClick={()=>{nextPage('/seepackages/europe')}}></img>
                <img src={fk} className="fk3" style={{"display":"block"}}></img>
                <div className="disc3 sp-desc4">packages in Europe</div>         
                </div> 


                <div className=" sp-sees4 abs">    
                <img src={is} className="is" onMouseOver={()=>{
                        if (window.getComputedStyle(document.getElementsByClassName("sp-nextpage")[0]).getPropertyValue("display")===
                        "none") {                    
                        document.getElementsByClassName("is")[0].style.width="12vw";
                        document.getElementsByClassName("is")[0].style.marginTop="-2vw";
                        }

                    }} onMouseOut={()=>{
                        if (window.getComputedStyle(document.getElementsByClassName("sp-nextpage")[0]).getPropertyValue("display")===
                        "none") {                        
                        document.getElementsByClassName("is")[0].style.width="10vw";
                        document.getElementsByClassName("is")[0].style.marginTop="0";
                        }

                    }} style={{"display":"block"}} onClick={()=>{nextPage('/seepackages/pacific')}}></img>
                <img src={fk} className="fk4"  style={{"display":"block"}}></img>
                <div className="disc4 sp-desc4">packages in the Pacific</div>         
                </div>  




            </div>


            <div className="sp-nextpage">
            </div>


            </div>
            )
    }
}

export default Main;