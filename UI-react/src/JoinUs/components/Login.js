import React, {Component} from 'react';
import NavMain from '../../SeeDestinations/Nav/Nav.js';
import jQuery from 'jquery'; 
import li from './assets/li.png';



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



class Login extends Component {
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
    }

    redirect() {
        window.location = "/accounts/yourcart"
    }

    render() {
        
        function submit() {
            let username = document.getElementById("username").value;
            let pass = document.getElementById("pass").value;

            if (username!==''&&pass!=='') {

            let xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                        if (this.readyState === 4 && this.status === 200) {
                            console.log(this.responseText)

                            if (this.responseText==='failed') {return alert('Please check your data')}

                            if (this.responseText==="success") {
                                window.location = "/accounts/yourcart"
                            }
                           

                        }
            };

            let params = "username="+username+"&password="+pass;
            xhttp.open('POST', "/api/accounts/login/", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.setRequestHeader("X-CSRFToken", csrftoken);
            xhttp.send(params);
            } else {
                return alert("Please complete all the fields")
            }

        }
    
        return (
            <div>
                {this.state.auth ? 
                <div>
                    {this.redirect()}
                </div>
                :
                <div className="su-main">
                    <NavMain/>
                    <img src={li} className="su-pad li-pad"></img>

                    <div className="su-cont li-cont"  >
                        <div className="su-subhead"><i class="fas fa-hashtag hashico"></i>welcome back to the place where dreams come true!</div>
                        <div className="su-head">Login to your account to discover the beauties of the world!</div>
                        
                        <div className="su-form">
                            <form className="from-form">
                            <input type="text" placeholder="your username" className="su-form-in" id="username" ></input>
                            <input type="password" placeholder="password" className="su-form-in" id="pass" ></input>

                            <div className="alrd-ac">You don't have an account? <a className="login-a" href="/accounts/signup">Sign Up</a></div>
                            <button type="button" className="submit-button" onClick={submit} style={{"margin-top":"2.5vw"}}>
                                <p className="opacity-sub">send</p></button>
                            </form>
                        </div>

                    </div>                    

                </div>
                }
            </div>
        )
    }
}


export default Login