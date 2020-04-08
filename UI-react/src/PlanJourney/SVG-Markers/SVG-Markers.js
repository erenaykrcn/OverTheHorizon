import React, {Component} from 'react';

class SVGMarkers extends Component {
    render() {
        function closeTab() {
            for (let i=0;i<document.getElementsByClassName("window-dest").length;i++) {
                document.getElementsByClassName("window-dest")[i].style.display = "none";
                document.getElementsByClassName("inner-wind")[i].style.width = "0";
                document.getElementsByClassName("inner-wind")[i].style.height = "0";
                document.getElementsByClassName("mapmarker2")[i].style.fontSize = "3vw";
            }
        }


        return (
            <div>
            
            <div className="mm1 m-5" id= "item0-oc">
                <i className="fa fa-map-marker mapmarker1" id="mm0" ariaHidden="true" style={{"font-size":"7vw"}}></i>
            </div>
            <div className="mm1 m-4" id= "item0-as">
                <i className="fa fa-map-marker mapmarker1" ariaHidden="true" style={{"font-size":"7vw"}}></i>
            </div>
            <div className="mm1 m-3" id= "item0-af">
                <i className="fa fa-map-marker mapmarker1" ariaHidden="true" style={{"font-size":"7vw"}}></i>
            </div>

            <div className="mm1 m-2" id= "item0-sa">
                <i className="fa fa-map-marker mapmarker1" ariaHidden="true" style={{"font-size":"7vw"}}></i>
            </div>
            <div className="mm1 m-1" id= "item0-eu">
                <i className="fa fa-map-marker mapmarker1" ariaHidden="true" style={{"font-size":"7vw"}}></i>
            </div>
            <div className="mm1 m0" id= "item0-na">
                <i className="fa fa-map-marker mapmarker1" ariaHidden="true" style={{"font-size":"7vw"}}></i>
            </div>

            <div className="mm1 m1" id= "item1">
                <i className="fa fa-map-marker mapmarker1" ariaHidden="true" ></i>
            </div>

            <div className="mm1 m2" id= "item2">
                <i className="fa fa-map-marker mapmarker1" ariaHidden="true"></i>
            </div>

            <div className="mm1 m3" id= "item3">
                <i className="fa fa-map-marker mapmarker1" ariaHidden="true" ></i>
            </div>

            <div className="mm1 m4" id= "item4">
                <i className="fa fa-map-marker mapmarker1" id="m1-4" ariaHidden="true" ></i>
            </div>

            <div className="mm1 m5" id= "item5">
                <i className="fa fa-map-marker mapmarker1" id="m1-5" ariaHidden="true" ></i>
            </div>

            <div className="mm1 m6" id= "item6">
                <i className="fa fa-map-marker mapmarker1" id="m1-6" ariaHidden="true" ></i>
            </div>

            <div className="mm1 m7" id= "item7">
                <i className="fa fa-map-marker mapmarker1" id="m1-7" ariaHidden="true" ></i>
            </div>

            <div className="mm1 m8" id= "item8">
                <i className="fa fa-map-marker mapmarker1" id="m1-8" ariaHidden="true" ></i>
            </div>

            <div className="mm1 m9" id= "item9">
                <i className="fa fa-map-marker mapmarker1" id="m1-9" ariaHidden="true" ></i>
            </div>


            <svg width="1000" height="800" className="line">
                <line stroke="#22616b" id="line1" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="800" className="line">
                <line stroke="#22616b" id="line2" strokeWidth="5"/>
            </svg>

            
            <svg width="1000" height="800" className="line">
                <line stroke="#22616b" id="line3" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="800" className="line">
                <line stroke="#22616b" id="line4" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="800" className="line">
                <line stroke="#22616b" id="line5" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="800" className="line">
                <line stroke="#22616b" id="line6" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="800" className="line">
                <line stroke="#22616b" id="line7" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="800" className="line">
                <line stroke="#22616b" id="line8" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="800" className="line">
                <line stroke="#22616b" id="line9" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="800" className="line">
                <line stroke="#22616b" id="line10" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-sa-svg1">
                <line stroke="whitesmoke" id="a-sa-line1" strokeWidth="5" />
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-sa-svg2">
                <line stroke="whitesmoke" id="a-sa-line2" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-sa-svg3">
                <line stroke="whitesmoke" id="a-sa-line3" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-sa-svg4">
                <line stroke="whitesmoke" id="a-sa-line4" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-eg-svg1">
                <line stroke="#22616b" id="a-eg-line1" strokeWidth="5" />
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-eg-svg2">
                <line stroke="#22616b" id="a-eg-line2" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-eg-svg3">
                <line stroke="#22616b" id="a-eg-line3" strokeWidth="5"/>
            </svg>          

            <svg width="1000" height="1000" className="a-line" id="a-mor-svg1">
                <line stroke="#e36a5d" id="a-mor-line1" strokeWidth="5" />
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-mor-svg2">
                <line stroke="#e36a5d" id="a-mor-line2" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-mor-svg3">
                <line stroke="#e36a5d" id="a-mor-line3" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-mor-svg4">
                <line stroke="#e36a5d" id="a-mor-line4" strokeWidth="5"/>
            </svg>  

            <svg width="1000" height="1000" className="a-line" id="a-ch-svg1">
                <line stroke="#e36a5d" id="a-ch-line1" strokeWidth="5" />
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-ch-svg2">
                <line stroke="#e36a5d" id="a-ch-line2" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-ch-svg3">
                <line stroke="#e36a5d" id="a-ch-line3" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-ch-svg4">
                <line stroke="#e36a5d" id="a-ch-line4" strokeWidth="5"/>
            </svg>  

            <svg width="1000" height="1000" className="a-line" id="a-jap-svg1">
                <line stroke="#ca72e8" id="a-jap-line1" strokeWidth="5" />
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-jap-svg2">
                <line stroke="#ca72e8" id="a-jap-line2" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-jap-svg3">
                <line stroke="#ca72e8" id="a-jap-line3" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-jap-svg4">
                <line stroke="#ca72e8" id="a-jap-line4" strokeWidth="5"/>
            </svg>   

            <svg width="1000" height="1000" className="a-line" id="a-turk-svg1">
                <line stroke="whitesmoke" id="a-turk-line1" strokeWidth="5" />
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-turk-svg2">
                <line stroke="whitesmoke" id="a-turk-line2" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-turk-svg3">
                <line stroke="whitesmoke" id="a-turk-line3" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-turk-svg4">
                <line stroke="whitesmoke" id="a-turk-line4" strokeWidth="5"/>
            </svg>                 


            <svg width="1000" height="1000" className="a-line" id="a-eu-svg1">
                <line stroke="whitesmoke" id="a-eu-line1" strokeWidth="5" />
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-eu-svg2">
                <line stroke="whitesmoke" id="a-eu-line2" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-eu-svg3">
                <line stroke="whitesmoke" id="a-eu-line3" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-eu-svg4">
                <line stroke="whitesmoke" id="a-eu-line4" strokeWidth="5"/>
            </svg>   

            <svg width="1000" height="1000" className="a-line" id="a-eu-svg5">
                <line stroke="whitesmoke" id="a-eu-line5" strokeWidth="5" />
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-eu-svg6">
                <line stroke="whitesmoke" id="a-eu-line6" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-eu-svg7">
                <line stroke="whitesmoke" id="a-eu-line7" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-eu-svg8">
                <line stroke="whitesmoke" id="a-eu-line8" strokeWidth="5"/>
            </svg>  

            <svg width="1000" height="1000" className="a-line" id="a-ln-svg1">
                <line stroke="whitesmoke" id="a-ln-line1" strokeWidth="5" />
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-ln-svg2">
                <line stroke="whitesmoke" id="a-ln-line2" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-haw-svg1">
                <line stroke="#ca72e8" id="a-haw-line1" strokeWidth="5"/>
            </svg>

            <svg width="1000" height="1000" className="a-line" id="a-haw-svg2">
                <line stroke="#ca72e8" id="a-haw-line2" strokeWidth="5"/>
            </svg>                                                                              


            <div className="mm2 a-sa a-sa-1" id= "a-sa-1" onMouseOver = {()=> {
                                
                                closeTab();

                                document.getElementById("a-line-sa-1").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-sa-1")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-sa-1")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-sa-1")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" id= "a-line-sa-1" ariaHidden="true" ></i>
            </div>

            <div className="mm2 a-sa a-sa-2" id= "a-sa-2" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-sa-2").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-sa-2")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-sa-2")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-sa-2")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-sa-2"></i>
            </div>

            <div className="mm2 a-sa a-sa-3" id= "a-sa-3" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-sa-3").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-sa-3")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-sa-3")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-sa-3")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-sa-3"></i>
            </div>

            <div className="mm2 a-sa a-sa-4" id= "a-sa-4" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-sa-4").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-sa-4")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-sa-4")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-sa-4")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-sa-4"></i>
            </div>





            <div className="mm2 a-eg a-eg-1" id= "a-eg-1" onMouseOver = {()=> {
                                
                                closeTab();

                                document.getElementById("a-line-eg-1").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-eg-1")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-eg-1")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-eg-1")[0].style.height = "100%";
                                })
            }} >
                <i className="fa fa-map-marker mapmarker2 a-line-eg" id= "a-line-eg-1" ariaHidden="true" ></i>
            </div>

            <div className="mm2 a-eg a-eg-2" id= "a-eg-2" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-eg-2").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-eg-2")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-eg-2")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-eg-2")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2 a-line-eg" ariaHidden="true" id= "a-line-eg-2"></i>
            </div>

            <div className="mm2 a-eg a-eg-3" id= "a-eg-3" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-eg-3").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-eg-3")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-eg-3")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-eg-3")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2 a-line-eg" ariaHidden="true" id= "a-line-eg-3"></i>
            </div>



            <div className="mm2 a-mor a-mor-1" id= "a-mor-1" onMouseOver = {()=> {
                                
                                closeTab();

                                document.getElementById("a-line-mor-1").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-mor-1")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-mor-1")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-mor-1")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" id= "a-line-mor-1" ariaHidden="true" ></i>
            </div>

            <div className="mm2 a-mor a-mor-2" id= "a-mor-2" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-mor-2").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-mor-2")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-mor-2")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-mor-2")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-mor-2"></i>
            </div>

            <div className="mm2 a-mor a-mor-3" id= "a-mor-3" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-mor-3").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-mor-3")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-mor-3")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-mor-3")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-mor-3"></i>
            </div>

            <div className="mm2 a-mor a-mor-4" id= "a-mor-4" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-mor-4").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-mor-4")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-mor-4")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-mor-4")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-mor-4"></i>
            </div>     


            <div className="mm2 a-ch a-ch-1" id= "a-ch-1" onMouseOver = {()=> {
                                
                                closeTab();

                                document.getElementById("a-line-ch-1").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-ch-1")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-ch-1")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-ch-1")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" id= "a-line-ch-1" ariaHidden="true" ></i>
            </div>

            <div className="mm2 a-ch a-ch-2" id= "a-ch-2" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-ch-2").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-ch-2")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-ch-2")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-ch-2")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-ch-2"></i>
            </div>

            <div className="mm2 a-ch a-ch-3" id= "a-ch-3" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-ch-3").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-ch-3")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-ch-3")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-ch-3")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-ch-3"></i>
            </div>

            <div className="mm2 a-ch a-ch-4" id= "a-ch-4" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-ch-4").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-ch-4")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-ch-4")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-ch-4")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-ch-4"></i>
            </div>      


            <div className="mm2 a-jap a-jap-1" id= "a-jap-1" onMouseOver = {()=> {
                                
                                closeTab();

                                document.getElementById("a-line-jap-1").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-jap-1")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-jap-1")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-jap-1")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" id= "a-line-jap-1" ariaHidden="true" ></i>
            </div>

            <div className="mm2 a-jap a-jap-2" id= "a-jap-2" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-jap-2").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-jap-2")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-jap-2")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-jap-2")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-jap-2"></i>
            </div>

            <div className="mm2 a-jap a-jap-3" id= "a-jap-3" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-jap-3").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-jap-3")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-jap-3")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-jap-3")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-jap-3"></i>
            </div>

            <div className="mm2 a-jap a-jap-4" id= "a-jap-4" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-jap-4").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-jap-4")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-jap-4")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-jap-4")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-jap-4"></i>
            </div>                   

            <div className="mm2 a-turk a-turk-1" id= "a-turk-1" onMouseOver = {()=> {
                                
                                closeTab();

                                document.getElementById("a-line-turk-1").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-turk-1")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-turk-1")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-turk-1")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" id= "a-line-turk-1" ariaHidden="true" ></i>
            </div>

            <div className="mm2 a-turk a-turk-2" id= "a-turk-2" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-turk-2").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-turk-2")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-turk-2")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-turk-2")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-turk-2"></i>
            </div>

            <div className="mm2 a-turk a-turk-3" id= "a-turk-3" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-turk-3").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-turk-3")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-turk-3")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-turk-3")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-turk-3"></i>
            </div>

            <div className="mm2 a-turk a-turk-4" id= "a-turk-4" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-turk-4").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-turk-4")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-turk-4")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-turk-4")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-turk-4"></i>
            </div>    

            <div className="mm2 a-eu a-eu-1" id= "a-eu-1" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-eu-1").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-eu-1")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-eu-1")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-eu-1")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-eu-1"></i>
            </div>    

            <div className="mm2 a-eu a-eu-2" id= "a-eu-2" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-eu-2").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-eu-2")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-eu-2")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-eu-2")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-eu-2"></i>
            </div>    

            <div className="mm2 a-eu a-eu-3" id= "a-eu-3" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-eu-3").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-eu-3")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-eu-3")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-eu-3")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-eu-3"></i>
            </div>    
            <div className="mm2 a-eu a-eu-4" id= "a-eu-4" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-eu-4").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-eu-4")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-eu-4")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-eu-4")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-eu-4"></i>
            </div>    
            <div className="mm2 a-eu a-eu-5" id= "a-eu-5" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-eu-5").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-eu-5")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-eu-5")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-eu-5")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-eu-5"></i>
            </div>    
            <div className="mm2 a-eu a-eu-6" id= "a-eu-6" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-eu-6").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-eu-6")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-eu-6")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-eu-6")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-eu-6"></i>
            </div>    
            <div className="mm2 a-eu a-eu-7" id= "a-eu-7" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-eu-7").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-eu-7")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-eu-7")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-eu-7")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-eu-7"></i>
            </div>    
            <div className="mm2 a-eu a-eu-8" id= "a-eu-8" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-eu-8").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-eu-8")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-eu-8")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-eu-8")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-eu-8"></i>
            </div>    
            <div className="mm2 a-eu a-eu-9" id= "a-eu-9" onMouseOver = {()=> {
                                closeTab();
                                document.getElementById("a-line-eu-9").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-eu-9")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-eu-9")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-eu-9")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" ariaHidden="true" id= "a-line-eu-9"></i>
            </div>     
            
            <div className="mm2 a-ln a-ln-1" id= "a-ln-1" onMouseOver = {()=> {
                                
                                closeTab();

                                document.getElementById("a-line-ln-1").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-ln-1")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-ln-1")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-ln-1")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" id= "a-line-ln-1" ariaHidden="true" ></i>
            </div>

            <div className="mm2 a-ln a-ln-2" id= "a-ln-2" onMouseOver = {()=> {
                                
                                closeTab();

                                document.getElementById("a-line-ln-2").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-ln-2")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-ln-2")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-ln-2")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" id= "a-line-ln-2" ariaHidden="true" ></i>
            </div>  

            <div className="mm2 a-ln a-ln-3" id= "a-ln-3" onMouseOver = {()=> {
                                
                                closeTab();

                                document.getElementById("a-line-ln-3").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-ln-3")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-ln-3")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-ln-3")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" id= "a-line-ln-3" ariaHidden="true" ></i>
            </div>             

            <div className="mm2 a-haw a-haw-1" id= "a-haw-1" onMouseOver = {()=> {
                                
                                closeTab();

                                document.getElementById("a-line-haw-1").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-haw-1")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-haw-1")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-haw-1")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" id= "a-line-haw-1" ariaHidden="true" ></i>
            </div>  

            
            <div className="mm2 a-haw a-haw-2" id= "a-haw-2" onMouseOver = {()=> {
                                
                                closeTab();

                                document.getElementById("a-line-haw-2").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-haw-2")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-haw-2")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-haw-2")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" id= "a-line-haw-2" ariaHidden="true" ></i>
            </div>  

            <div className="mm2 a-haw a-haw-3" id= "a-haw-3" onMouseOver = {()=> {
                                
                                closeTab();

                                document.getElementById("a-line-haw-3").style.fontSize = "4.5vw";
                                
                                document.getElementsByClassName("wd-haw-3")[0].style.display = "block";
                                window.setTimeout(()=>{
                                    document.getElementsByClassName("inwind-haw-3")[0].style.width = "100%";
                                    document.getElementsByClassName("inwind-haw-3")[0].style.height = "100%";
                                })
            }}>
                <i className="fa fa-map-marker mapmarker2" id= "a-line-haw-3" ariaHidden="true" ></i>
            </div>

            </div>
        )
    }
}

export default SVGMarkers