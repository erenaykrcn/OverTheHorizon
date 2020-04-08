import React from 'react';
import as5 from './assets/as5.png';
import beach from './assets/beach.png';
import eg from './assets/eg.png';
import taj from './assets/jap.png';
import ef from './assets/bb.png';
import is from './assets/is.png';
import fk from './assets/fk.png';
import logbg from './assets/bg5.png';




class Page2 extends React.Component {
    render() {
        return(
            <div className="page2">
                <img src={logbg} className="logbg ti"></img>
                <div className="logo-head ti">Over the Horizon</div>
                <div className="logo-sub ti">Discover the World without Borders</div>
                <i class="fas fa-angle-up angup" onClick={()=> {
                    document.getElementsByClassName("sees-page3")[0].style.display="none";
                    document.getElementsByClassName("homepage_main")[0].style.marginTop = "0";
                    document.getElementsByClassName("yat")[0].style.marginTop = "35vw";
                    document.getElementsByClassName("yat")[0].style.marginLeft = "60vw";
                    document.getElementsByClassName("plane")[0].style.marginTop = "10vw";
                    document.getElementsByClassName("plane")[0].style.marginLeft = "80vw";
                    document.getElementsByClassName("angup")[0].style.display="none";
                    document.getElementsByClassName("taj")[0].style.display="none";
                    document.getElementsByClassName("fk2")[0].style.display="none";

                    document.getElementsByClassName("island1")[0].style.display="block";
                    document.getElementsByClassName("plane")[0].style.display="block";
                    document.getElementsByClassName("as4")[0].style.display="none";
                    document.getElementsByClassName("as5")[0].style.display="none";
                    document.getElementsByClassName("head-2")[0].style.display="none";
                    document.getElementsByClassName("page2-lorem")[0].style.display="none";
                    document.getElementsByClassName("eg")[0].style.display="none";
                    document.getElementsByClassName("logbg")[0].style.display="none";

                    document.getElementsByClassName("sees-page4")[0].style.display="none";
                    document.getElementsByClassName("ef")[0].style.display="none";
                    document.getElementsByClassName("fk3")[0].style.display="none";
                    document.getElementsByClassName("disc3")[0].style.display="none";

                    document.getElementsByClassName("sees-page5")[0].style.display="none";
                    document.getElementsByClassName("is")[0].style.display="none";
                    document.getElementsByClassName("fk4")[0].style.display="none";
                    document.getElementsByClassName("disc4")[0].style.display="none";                    
                        
                    document.getElementsByClassName("as1")[0].style.display="block";
                    document.getElementsByClassName("as2")[0].style.display="block";


                }}></i>
                <div className="head-2">See Our Top Destinations</div>
                <div className="page2-lorem">Our services cover three continents and exciting egzotic islands. Why don't you 
                take a look at our destinations?:</div>

                <div className="sees-page2">
                    <img src={eg} className="eg" onMouseOver={()=>{
                        
                        if (window.getComputedStyle(document.getElementsByClassName("page-af")[0]).getPropertyValue("display")===
                        "none") {
                            document.getElementsByClassName("eg")[0].style.width="12vw";
                            document.getElementsByClassName("eg")[0].style.marginTop="-2vw";
                        }

                    }} onMouseOut={()=>{
                        if (window.getComputedStyle(document.getElementsByClassName("page-af")[0]).getPropertyValue("display")===
                        "none") {
                            document.getElementsByClassName("eg")[0].style.width="10vw";
                            document.getElementsByClassName("eg")[0].style.marginTop="0";
                        }
                    }} onClick={()=>{
                        let nef = document.getElementsByClassName("eg")[0];
                        let pageaf = document.getElementsByClassName("page-af")[0]; 

                        for (let i=0;i<document.getElementsByClassName("ti").length;i++) {
                            document.getElementsByClassName("ti")[i].style.display ="none";
                        }

                        document.getElementsByClassName("homepage_main")[0].style.marginTop="-200vh";
                        pageaf.style.display = "block";

                        nef.style.bottom = "0";
                        nef.style.left = "0";
                        nef.style.width = "30vw";

                    }}></img>
                    <img src={fk} className="fk1"></img>
                    <div className="disc1">discover Africa</div>                 
                </div>

                <div className="sees-page3">    
                <img src={taj} className="taj" onMouseOver={()=>{
                        if (window.getComputedStyle(document.getElementsByClassName("page-af")[1]).getPropertyValue("display")===
                        "none") {                    
                            document.getElementsByClassName("taj")[0].style.width="12vw";
                            document.getElementsByClassName("taj")[0].style.marginTop="-2vw";
                        }

                    }} onMouseOut={()=>{
                        if (window.getComputedStyle(document.getElementsByClassName("page-af")[1]).getPropertyValue("display")===
                        "none") {                        
                            document.getElementsByClassName("taj")[0].style.width="10vw";
                            document.getElementsByClassName("taj")[0].style.marginTop="0";
                        }

                    }} onClick={()=>{
                        let nef = document.getElementsByClassName("taj")[0];
                        let pageaf = document.getElementsByClassName("page-af")[1]; 

                        for (let i=0;i<document.getElementsByClassName("ti").length;i++) {
                            document.getElementsByClassName("ti")[i].style.display ="none";
                        }

                        document.getElementsByClassName("homepage_main")[0].style.marginTop="-200vh";
                        pageaf.style.display = "block";

                        nef.style.marginTop = "25vw";
                        nef.style.marginLeft = "-57vw";
                        nef.style.width = "30vw";

                    }}></img>
                <img src={fk} className="fk2"></img>
                <div className="disc2">discover Asia</div>         
                </div> 


                <div className="sees-page4">    
                <img src={ef} className="ef" onMouseOver={()=>{
                        if (window.getComputedStyle(document.getElementsByClassName("page-af")[2]).getPropertyValue("display")===
                        "none") {                    
                            document.getElementsByClassName("ef")[0].style.width="4vw";
                            document.getElementsByClassName("ef")[0].style.marginTop="-2vw";
                        }

                    }} onMouseOut={()=>{
                        if (window.getComputedStyle(document.getElementsByClassName("page-af")[2]).getPropertyValue("display")===
                        "none") {                        
                            document.getElementsByClassName("ef")[0].style.width="3vw";
                            document.getElementsByClassName("ef")[0].style.marginTop="1vw";
                        }

                    }} onClick={()=>{
                        let nef = document.getElementsByClassName("ef")[0];
                        let pageaf = document.getElementsByClassName("page-af")[2]; 

                        for (let i=0;i<document.getElementsByClassName("ti").length;i++) {
                            document.getElementsByClassName("ti")[i].style.display ="none";
                        }

                        document.getElementsByClassName("homepage_main")[0].style.marginTop="-200vh";
                        pageaf.style.display = "block";

                        nef.style.marginTop = "30vw";
                        nef.style.marginLeft = "-65vw";
                        nef.style.width = "8vw";                        
                    }}></img>
                <img src={fk} className="fk3"></img>
                <div className="disc3">discover Europe</div>         
                </div> 


                <div className="sees-page5">    
                <img src={is} className="is" onMouseOver={()=>{
                        if (window.getComputedStyle(document.getElementsByClassName("page-af")[3]).getPropertyValue("display")===
                        "none") {                    
                        document.getElementsByClassName("is")[0].style.width="12vw";
                        document.getElementsByClassName("is")[0].style.marginTop="-2vw";
                        }

                    }} onMouseOut={()=>{
                        if (window.getComputedStyle(document.getElementsByClassName("page-af")[3]).getPropertyValue("display")===
                        "none") {                        
                        document.getElementsByClassName("is")[0].style.width="10vw";
                        document.getElementsByClassName("is")[0].style.marginTop="0";
                        }

                    }} onClick={()=>{
                        let nef = document.getElementsByClassName("is")[0];
                        let pageaf = document.getElementsByClassName("page-af")[3]; 

                        for (let i=0;i<document.getElementsByClassName("ti").length;i++) {
                            document.getElementsByClassName("ti")[i].style.display ="none";
                        }

                        document.getElementsByClassName("homepage_main")[0].style.marginTop="-200vh";
                        pageaf.style.display = "block";

                        nef.style.marginTop = "15vw";
                        nef.style.marginLeft = "-100vw";
                        nef.style.width = "50vw";                        
                    }}></img>
                <img src={fk} className="fk4"></img>
                <div className="disc4">discover the Pacific</div>         
                </div>                                          


                <img src={beach} className="as4 ti"></img>
                <img src={as5} className="as5 ti"></img>
            </div>
        )
    }
  }


export default Page2