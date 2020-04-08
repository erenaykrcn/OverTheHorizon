import React from 'react';

let index = 0;

let divStyle = {

  backgroundImage: 'url(',

};

let backStyle = {
  background: 'linear-gradient(260deg, #f0d6aa, #f1f5a2)',
}

let h1Style = {
  width:"80%", 
  margin: "5vw",
  fontSize: "1.5vw",
  height: "20vw",
  marginTop: "0",
} 

class SeeDestinationsBase extends React.Component {
  handleWheel(ind) {
    switch (ind) {
      case 0:
        document.getElementsByClassName("eg-gui")[0].style.marginTop = "-100vh";
        document.getElementsByClassName("about-gui")[0].style.display = "inline-block";

        document.getElementsByClassName("box_wrapper")[0].style.marginLeft = "0";
        document.getElementsByClassName("about-gui")[0].style.marginLeft = "0";
        index = 1;
        break
      case 1:
        document.getElementsByClassName("eg-gui")[0].style.marginTop = "-200vh";
        document.getElementsByClassName("about-gui")[0].style.display = "none";

        document.getElementsByClassName("box_wrapper")[0].style.marginLeft = "-50vw";
        document.getElementsByClassName("about-gui")[0].style.marginLeft = "100vw";

        document.getElementsByClassName("box_wrapper2")[0].style.marginLeft = "48vw";
        document.getElementsByClassName("about-gui2")[0].style.display = "inline-block";
        document.getElementsByClassName("about-gui2")[0].style.marginLeft = "0";    
        index = 2;
        break  

        case 2:
          document.getElementsByClassName("eg-gui")[0].style.marginTop = "-300vh";
  
          document.getElementsByClassName("box_wrapper2")[0].style.marginLeft = "98vw";
          document.getElementsByClassName("about-gui2")[0].style.display = "none";
          document.getElementsByClassName("about-gui2")[0].style.marginLeft = "-48vw"; 
          
          for (let i=0;i<document.getElementsByClassName("high-box").length;i++) {
            document.getElementsByClassName("high-box")[i].style.display = "block";
          }

          index = 3;
          break   
          
          case 3:
            document.getElementsByClassName("eg-gui")[0].style.marginTop = "-400vh";
              
            for (let i=0;i<document.getElementsByClassName("high-box").length;i++) {
              document.getElementsByClassName("high-box")[i].style.display = "none";
            }

            document.getElementsByClassName("box_wrapper2")[1].style.marginLeft = "98vw";
            document.getElementsByClassName("about-gui2")[1].style.marginLeft = "-48vw";

            document.getElementsByClassName("box_wrapper")[1].style.marginLeft = "0";
            document.getElementsByClassName("about-gui")[1].style.marginLeft = "0";

            document.getElementsByClassName("about-gui")[1].style.display = "inline-block";
    
            index = 4;
            break    

          
          case 4:
            document.getElementsByClassName("eg-gui")[0].style.marginTop = "-500vh";

            document.getElementsByClassName("box_wrapper")[1].style.marginLeft = "-50vw";
            document.getElementsByClassName("about-gui")[1].style.marginLeft = "100vw";            

            document.getElementsByClassName("box_wrapper2")[1].style.marginLeft = "48vw";
            document.getElementsByClassName("about-gui2")[1].style.marginLeft = "0vw";

            document.getElementsByClassName("about-gui2")[1].style.display = "inline-block";
            document.getElementsByClassName("about-gui")[1].style.display = "none";
    
            index = 5;
            break   

          case 5:
            document.getElementsByClassName("eg-gui")[0].style.marginTop = "-600vh";

            document.getElementsByClassName("box_wrapper2")[1].style.marginLeft = "98vw";
            document.getElementsByClassName("about-gui2")[1].style.marginLeft = "-48vw";            
              
            document.getElementsByClassName("box_wrapper")[2].style.marginLeft = "0";
            document.getElementsByClassName("about-gui")[2].style.marginLeft = "0";

            document.getElementsByClassName("about-gui")[2].style.display = "inline-block";
            document.getElementsByClassName("about-gui2")[2].style.display = "none";            
    
            index = 6;
            break       

          case 6:
            document.getElementsByClassName("eg-gui")[0].style.marginTop = "-700vh";

            document.getElementsByClassName("box_wrapper")[2].style.marginLeft = "-50vw";
            document.getElementsByClassName("about-gui")[2].style.marginLeft = "100vw";               
            
            document.getElementsByClassName("box_wrapper2")[2].style.marginLeft = "48vw";
            document.getElementsByClassName("about-gui2")[2].style.marginLeft = "0vw";

            document.getElementsByClassName("about-gui2")[2].style.display = "inline-block";
            document.getElementsByClassName("about-gui")[2].style.display = "none";            

            index = 7;
            break                                  
    }
  }


