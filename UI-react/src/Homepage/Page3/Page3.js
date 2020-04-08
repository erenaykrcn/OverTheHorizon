import React, {Component} from 'react';
import seebg from './assets/see-bg.png';
import head from './assets/head.png';
import egpad from './assets/eg-pad.jpg';
import mor from './assets/mor.jpg';
import sa from './assets/sa.jpg';


class Page3 extends Component {
    render() {
        return(
            <div className="page-af">
                <img src={seebg} className="see-bg"></img>
            
                <div className="cont-pg">
                    <img src={head} className="head-c"></img>
                    
                    <div className="h-c">discover Africa with Us    <i class="fas fa-angle-up au1" onClick={()=> {

                        let nef = document.getElementsByClassName("eg")[0];
                        let pageaf = document.getElementsByClassName("page-af")[0]; 

                        for (let i=0;i<document.getElementsByClassName("ti").length;i++) {
                            document.getElementsByClassName("ti")[i].style.display ="block";
                        }

                        document.getElementsByClassName("homepage_main")[0].style.marginTop="-100vh";
                        pageaf.style.display = "none";

                        nef.style.bottom = "auto";
                        nef.style.left = "auto";
                        nef.style.width = "10vw";
                    }}></i></div>

                    
                    
                    <div className="card-main c1">
                        <img className="card-pad" src={egpad}></img>
                        <div className="card-white" onMouseOver={()=>{
                            document.getElementsByClassName("card-pad")[0].style.display = "block";
                            document.getElementsByClassName("card-bottom")[0].style.display = "block";
                            document.getElementsByClassName("card-white")[0].style.marginTop = "-10vw";

                            document.getElementsByClassName("card-pad")[0].style.marginTop = "0";
                        }}  onClick={()=>{
                                window.setInterval(()=>{window.location="/seedestinations/egyptguide"},500)
                                }}>explore Egypt</div>
                        <div className="card-bottom" onClick={()=>{window.location="/seedestinations/egyptguide"}}>
                            <div className="card-text">A treasure lies in the middle of endless desert.
                            Magical realms of the Gods of the Middle East awaits you to offer their beauties</div>
                            <div className="card-seeatc">see our Egypt Guide</div>
                        </div>
                    </div>

                    <div className="card-main c2">
                        <img className="card-pad" src={sa}></img>
                        <div className="card-white" onMouseOver={()=>{
                            document.getElementsByClassName("card-white")[1].style.marginTop = "-10vw";
                            document.getElementsByClassName("card-pad")[1].style.display = "block";
                            document.getElementsByClassName("card-bottom")[1].style.display = "block";

                            document.getElementsByClassName("card-pad")[1].style.marginTop = "0";
                        }} onClick={()=>{window.location="/seedestinations/southafricaguide"}}>explore South Africa</div>
                        <div className="card-bottom" onClick={()=>{window.location="/seedestinations/southafricaguide"}}>
                            <div className="card-text">From city life to adventure, 
                            wildlife to culture, breathtaking scenery to sun-soaked coasts – discover South Africa.</div>
                            <div className="card-seeatc">see our South Africa Guide</div>
                        </div>
                    </div>

                    <div className="card-main c3">
                        <img className="card-pad" src={mor}></img>
                        <div className="card-white" onMouseOver={()=>{
                            document.getElementsByClassName("card-white")[2].style.marginTop = "-10vw";
                            document.getElementsByClassName("card-pad")[2].style.display = "block";
                            document.getElementsByClassName("card-bottom")[2].style.display = "block";

                            document.getElementsByClassName("card-pad")[2].style.marginTop = "0";
                        }} onClick={()=>{window.location="/seedestinations/moroccoguide"}}>explore Morocco</div>
                        <div className="card-bottom" onClick={()=>{window.location="/seedestinations/moroccoguide"}}>
                            <div className="card-text">Morocco's attractions offer an eye-opening taste of the exotic, 
                            with snake charmers and conjurers, souks piled high with hordes of treasures, and endless 
                            glasses of mint tea.</div>
                            <div className="card-seeatc">see our Morocco Guide</div>
                        </div>
                    </div>   

                                                                
                
                </div>
                

            </div>
        )
    }
}


export default Page3