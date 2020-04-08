import React from 'react';
import left_nav from './assets/nav.png';
import is1 from './assets/is2.png';
import as3 from './assets/as3.png';
import plane from './assets/plane.svg';
import yat from './assets/yat.svg';


class Page1 extends React.Component {
    state = {
        auth: false,
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
            document.getElementsByClassName("island1")[0].style.marginLeft = "30vw";
            document.getElementsByClassName("left_nav")[0].style.marginTop = "-3vw";

            document.getElementsByClassName("oth-lorem")[0].style.height = "25vw";  
            document.getElementsByClassName("oth-lorem")[0].style.width = "25vw";   

            document.getElementsByClassName("yat")[0].style.marginTop = "35vw";
            document.getElementsByClassName("plane")[0].style.marginTop = "10vw";
            document.getElementsByClassName("angup")[0].style.display="none";                    
        }
    )}     
    render() {
      return ( 
        <div className="homepage_main">
           <img src={left_nav} className="left_nav"></img>
            <img src={as3} className="as3-1"></img>
            <img src={as3} className="as3-2"></img>
            <img src={as3} className="as3-3"></img>
            <img src={as3} className="as3-4"></img>
            <img src={as3} className="as3-5"></img>

            <div className="menu">
                <div className="menu-inner" onMouseOver={()=>{
                    document.getElementsByClassName("as3-1")[0].style.marginTop = "2vw";  
                }} onMouseOut={()=>{
                    document.getElementsByClassName("as3-1")[0].style.marginTop = "-10vw";  
                }} onClick={()=>{
                    document.getElementsByClassName("yat")[0].style.marginTop = "40vw";
                    document.getElementsByClassName("yat")[0].style.marginLeft = "45vw";
                    document.getElementsByClassName("plane")[0].style.marginTop = "25vw";
                    document.getElementsByClassName("plane")[0].style.marginLeft = "60vw";
                    
                    let inter = window.setInterval(
                        ()=> {
                            document.getElementsByClassName("homepage_main")[0].style.marginTop="-100vh";
                            document.getElementsByClassName("island1")[0].style.display="none";
                            document.getElementsByClassName("plane")[0].style.display="none";
                            document.getElementsByClassName("as4")[0].style.display="block";
                            document.getElementsByClassName("as5")[0].style.display="block";
                            document.getElementsByClassName("head-2")[0].style.display="block";
                            document.getElementsByClassName("page2-lorem")[0].style.display="block";
                            document.getElementsByClassName("eg")[0].style.display="block";
                            document.getElementsByClassName("sees-page3")[0].style.display="inline-block";
                            document.getElementsByClassName("taj")[0].style.display="block";
                            document.getElementsByClassName("angup")[0].style.display="block";
                            document.getElementsByClassName("logbg")[0].style.display="block";
                            document.getElementsByClassName("fk2")[0].style.display="block";
                            document.getElementsByClassName("disc2")[0].style.display="block";

                            document.getElementsByClassName("sees-page4")[0].style.display="inline-block";
                            document.getElementsByClassName("ef")[0].style.display="block";
                            document.getElementsByClassName("fk3")[0].style.display="block";
                            document.getElementsByClassName("disc3")[0].style.display="block";

                            document.getElementsByClassName("sees-page5")[0].style.display="inline-block";
                            document.getElementsByClassName("is")[0].style.display="block";
                            document.getElementsByClassName("fk4")[0].style.display="block";
                            document.getElementsByClassName("disc4")[0].style.display="block";

                        
                            document.getElementsByClassName("as1")[0].style.display="none";
                            document.getElementsByClassName("as2")[0].style.display="none";
                            window.clearInterval(inter);
                        },800
                    )

                }} id="see-dest">see destinations</div>
                <div className="menu-inner" onMouseOver={()=>{
                    document.getElementsByClassName("as3-2")[0].style.marginTop = "2vw";
                }} onMouseOut={()=>{
                    document.getElementsByClassName("as3-2")[0].style.marginTop = "-10vw"; 
                }} onClick={()=>{window.location="/planjourney"}}>plan a journey</div>
                <div className="menu-inner" onMouseOver={()=>{
                    document.getElementsByClassName("as3-3")[0].style.marginTop = "2vw";
                }} onMouseOut={()=>{
                    document.getElementsByClassName("as3-3")[0].style.marginTop = "-10vw"; 
                }} onClick={()=>{
                    window.location="/seepackages";
                }}>see our packages</div>

                { this.state.auth ? 
                <div className="menu-inner" onMouseOver={()=>{
                    document.getElementsByClassName("as3-4")[0].style.marginTop = "2vw";
                }} onMouseOut={()=>{
                    document.getElementsByClassName("as3-4")[0].style.marginTop = "-10vw"; 
                }}onClick={()=>{
                    window.location="/accounts/yourcart";
                }} style={{"font-size": "1.3vw"}}>see cart</div>

                : 
                <div className="menu-inner" onMouseOver={()=>{
                    document.getElementsByClassName("as3-4")[0].style.marginTop = "2vw";
                }} onMouseOut={()=>{
                    document.getElementsByClassName("as3-4")[0].style.marginTop = "-10vw"; 
                }}onClick={()=>{
                    window.location="/accounts/signup";
                }}>join us</div>
                } 


                <div className="menu-inner" onMouseOver={()=>{
                    document.getElementsByClassName("as3-5")[0].style.marginTop = "2vw";
                }} onMouseOut={()=>{
                    document.getElementsByClassName("as3-5")[0].style.marginTop = "-10vw"; 
                }} onClick={()=>{
                    window.location="/contact";
                }} >contact</div>

            </div>

            <div class="nav_main">
                 <div className="oth_heading">Over the Horizon</div>
                 <div className="oth-subheading">Borderless Travel Agency</div>
                 <div className="oth-lorem">
                     <div className="lorem-text" onMouseOver={()=>{
                         document.getElementsByClassName("oth-lorem")[0].style.height = "28vw";  
                         document.getElementsByClassName("oth-lorem")[0].style.width = "28vw";
                         document.getElementsByClassName("lorem-text")[0].style.marginLeft = "3.3vw";
                         document.getElementsByClassName("lorem-text")[0].style.marginTop = "2.5vw";
                     }} onMouseOut={()=>{
                        document.getElementsByClassName("oth-lorem")[0].style.height = "25vw";  
                        document.getElementsByClassName("oth-lorem")[0].style.width = "25vw";
                        document.getElementsByClassName("lorem-text")[0].style.marginLeft = "1.5vw";
                        document.getElementsByClassName("lorem-text")[0].style.marginTop = "1.3vw";
                     }}>
                     Travel from Capadocia, to Polynesia, 
                        from Polynesia all way to Himalayas. Join us and see what is like to be Over the Horizon!
                    </div>
                 </div>
            </div>

           <img src={plane} className="plane" onMouseOver={()=>{
               document.getElementsByClassName("plane")[0].style.marginTop = "25vw";
               document.getElementsByClassName("plane")[0].style.marginLeft = "60vw";
           }} onMouseOut={()=>{
            document.getElementsByClassName("plane")[0].style.marginTop = "10vw";
            document.getElementsByClassName("plane")[0].style.marginLeft = "80vw";

           }}></img>          
           <img src= {is1} className="island1"></img>
           <img src={yat} className="yat" onMouseOver={()=>{
               document.getElementsByClassName("yat")[0].style.marginTop = "45vw";
               document.getElementsByClassName("yat")[0].style.marginLeft = "50vw";

           }} onMouseOut={()=>{
            document.getElementsByClassName("yat")[0].style.marginTop = "35vw";
            document.getElementsByClassName("yat")[0].style.marginLeft = "60vw";

           }}></img>

           <img src="https://s3-eu-central-1.amazonaws.com/munlib/img/as1.png" className = "as1"></img>
           <img src="https://s3-eu-central-1.amazonaws.com/munlib/img/as2.png" className = "as2"></img>
        </div>
      )
    }
  }


export default Page1