  handleWheelDown(ind) {
    switch (ind) {
      case 1:
        document.getElementsByClassName("eg-gui")[0].style.marginTop = "0";
        document.getElementsByClassName("about-gui")[0].style.display = "none";
        
        document.getElementsByClassName("box_wrapper")[0].style.marginLeft = "-50vw";
        document.getElementsByClassName("about-gui")[0].style.marginLeft = "100vw";
        index = 0;
        break
      case 2:
        document.getElementsByClassName("eg-gui")[0].style.marginTop = "-100vh";
        document.getElementsByClassName("about-gui")[0].style.display = "inline-block";

        document.getElementsByClassName("box_wrapper")[0].style.marginLeft = "0";
        document.getElementsByClassName("about-gui")[0].style.marginLeft = "0";

        document.getElementsByClassName("box_wrapper2")[0].style.marginLeft = "98vw";
        document.getElementsByClassName("about-gui2")[0].style.display = "none";
        document.getElementsByClassName("about-gui2")[0].style.marginLeft = "-48vw";        
        index = 1;
        break 

        case 3:
          document.getElementsByClassName("eg-gui")[0].style.marginTop = "-200vh";
  
          document.getElementsByClassName("box_wrapper2")[0].style.marginLeft = "48vw";
          document.getElementsByClassName("about-gui2")[0].style.display = "inline-block";
          document.getElementsByClassName("about-gui2")[0].style.marginLeft = "0";
          
          for (let i=0;i<document.getElementsByClassName("high-box").length;i++) {
            document.getElementsByClassName("high-box")[i].style.display = "none";
          }          
          
          index = 2;
          break

        case 4:
           document.getElementsByClassName("eg-gui")[0].style.marginTop = "-300vh";
             
          for (let i=0;i<document.getElementsByClassName("high-box").length;i++) {
            document.getElementsByClassName("high-box")[i].style.display = "block";
          }

          document.getElementsByClassName("box_wrapper")[1].style.marginLeft = "-50vw";
          document.getElementsByClassName("about-gui")[1].style.marginLeft = "100vw";      
          
          
          document.getElementsByClassName("about-gui")[1].style.display = "none";  

          index = 3;
          break  
          
        case 5:
           document.getElementsByClassName("eg-gui")[0].style.marginTop = "-400vh";

           document.getElementsByClassName("box_wrapper2")[1].style.marginLeft = "98vw";
           document.getElementsByClassName("about-gui2")[1].style.marginLeft = "-48vw";  
           
           document.getElementsByClassName("box_wrapper")[1].style.marginLeft = "0";
           document.getElementsByClassName("about-gui")[1].style.marginLeft = "0";    
           
           
           document.getElementsByClassName("about-gui")[1].style.display = "inline-block";
           document.getElementsByClassName("about-gui2")[1].style.display = "none"; 
             
           index = 4;
           break  
          
        case 6:
           document.getElementsByClassName("eg-gui")[0].style.marginTop = "-500vh";

           document.getElementsByClassName("box_wrapper")[2].style.marginLeft = "-50vw";
           document.getElementsByClassName("about-gui")[2].style.marginLeft = "100vw";

           document.getElementsByClassName("box_wrapper2")[1].style.marginLeft = "48vw";
           document.getElementsByClassName("about-gui2")[1].style.marginLeft = "0vw";     
           

           document.getElementsByClassName("about-gui2")[1].style.display = "inline-block";
           document.getElementsByClassName("about-gui")[2].style.display = "none";               
      
           index = 5;
           break  
          
        case 7:
           document.getElementsByClassName("eg-gui")[0].style.marginTop = "-600vh";

           document.getElementsByClassName("box_wrapper2")[2].style.marginLeft = "98vw";
           document.getElementsByClassName("about-gui2")[2].style.marginLeft = "-48vw";   

           document.getElementsByClassName("box_wrapper")[2].style.marginLeft = "0";
           document.getElementsByClassName("about-gui")[2].style.marginLeft = "0";      

           document.getElementsByClassName("about-gui")[2].style.display = "inline-block";
           document.getElementsByClassName("about-gui2")[2].style.display = "none";               

           index = 6;
           break             
    }
  }

