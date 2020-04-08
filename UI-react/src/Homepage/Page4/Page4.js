import React, {Component} from 'react';
import seebg from './assets/see-bg.png';
import head from './assets/head.png';
import egpad from './assets/china.jpg';
import sa from './assets/japan.jpg';
import mor from './assets/turkey.jpg';


class Page4 extends Component {
    render() {
        return(
            <div className="page-af">
                <img src={seebg} className="see-bg"></img>
            
                <div className="cont-pg">
                    <img src={head} className="head-c"></img>
                    
                    <div className="h-c">discover Asia with Us    <i class="fas fa-angle-up au1" onClick={()=> {

                        let nef = document.getElementsByClassName("taj")[0];
                        let pageaf = document.getElementsByClassName("page-af")[1]; 

                        for (let i=0;i<document.getElementsByClassName("ti").length;i++) {
                            document.getElementsByClassName("ti")[i].style.display ="block";
                        }

                        document.getElementsByClassName("homepage_main")[0].style.marginTop="-100vh";
                        pageaf.style.display = "none";

                        nef.style.marginTop = "0";
                        nef.style.marginLeft = "1vw";
                        nef.style.width = "10vw";
                    }}></i></div>

                    
                    
                    <div className="card-main c1">
                        <img className="card-pad" src={egpad}></img>
                        <div className="card-white" onMouseOver={()=>{
                            document.getElementsByClassName("card-white")[3].style.marginTop = "-10vw";
                            document.getElementsByClassName("card-pad")[3].style.display = "block";
                            document.getElementsByClassName("card-bottom")[3].style.display = "block";

                            document.getElementsByClassName("card-pad")[3].style.marginTop = "0";
                        }} onClick={()=>{window.location="/seedestinations/chinaguide"}}>explore China</div>
                        <div className="card-bottom" onClick={()=>{window.location="/seedestinations/chinaguide"}}>
                            <div className="card-text">Home to one of the most ancient civilizations of the humanity,
                            gate to the magical realms of the past and to the future, China awaits you to discover her
                            beauties</div>
                            <div className="card-seeatc">see our China Guide</div>
                        </div>
                    </div>

                    <div className="card-main c2">
                        <img className="card-pad" src={sa}></img>
                        <div className="card-white" onMouseOver={()=>{
                            document.getElementsByClassName("card-white")[4].style.marginTop = "-10vw";
                            document.getElementsByClassName("card-pad")[4].style.display = "block";
                            document.getElementsByClassName("card-bottom")[4].style.display = "block";

                            document.getElementsByClassName("card-pad")[4].style.marginTop = "0";
                        }} onClick={()=>{window.location="/seedestinations/japanguide"}}>explore Japan</div>
                        <div className="card-bottom" onClick={()=>{window.location="/seedestinations/japanguide"}}>
                            <div className="card-text">With its sumptuous mix of traditions, spiritual beliefs,
                             festivals, architecture and landscapes, your memories of Japan will blaze bright 
                             long after you've left its shores.</div>
                            <div className="card-seeatc">see our Japan Guide</div>
                        </div>
                    </div>

                    <div className="card-main c3">
                        <img className="card-pad" src={mor}></img>
                        <div className="card-white" onMouseOver={()=>{
                            document.getElementsByClassName("card-white")[5].style.marginTop = "-10vw";
                            document.getElementsByClassName("card-pad")[5].style.display = "block";
                            document.getElementsByClassName("card-bottom")[5].style.display = "block";

                            document.getElementsByClassName("card-pad")[5].style.marginTop = "0";
                        }} onClick={()=>{window.location="/seedestinations/turkeyguide"}}>explore Turkey</div>
                        <div className="card-bottom" onClick={()=>{window.location="/seedestinations/turkeyguide"}}>
                            <div className="card-text">A richly historical land with some of the best cuisine you 
                            will ever taste, scenery from beaches to mountains and the great city of Istanbul.</div>
                            <div className="card-seeatc">see our Turkey Guide</div>
                        </div>
                    </div>   

                                                                
                
                </div>
                

            </div>
        )
    }
}


export default Page4