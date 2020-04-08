import React, {Component} from 'react';
import seebg from './assets/see-bg.png';
import head from './assets/head.png';
import egpad from './assets/paris.jpg';
import sa from './assets/vienna.png';
import mor from './assets/norway.jpg';


class Page5 extends Component {
    render() {
        return(
            <div className="page-af">
                <img src={seebg} className="see-bg"></img>
            
                <div className="cont-pg">
                    <img src={head} className="head-c"></img>
                    
                    <div className="h-c">discover Europe with Us    <i class="fas fa-angle-up au1" onClick={()=> {

                        let nef = document.getElementsByClassName("ef")[0];
                        let pageaf = document.getElementsByClassName("page-af")[2]; 

                        for (let i=0;i<document.getElementsByClassName("ti").length;i++) {
                            document.getElementsByClassName("ti")[i].style.display ="block";
                        }

                        document.getElementsByClassName("homepage_main")[0].style.marginTop="-100vh";
                        pageaf.style.display = "none";

                        nef.style.marginTop = "0";
                        nef.style.marginLeft = "4vw";
                        nef.style.width = "3vw";
                    }}></i></div>

                    
                    
                    <div className="card-main c1">
                        <img className="card-pad" src={egpad}></img>
                        <div className="card-white" style={{"font-size":"2.5vw"}} onMouseOver={()=>{
                            document.getElementsByClassName("card-white")[6].style.marginTop = "-10vw";
                            document.getElementsByClassName("card-pad")[6].style.display = "block";
                            document.getElementsByClassName("card-bottom")[6].style.display = "block";

                            document.getElementsByClassName("card-pad")[6].style.marginTop = "0";
                        }} onClick={()=>{window.location="/seedestinations/weuropeguide"}}>explore Western Europe</div>
                        <div className="card-bottom cbe" onClick={()=>{window.location="/seedestinations/weuropeguide"}}>
                            <div className="card-text" >Experience the famous French cuisine, watch the city of love
                            from the top of world's most famous building, discover the cities of Toreros... There 
                            is no end to what to do in Western Europe</div>
                            <div className="card-seeatc">see our Western Europe Guide</div>
                        </div>
                    </div>

                    <div className="card-main c2">
                        <img className="card-pad" src={sa}></img>
                        <div className="card-white" style={{"font-size":"2.5vw"}} onMouseOver={()=>{
                            document.getElementsByClassName("card-white")[7].style.marginTop = "-10vw";
                            document.getElementsByClassName("card-pad")[7].style.display = "block";
                            document.getElementsByClassName("card-bottom")[7].style.display = "block";

                            document.getElementsByClassName("card-pad")[7].style.marginTop = "0";
                        }} onClick={()=>{window.location="/seedestinations/ceuropeguide"}}>explore Central Europe</div>
                        <div className="card-bottom" onClick={()=>{window.location="/seedestinations/ceuropeguide"}}>
                            <div className="card-text">Alps, beer, wine, history of the crownless emperors..., In the land
                            of the never ending conflicts, a long lasting peaceful region blossoms and waits for to
                            offer all of its beauties</div>
                            <div className="card-seeatc">see our Central Europe Guide</div>
                        </div>
                    </div>

                    <div className="card-main c3">
                        <img className="card-pad" src={mor}></img>
                        <div className="card-white" style={{"font-size":"2.5vw"}} onMouseOver={()=>{
                            document.getElementsByClassName("card-white")[8].style.marginTop = "-10vw";
                            document.getElementsByClassName("card-pad")[8].style.display = "block";
                            document.getElementsByClassName("card-bottom")[8].style.display = "block";

                            document.getElementsByClassName("card-pad")[8].style.marginTop = "0";
                        }} onClick={()=>{window.location="/seedestinations/neuropeguide"}}>explore Northern Europe</div>
                        <div className="card-bottom" onClick={()=>{window.location="/seedestinations/neuropeguide"}} >
                            <div className="card-text">...then there are far-flung islands where the sun never sets in summer,
                             magnificent fjords and lakes as far as the eye can see. One thing is for sure; Northern Europe 
                             is modest about its majesty.</div>
                            <div className="card-seeatc">see our Northern Europe Guide</div>
                        </div>
                    </div>   

                                                                
                
                </div>
                

            </div>
        )
    }
}


export default Page5