  invis() {
    document.getElementsByClassName("eg-gui")[0].style.marginTop = "-300vh";
             
    for (let i=0;i<document.getElementsByClassName("high-box").length;i++) {
      document.getElementsByClassName("high-box")[i].style.display = "block";
    }

    index = 3;

    for(let i=0;i<document.getElementsByClassName("about-gui").length;i++) {document.getElementsByClassName("about-gui")[i].style.display="none"}
    for(let i=0;i<document.getElementsByClassName("about-gui2").length;i++) {document.getElementsByClassName("about-gui2")[i].style.display="none"}
  }

  componentDidMount(){
    setTimeout(() => {
        document.getElementsByClassName("gui-wrapper")[0].style.marginTop = "30vw";
        document.addEventListener("wheel", (e)=> {
          if (e.deltaY > 0) {this.handleWheel(index)}
          else if (e.deltaY < 0) {this.handleWheelDown(index)}
        })        
     
    })
  
  }

  render () {  
    const {background} = this.props; 
    divStyle.backgroundImage += background;
    divStyle.backgroundImage += ")";

    const {name} = this.props;

    if (name=='Turkey'||name=='China'||name=='Japan') {
      backStyle.background = 'linear-gradient(260deg, #a3b0c4, #c9cdd4)';
    } else if (name=='Western Europe'||name=='Central Europe'||name=='Northern Europe') {
      backStyle.background = 'linear-gradient(260deg, #f6e8fc, #fcdcee)';
    } else if (name=='Les Marquises'||name=='Hawaiis'||name=='Bora Bora') {
      backStyle.background = 'linear-gradient(260deg, #afcafa, #add6e0)';
    }

    if (name=='Western Europe') {
      h1Style.fontSize = "1.1vw";
      h1Style.marginTop = "-1vw";
    }

    const {box1} = this.props;
    const {box2} = this.props;

    const {highs1} = this.props;
    const {highs2} = this.props;
    const {highs3} = this.props;
    const {highs4} = this.props;

    const {nav1} = this.props;  
    const {nav2} = this.props;  
    const {nav3} = this.props;  
    const {nav4} = this.props;   
    
    const {desc1} = this.props;  

    const {highs_head1} = this.props; 
    const {highs_head2} = this.props; 
    const {highs_head3} = this.props; 
    const {highs_head4} = this.props;  

    const {highs_desc1} = this.props; 
    const {highs_desc2} = this.props; 
    const {highs_desc3} = this.props;  
    const {highs_desc4} = this.props; 

    const {head} = this.props; 

    const {fact1} = this.props; 
    const {fact2} = this.props; 
    const {fact3} = this.props; 
    const {fact4} = this.props; 
    const {fact5} = this.props; 
    const {fact6} = this.props; 
    const {fact7} = this.props; 


    let regular_key = (name==='Turkey'||name==='China'||name==='Japan'||name==='Morocco'||name==='South Africa'||
    name==='Egypt'||name==='Les Marquises'||name==='Hawaiis'||name==='Bora Bora');
                  

    return (
        <div className="gui-main">

            <div className="eg-gui" style={divStyle}>

              <div className="gui-wrapper">
                <div className="whitepad-text1">{head}</div>
                <div className="whitepad-text2"><b>explore {name}</b></div>
                <i class="fas fa-angle-down downan" onClick={()=>{this.handleWheel(0)}}></i>  
              </div> 
            </div>

            <div className="gui-page2" style={backStyle}>
            
              <div className="box_wrapper"><img src={box1} className="box1"></img></div>

              <div className="about-gui">
                <i class="fas fa-angle-up aboutangup" onClick={()=>{this.handleWheelDown(1)}}></i>
                <div className="about-gui-head">all about {name}</div>

                <div className="about-cont">
                    {desc1}
                </div>

                <i class="fas fa-angle-down aboutangdown" onClick={()=>{this.handleWheel(1)}}></i>
              </div>
              
            </div>


            <div className="gui-page2" style={backStyle}>
          

              <div className="about-gui2">
                <i class="fas fa-angle-up aboutangup" onClick={()=>{this.handleWheelDown(2)}}></i>
                <div className="about-gui-head">key facts about {name}</div>

                <div className="keyfacts">

                    <div className="row-keyfacts">
                      <div className="row-inner1">Area:</div>
                      <div className="row-inner2">{fact1}</div>
                    </div>

                    <div className="row-keyfacts">
                      <div className="row-inner1">Population:</div>
                        <div className="row-inner2">{fact2}</div>
                    </div>

                    <div className="row-keyfacts">
                      <div className="row-inner1">Population density:</div>
                      <div className="row-inner2">{fact3}</div>
                    </div>


                    { regular_key ? 
                    <div>
                    <div className="row-keyfacts">
                      <div className="row-inner1">Capital:</div>
                      <div className="row-inner2">{fact4}</div>
                    </div>

                    <div className="row-keyfacts">
                      <div className="row-inner1">Government:</div>
                      <div className="row-inner2">{fact5}</div>
                    </div>

                    <div className="row-keyfacts">
                      <div className="row-inner1">Head of state:</div>
                      <div className="row-inner2">{fact6}</div>
                    </div>

                    <div className="row-keyfacts">
                      <div className="row-inner1">Head of government:</div>
                      <div className="row-inner2">{fact7}</div>
                    </div>    
                    </div>
                    :
                    <div>
                    <div className="row-keyfacts">
                      <div className="row-inner1">Major Cities:</div>
                      <div className="row-inner2">{fact4}</div>
                    </div>

                    <div className="row-keyfacts">
                      <div className="row-inner1">Average GDP per Capita:</div>
                      <div className="row-inner2">{fact5}</div>
                    </div>

                    <div className="row-keyfacts">
                      <div className="row-inner1">Influential Statesmen:</div>
                      <div className="row-inner2">{fact6}</div>
                    </div>

                    </div>
                    }                                                                                                 
                </div>

                <i class="fas fa-angle-down aboutangdown" onClick={()=>{this.handleWheel(2)}}></i>
              </div>

              <div className="box_wrapper2"><img src={box2} className="box1"></img></div>
              
            </div>

            <div className="gui-page2" style={backStyle}>

              <div className="highs-head"
              >our Main Highlights in {name}     <i class="fas fa-angle-up upang4" onClick={()=>{this.handleWheelDown(3)}}></i>
              </div>

              <div className="highs-main">

                <div className="highs h1" onMouseOver={()=>{
                  document.getElementsByClassName("high-pad")[0].style.width = "110%";
                  document.getElementsByClassName("high-box")[0].style.fontSize = "2vw";
                }} onMouseOut={()=>{
                  document.getElementsByClassName("high-pad")[0].style.width = "100%";
                  document.getElementsByClassName("high-box")[0].style.fontSize = "1.6vw";
                }}  onClick={()=>{this.handleWheel(3)}}>
                  <img className="high-pad"
                  src={nav1}></img>
                  <div className="high-box"><b>1. {highs_head1}</b></div>
                </div>

                <div className="highs h2" onMouseOver={()=>{
                  document.getElementsByClassName("high-pad")[1].style.width = "110%";
                  document.getElementsByClassName("high-box")[1].style.fontSize = "2vw";
                }} onMouseOut={()=>{
                  document.getElementsByClassName("high-pad")[1].style.width = "100%";
                  document.getElementsByClassName("high-box")[1].style.fontSize = "1.6vw";
                }} onClick={()=>{this.handleWheel(4)}}>
                  <img className="high-pad"
                  src={nav2}
                                    ></img>
                  <div className="high-box"><b>2. {highs_head2}</b></div>
                </div>

                <div className="highs h3" onMouseOver={()=>{
                  document.getElementsByClassName("high-pad")[2].style.width = "110%";
                  document.getElementsByClassName("high-box")[2].style.fontSize = "2vw";
                }} onMouseOut={()=>{
                  document.getElementsByClassName("high-pad")[2].style.width = "100%";
                  document.getElementsByClassName("high-box")[2].style.fontSize = "1.6vw";
                }} onClick={()=>{this.handleWheel(5)}}>
                  <img className="high-pad"
                  src={nav3}></img>
                  <div className="high-box"><b>3. {highs_head3}</b></div>
                </div>

                <div className="highs h4" onMouseOver={()=>{
                  document.getElementsByClassName("high-pad")[3].style.width = "110%";
                  document.getElementsByClassName("high-box")[3].style.fontSize = "2vw";
                }} onMouseOut={()=>{
                  document.getElementsByClassName("high-pad")[3].style.width = "100%";
                  document.getElementsByClassName("high-box")[3].style.fontSize = "1.6vw";
                }} onClick={()=>{this.handleWheel(6)}}>
                  <img className="high-pad"
                  src={nav4}></img>
                  <div className="high-box"><b>4. {highs_head4}</b></div>
                </div>

              </div>
              
            </div>

            <div className="gui-page2" style={backStyle}>
              <div className="box_wrapper"><img src={highs1} className="box1"></img></div>
              <div className="about-gui">
                <i class="fas fa-angle-up aboutangup" onClick={()=>{this.invis()}}></i>
                <div className="about-gui-head">{highs_head1}</div>

                <div className="about-cont" style={h1Style}>
                                                        {highs_desc1}
                </div>                
              </div>
            </div>

            <div className="gui-page2" style={backStyle}>
              <div className="about-gui2">
                <i class="fas fa-angle-up aboutangup" onClick={()=>{this.invis()}}></i>
                <div className="about-gui-head">{highs_head2}</div>

                <div className="about-cont" style={h1Style}>
                                                        {highs_desc2}                                                   
                </div>                     
              </div>
              <div className="box_wrapper2"><img src={highs2} className="box1"></img></div>
            </div>

            <div className="gui-page2" style={backStyle}>
              <div className="box_wrapper"><img src={highs3} className="box1"></img></div>  
              <div className="about-gui">
              <i class="fas fa-angle-up aboutangup" onClick={()=>{this.invis()}}></i>
            <div className="about-gui-head">{highs_head3}</div>

                <div className="about-cont" style={h1Style}>
                                                        {highs_desc3}

                </div>                     
              </div>
            </div>

            <div className="gui-page2" style={backStyle}>
              <div className="about-gui2">
              <i class="fas fa-angle-up aboutangup" onClick={()=>{
                  this.invis()}
                }></i>
                <div className="about-gui-head">{highs_head4}</div>

                <div className="about-cont" style={h1Style}>
                    {highs_desc4}
                </div>                     
              </div>
              <div className="box_wrapper2"><img src={highs4} className="box1"></img></div>
            </div>                                    
            

        </div>
    );
  }
}

export default  SeeDestinationsBase