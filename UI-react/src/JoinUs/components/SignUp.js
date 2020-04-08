import React, {Component} from 'react';
import NavMain from '../../SeeDestinations/Nav/Nav.js';
import jQuery from 'jquery'; 

import su from './assets/su.png';

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


class  SignUp extends Component {
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
    
        function submit () {
            let username = document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let pass1 = document.getElementById("pass1").value;
            let pass2 = document.getElementById("pass2").value;
            var passf = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

            if (pass1!==pass2) {return alert("given passwords don't match!")}
            if (pass1.length<7) {return alert("given password is too short!")}
            if (!pass1.match(passf)) 
            {return alert('password must be between 6 to 20 characters which contains at least one numeric digit, one uppercase and one lowercase letter')}



            let thisComp = this;

            let xhttp = new XMLHttpRequest();


            xhttp.onreadystatechange = function () {
                        if (this.readyState === 4 && this.status === 200) {
                            console.log(this.responseText)

                            if (this.responseText==='username failed') {return alert('This username is already taken')}
                            if (this.responseText==='emil failed') {return alert('This email is already taken')}

                            if (this.responseText==="success") {
                                window.location = "/accounts/yourcart"
                            }
                           

                        }
            };

            let params = "username="+username+"&email="+email+"&password="+pass1;
            xhttp.open('POST', "/api/accounts/signup/", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.setRequestHeader("X-CSRFToken", csrftoken);
            xhttp.send(params);

        }



        return (
            <div className="su-main">
                {this.state.auth ? 
                <div>
                    {this.redirect()}
                </div>
                :
                <div>
                <NavMain/>
                <img src={su} className="su-pad"></img>

                <div className="su-cont">
                    <div className="su-subhead"><i class="fas fa-hashtag hashico"></i>your are so close to make your dreams come true</div>
                    <div className="su-head">Join us and let us plan the journey of your dreams together</div>
                    <div className="su-form">
                        <form className="from-form">
                        <input type="text" placeholder="your username" className="su-form-in" id="username" required ></input>
                        <input type="email" placeholder="your e-mail" className="su-form-in" id="email" required ></input>
                        <input type="password" placeholder="password" className="su-form-in" id="pass1" required ></input>
                        <input type="password" placeholder="repeat password" className="su-form-in" id="pass2" required ></input>

                        <div className="alrd-ac">You already have an account? <a className="login-a" href="/accounts/login">Login</a></div>
                        <button type="button" className="submit-button" onClick={submit}><p className="opacity-sub">send</p></button>
                        </form>
                    </div>

                </div>
                </div>
                }   
            </div>
        )
    }
}


export default SignUp