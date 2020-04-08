import React, {Component} from 'react';
import NavMain from './Nav.js';
import dict from './assets/dictionary.json';
import jQuery from 'jquery'; 

import africa from './assets/africa.jpg';
import asia from './assets/asia.jpg';
import europe from './assets/europe.jpg';
import pacific from './assets/pacific.jpg';
import dic from './assets/dic.json';


function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

let csrftoken = getCookie('csrftoken');



class NextPage extends Component {
    state = {
        auth: false,
        packs: [],
    }

    getPacks() {
        let box = dict[this.props.name];
        let thisComp = this;

        let endpoint = '/api/accounts/getpacks/';
        let lookupOptions = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        }

        fetch(endpoint, lookupOptions)
        .then(function(response){
            return response.json()
        }).then(function(responseData){
            let packs = []

            for (let n=0; n<responseData.length;n++) {
                let dest_name = responseData[n]['name'];
                console.log(box)

                for (let i=0;i<box.length;i++) {

                    for (let m=0;m<box[i]['packs'].length;m++) {
                        if (box[i]['packs'][m]['name'] === dest_name) {

                            console.log('executed');
                            let id1 = "ac" + i + m ;
                            document.getElementById(id1).innerHTML = "added<br>(visit your cart for details)";
                        }
                    }
                }

            }

            thisComp.setState({
                packs: packs,
            })
        }).catch(function(error){
            console.log("error",error);
        })
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
        this.getPacks();

        window.setTimeout( function() {
            document.getElementById("sp-wh").style.height = "20vw";
            document.getElementById("sp-wh").style.marginTop = "-20vw";
        })
    }


    render(){
        let thisComp = this;
        let box = dict[this.props.name];
        let name = this.props.name;
        let mainIMG;
        if (this.props.name === 'Africa') {
            mainIMG = africa;
        } else if (this.props.name === 'Asia') {
            mainIMG = asia;
        } else if (this.props.name === 'Europe') {
            mainIMG = europe;
        } else {
            mainIMG = pacific;
        }

        function zoomIn(index) {
            document.getElementById("img"+index).style.width = "125%";
            document.getElementById("head"+index).style.fontSize = "2.4vw";

        }

        function zoomOut(index) {
            document.getElementById("img"+index).style.width = "100%";
            document.getElementById("head"+index).style.fontSize = "2vw";
            
        }


        function addCart(name1, id, id1) {
            if (thisComp.state.auth && document.getElementById(id1).innerHTML != "added<br>(visit your cart for details)") {
                console.log(name1);
                let xhttp = new XMLHttpRequest();


                xhttp.onreadystatechange = function () {
                            if (this.readyState === 4 && this.status === 200) {
                                console.log(this.responseText);
    
                                if (this.responseText==="success") {
                                    document.getElementById(id).style.display = "block";
                                    document.getElementById(id1).innerHTML = "added<br>(visit your cart for details)";
                                    
                                    let inttt = window.setInterval(function(){
                                        document.getElementById(id).style.display = "none";
                                        window.clearInterval(inttt);
                                    },2000)
                                } else {
                                    return alert('Could not be added to the cart, please try again later')
                                }
                               
                            }
                };
                
                let params = 'name='+name1;
                xhttp.open('POST', "/api/accounts/addtocart/", true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.setRequestHeader("X-CSRFToken", csrftoken);
                xhttp.send(params);
                
            } else if (!thisComp.state.auth) {
                if (window.confirm("You have to login in order to add to your cart. Do you wish to go to the login page?")) { 
                    window.location = "/accounts/login"
                }
                
            } else {
                return alert("You have already added this package to your cart")
            }
        }



        return(
            <div className="sp-packagepage">
                <NavMain/>
                <div className="sp-wall-wrapper"><img src={mainIMG} className="sp-wall-pad"></img></div>

                <div className="sp-wall-white" id="sp-wh">
                    take a look at our packages in {this.props.name}
                </div>

                <div className="sp-cont">

                    {Object.keys(box).length>0 ? box.map((boxItem, index1)=>{
                    return (
                    <div className="sp-box1">
                        <div className="sp-pn"><i>**note that our packages include guiding, accommodation, transport from airport, 
                            inter-city transportation when selected multiple packages from one destination but <b>not</b>  international flights, please visit our journey planning tool 
                            <i class="fas fa-external-link-alt sp-redirect" 
                            onClick={()=>{window.open('/planjourney')}}></i> to search for flights or 
                            arrange your own.</i></div>
                        <div className="sp-box-head"><b>our packages in {boxItem['name']}</b></div>
                        <div className="sp-box-cont">


                            { boxItem["packs"].map((high, index2) => {
                                let head_id = 'head'+index1+index2;
                                let img_id = 'img'+index1+index2;
                                let cm_id = 'cm'+index1+index2;
                                let ac_id = 'ac'+index1+index2;
                                console.log(high['name']);

                                return (
                                    <div className="sp-highs" onMouseOver={()=>{zoomIn(index1.toString()+index2)}} onMouseOut={()=>{zoomOut(index1.toString()+index2)}}
                                        style={{"overflow":"hidden"}}>
                                        <div className="sp-highs-img-wrapper"><img className="sp-highs-img" src={high['src']} id={img_id}  >
                                            </img></div>
                                        <div className="sp-highs-img-text"></div>
                                        <div className="sp-highs-img-white" id={head_id}  ><b>{high['name']} Package</b></div>    
                                        <div className="sp-highs-cont">
                                            <div className="sp-highs-cont1"><p className="sp-highs-cont-head">Duration: </p>{high['duration']}  Days</div>
                                            <div className="sp-highs-cont1"><p className="sp-highs-cont-head">Included Landmarks: </p> {high['landmarks']}  </div>
                                            <div className="sp-highs-cont1"><p className="sp-highs-cont-head">Price: </p> {high['price']} </div>
                                    
                                        </div>
                                        <div className="sp-addcart"><p className="addcart" onClick={()=>{addCart(high['name'], cm_id, ac_id)}} id={ac_id}>add to your journey Cart</p></div>

                                        <svg className="checkmark1 sp-cm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" id={cm_id}>
                                            <circle className="checkmark__circle1" cx="26" cy="26" r="25" fill="none"/>
                                            <path className="checkmark__check1" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                        </svg>
                                    
                                    </div>
                            )})
                            }
                            
                        </div>

                    </div>)
                    }):''}

                    


                </div>


            </div>
        )
    }
}

export default NextPage