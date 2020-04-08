import React, {Component} from 'react';
import seebg from './assets/see-bg.png';
import head from './assets/head.png';
import egpad from './assets/pacific.png';
import sa from './assets/hawaii.jpg';
import mor from './assets/bora.jpg';

class Page6 extends Component {
    render() {
        return(
            <div className="page-af">
                <img src={seebg} className="see-bg"></img>
            
                <div className="cont-pg">
                    <img src={head} className="head-c"></img>
                    
                    <div className="h-c">discover the Pacific with Us    <i class="fas fa-angle-up au1" onClick={()=> {

                        let nef = document.getElementsByClassName("is")[0];
                        let pageaf = document.getElementsByClassName("page-af")[3]; 

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
                            document.getElementsByClassName("card-white")[9].style.marginTop = "-10vw";
                            document.getElementsByClassName("card-pad")[9].style.display = "block";
                            document.getElementsByClassName("card-bottom")[9].style.display = "block";

                            document.getElementsByClassName("card-pad")[9].style.marginTop = "0";
                        }} onClick={()=>{window.location="/seedestinations/lesmarquisesguide"}}>explore Les Marquises</div>
                        <div className="card-bottom" onClick={()=>{window.location="/seedestinations/lesmarquisesguide"}}>
                            <div className="card-text" style={{"font-size": ".7vw"}}>At the edge of the world, away from all the mess of humanity,
                            a small series of islands sleeps in awe, watching nothing but the endless ocean.
                            It is for sure that your life will change profoundly after seeing the what Marquises is and
                            what Marquises means.</div>
                            <div className="card-seeatc">see our Marquises Guide</div>
                        </div>
                    </div>

                    <div className="card-main c2">
                        <img className="card-pad" src={sa}></img>
                        <div className="card-white" onMouseOver={()=>{
                            document.getElementsByClassName("card-white")[10].style.marginTop = "-10vw";
                            document.getElementsByClassName("card-pad")[10].style.display = "block";
                            document.getElementsByClassName("card-bottom")[10].style.display = "block";

                            document.getElementsByClassName("card-pad")[10].style.marginTop = "0";
                        }} onClick={()=>{window.location="/seedestinations/hawaiisguide"}}>explore the Hawaiis</div>
                        <div className="card-bottom" onClick={()=>{window.location="/seedestinations/hawaiisguide"}}>
                            <div className="card-text">In the middle of the ocean, the last and probably most extraordinary
                            state of all the United States, is ready to show you its unique culture.</div>
                            <div className="card-seeatc">see our Hawaii Guide</div>
                        </div>
                    </div>

                    <div className="card-main c3">
                        <img className="card-pad" src={mor}></img>
                        <div className="card-white" onMouseOver={()=>{
                            document.getElementsByClassName("card-white")[11].style.marginTop = "-10vw";
                            document.getElementsByClassName("card-pad")[11].style.display = "block";
                            document.getElementsByClassName("card-bottom")[11].style.display = "block";

                            document.getElementsByClassName("card-pad")[11].style.marginTop = "0";
                        }} onClick={()=>{window.location="/seedestinations/boraboraguide"}}>explore Bora Bora</div>
                        <div className="card-bottom" onClick={()=>{window.location="/seedestinations/boraboraguide"}}>
                            <div className="card-text">Undoubtedly the most celebrated island in the South Pacific, 
                            Bora Bora is French Polynesia's leading lady. Her beauty is unrivaled and her fame, 
                            unwavering. </div>
                            <div className="card-seeatc">see our Bora Bora Guide</div>
                        </div>
                    </div>   

                                                                
                
                </div>
                

            </div>
        )
    }
}


export default Page6