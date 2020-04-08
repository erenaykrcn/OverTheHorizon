import React, {Component} from 'react';
import NavMain from '../SeeDestinations/Nav/Nav.js';
import cp1 from './assets/cp-1.png';


class Contact extends Component {
    render() {
        return (
            <div className="cp-main">
                <NavMain/>

                <div className="cp-cont">

                    <div  className="cp-head">Contact Us</div>
                    <div className="cp-mail">
                        You can write us an email and we will try to get back to you ass soon as possible:
                        <br></br><br></br> <i class="fas fa-envelope-open-text emailico"></i> <p className="href-mail">contact@othorizon.com</p>
                    </div>
                    <div>
                        <p className="reachus">You can also reach under this number during the following hours:</p>
                        <p className="tel-numb"><i class="fas fa-phone phoneico"></i>+90 542 713 2697</p>
                        <div className="open-hours">
                            Monday- Friday: 09.00 - 17.00 <br></br>
                            Saturday: 13.00 - 17.00
                        </div>
                    </div>
                </div>

                <img className="cp-pad" src={cp1}></img>


            </div>
        )
    }
}


export default Contact