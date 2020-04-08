import React, {Component} from 'react';


class Flight extends Component {
    render() {
        let index = this.props.index;
        let {route} = this.props;

        let segment_id = 'segmentt' + index;
        let airline_id = "al" + index;
        let date_id = "date" + index;
        let price_id = "price"+index;

        function seeFlights(i) { 
            
            if (window.getComputedStyle(document.getElementsByClassName("flight-details")[i]).getPropertyValue("height")==="0px") {
                document.getElementsByClassName("flight-details")[i].style.height = "auto";
            } else {
                document.getElementsByClassName("flight-details")[i].style.height = "0";
            }
        }

        
        return (
                        <div className="ow-dest">
                            <div className="ow-dest-head" onClick={()=>{seeFlights(index)}}>
                                
                                <p className="dest-head">Flight {index+1}: {route}  <i class="fas fa-angle-down dest-ang"></i></p>
                                <div className="dest-total"> Total per passenger: <p className="price_id price_fl" id={price_id}></p></div>
                            </div>

                            <div className="flight-details">
                                    <div className="ow-dest-package" id={segment_id}>Segments:  ESB--->IST / IST--->DER</div>
                                    <div className="ow-dest-package" id={airline_id}>Airline:  Lufthansa</div>
                                    <div className="ow-dest-package" id={date_id}>Date:  </div>
                            </div>
                        </div> 
        )
    }
}


export default Flight