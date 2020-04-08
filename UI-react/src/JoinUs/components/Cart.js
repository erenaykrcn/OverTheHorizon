import React, {Component} from 'react';
import NavMain from '../../SeeDestinations/Nav/Nav.js';
import jQuery from 'jquery'; 
import c1 from './assets/c-1.png';
import c2 from './assets/c-2.png';
import CartPack from './CartPack.js';
import dict from './assets/dic.json';


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



class Cart extends Component {
    state = {
        packs: [],
        at_least_one_unordered: false,
        names: [],
    }

    getPacks() {
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
            let packs = [];
            let names = [];

            for (let i=0; i<responseData.length;i++) {
                let dest_name = responseData[i]['name'];


                if (responseData[i]['is_ordered']==false) {
                    thisComp.setState({
                        at_least_one_unordered: true
                    })
                }

                let high = dict[dest_name];
                console.log(high);

                packs.push(<CartPack name={dest_name} price={high['price']} landmarks={high['landmarks']} 
                                        duration={high['duration']} index={packs.length+1} is_ordered={responseData[i]['is_ordered']}  />)

                names.push(dest_name)
            }

            thisComp.setState({
                packs: packs,
                names: names,
            })

            console.log(thisComp.state.packs)
        }).catch(function(error){
            console.log("error",error);
        })
    }

    componentWillMount() {
        this.getPacks();
    }


    componentDidMount() {
    
        document.addEventListener("wheel", (e)=> {
            if (e.deltaY > 0) {
                document.getElementsByClassName("cart-pad1")[0].style.marginLeft = '100vw';

                let int = window.setInterval(function () {
                    document.getElementsByClassName("cart-pad1")[0].style.display = "none";
                    document.getElementsByClassName("cart-pad1")[0].style.marginLeft = '-100vw';
                    document.getElementsByClassName("cart-pad1")[0].style.display = "block";
                    window.clearInterval(int);
                },500)
            } else {
                document.getElementsByClassName("cart-pad1")[0].style.marginLeft = '30vw';
            }

          })
    }
    render() {
        let thisComp = this;

        function order() {
            if (thisComp.state.at_least_one_unordered) {
                
                for (let m=0;m<document.getElementsByClassName("cart-date").length;m++) {
                    if (document.getElementsByClassName("cart-date")[m].value === ''){
                        return alert("Please enter a date all of your added packages")
                    }
                }

                let xhttp = new XMLHttpRequest();
                let fd = new FormData();

                for (let i=0; i<thisComp.state.packs.length;i++) {
                    console.log(thisComp.state.names[i]);
                    fd.append('name'+i, thisComp.state.names[i]);
                }



                xhttp.onreadystatechange = function () {
                            if (this.readyState === 4 && this.status === 200) {
                                console.log(this.responseText)

                                if (this.responseText==="success") {
                                    
                                    for (let i=0; i<document.getElementsByClassName("ordered").length;i++) {
                                        document.getElementsByClassName("ordered")[i].style.display = "block";
                                    }
                    
                                    document.getElementById("tick-mark").style.marginLeft = "0";
                                    document.getElementById("checkmark1").style.display = "block";
                        
                                    let setint = window.setInterval(function() {
                                        document.getElementById("tick-mark").style.marginLeft = "-40vw";
                                        document.getElementById("checkmark1").style.display = "none";
                                        window.clearInterval(setint)
                                    },4000);

                                } else {
                                    alert('Action could not be done, please try again later or contact us directly')
                                }
                            

                            }
                };

                xhttp.open('POST', "/api/accounts/orderpack/", true);
                xhttp.setRequestHeader("Content-type", "application/json");
                xhttp.setRequestHeader("X-CSRFToken", csrftoken);
                xhttp.send(fd);


            } else {
                return alert("You have already ordered these packages")
            }
        }

        function logout() {
            let xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    window.location = '/'
                }
            }

            let params = null;
            xhttp.open('GET', "/api/accounts/logout/", true);
            xhttp.setRequestHeader("Content-type", "application/x-wwww-form-urlencoded");
            xhttp.send(params);

        }


        return (
            <div className="cart-main">
                <NavMain/>

                <svg className="checkmark1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" id="checkmark1">
                        <circle className="checkmark__circle1" cx="26" cy="26" r="25" fill="none"/>
                        <path className="checkmark__check1" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>

                <div className="tick-mark" id="tick-mark">
                    Your order is taken! Thank you very much. We will contact you via mail and/or phone to proceed to the next steps and arrange the payment process.

                </div>


                <div className="cart-head">Overview of your Journey Cart
                <br></br><p className="logout" onClick={logout} >Logout</p>
                </div>
                <div className="cart-imgwrapper" ><img src={c1} className="cart-pad1" ></img></div>

                <div className="cart-cont">
                    <div className="cart-packs">
                        <div className="cart-packs-head">Your added Packages</div>

                        { this.state.packs.length > 0 ?
                        <div>
                            {this.state.packs}
                            <div className="cart-order" onClick={order}><p className="cart-order-txt" >order these packages</p></div>
                        </div>
                        :
                        <div className="cart-no-packs">
                                No packs added yet, go see our packages
                                <i className="fas fa-external-link-alt extlink-ico" onClick={()=>{window.open("/seepackages")}}>
                                </i> or plan a journey<i className="fas fa-external-link-alt extlink-ico" onClick={()=>{window.open("/planjourney")}} >
                                </i> to take a look at our packs
                        </div>
                        }
                        
                    </div>
                </div>


                <img src={c2} className="cart-pad2" ></img>
            </div>
        )
    }
}


export default Cart