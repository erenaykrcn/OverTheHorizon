import React, {Component} from 'react';
import IndividualFlight from './IndividualFlights.js';


class FoundFlightsTab extends Component {
    state = {
        originCode: '',
        destCode: '',
        person: '',
        items: 'Loading...',

        foundFlights:  [ 

        ],
    }

    searchFlights = () => {
        let {originCode} = this.props;
        let {destCode} = this.props;


        let {date} = this.props;
        const {person} = this.props;
        const {token} = this.props;
        const {index} = this.props;
        const {is_return} = this.props;
        const {is_origin} = this.props;
        let thisComp = this;

        thisComp.setState({
            date: date,
        })


        if (!is_origin) {
            let dates_array = date.split('-');
            
            let date_day = parseInt(dates_array[2],10)+(5*index);
            let date_month = parseInt(dates_array[1],10);

            if (date_day>30) {
                date_day = date_day -30;
                date_month++ ;
            }

            if (date_day<10) {
                date_day = "0" + date_day;
            }

            if (date_month<10) {
                date_month = "0" + date_month;
            }

            date = '2020-' + date_month + "-" + date_day; 
        }


        let endpoint = 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode='+
        originCode+'&destinationLocationCode='+destCode+'&departureDate='+date+
            '&adults=1&nonStop=false';
            
        let lookupOptions = {
        method: "GET",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + token,
        },
        }         

        fetch(endpoint, lookupOptions)
        .then(res => res.json()).then(function(responseData){
            if (responseData['data']) {

                let flights = [];

                let airlines = [];
                
                if (Object.keys(responseData['dictionaries']['carriers']).length>5) {
                    for (let i=0;i<responseData['data'].length;i++) {
                    
                        let airline = responseData['dictionaries']['carriers'][responseData['data'][i]['itineraries'][0]['segments'][0]['carrierCode']];
                        
                    
                        if (!airlines.includes(airline)
                            && flights.length<5) {
                            if (responseData['data'][i]['itineraries'][0]['segments'].length>1) {
                                let flight = [];
                                for (let m=0;m<responseData['data'][i]['itineraries'][0]['segments'].length;m++) {
                                    let segment = {};
                                    segment['airline'] = responseData['dictionaries']['carriers'][responseData['data'][i]['itineraries'][0]['segments'][m]['carrierCode']];
                                    airlines.push(segment['airline']);

                                    let route1 = responseData['data'][i]['itineraries'][0]['segments'][m]['departure']['iataCode']
                                    let route2 = responseData['data'][i]['itineraries'][0]['segments'][m]['arrival']['iataCode']


                                    segment['date'] = date;
                                    segment['route1'] = route1;
                                    segment['route2'] = route2;

                                    segment['duration'] = responseData['data'][i]['itineraries'][0]['duration'];
                                    segment['price'] = responseData['data'][i]['price']['total'] + responseData['data'][i]['price']['currency']
                                    flight.push(segment);
                                }
                                flights.push(flight);
                            }
                        }
                        if (flights.length>5) {break} 
                    }
                } else {
                    for (let i=0;i<responseData['data'].length;i++) {
                        let airline = responseData['dictionaries']['carriers'][responseData['data'][i]['itineraries'][0]['segments'][0]['carrierCode']];
                        

                        if (flights.length<Object.keys(responseData['dictionaries']['carriers']).length
                            && !airlines.includes(airline)) {
                            
                            if (responseData['data'][i]['itineraries'][0]['segments'].length>1) {
                                let flight = [];
                                for (let m=0;m<responseData['data'][i]['itineraries'][0]['segments'].length;m++) {
                                    let segment = {};
                                    segment['airline'] = responseData['dictionaries']['carriers'][responseData['data'][i]['itineraries'][0]['segments'][m]['carrierCode']];
                                    airlines.push(segment['airline']);
                                    
                                    let route1 = responseData['data'][i]['itineraries'][0]['segments'][m]['departure']['iataCode']
                                    let route2 = responseData['data'][i]['itineraries'][0]['segments'][m]['arrival']['iataCode']

                                    segment['route1'] = route1;
                                    segment['route2'] = route2;
                                    
                                    segment['date'] = date;
                                    segment['duration'] = responseData['data'][i]['itineraries'][0]['duration'];
                                    segment['price'] = responseData['data'][i]['price']['total'] + responseData['data'][i]['price']['currency']
                                    flight.push(segment);
                                }
                                flights.push(flight);
                            }
                        }
                        if (flights.length>Object.keys(responseData['dictionaries']['carriers']).length) {break} 
                    }
                }

                thisComp.setState({
                    foundFlights: flights,
                })


                let items = []

                for (let i=0; i<flights.length; i++) {   
                        let flight = flights[i]
                        
                        items.push(<IndividualFlight fl={i} index={index}
                            flight={flight} originCode={originCode} destCode={destCode} key={100+i} person={person}/>)
                }
        
                thisComp.setState({
                    items: items,
                })


                return(items)

            }
            

        }).catch(function(error){
            console.log("error",error);
        })

    }

    componentDidMount() {
         this.searchFlights();
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            items: 'Loading...',
        })
        this.searchFlights();
    }

    render() {   
        let {originName} = this.props;
        let {destName} = this.props; 
    
        let {originCode} = this.props;
        let {destCode} = this.props;


        let {date} = this.props;
        const {person} = this.props;
        const {token} = this.props;
        let thisComp = this;
        const {index} = this.props;
        const {is_return} = this.props;
        const {is_origin} = this.props;

        if (!is_origin) {
            let dates_array = date.split('-');
            
            let date_day = parseInt(dates_array[2],10)+(5*index);
            let date_month = parseInt(dates_array[1],10);

            if (date_day>30) {
                date_day = date_day -30;
                date_month++ ;
            }

            date = '2020-' + date_month + "-" + date_day; 
        }

       
    
        function goBack () {
            document.getElementsByClassName("sf-main")[0].style.right = "120vw";
            document.getElementById("main-tab").style.marginRight = "0";
        }

        function goB() {
            if (index===0) {
                document.getElementsByClassName("sf-tab1")[0].style.display = "block";
                document.getElementsByClassName("sf-tab2")[0].style.display = "none";
                document.getElementsByClassName("sf-main")[0].style.height = "45vw";
            } else {
                document.getElementsByClassName("sf-tab2")[index].style.display = "none";
                document.getElementsByClassName("sf-tab2")[index-1].style.display = "block";
            }
        }


        function goN() {
            let segment_ids = [];
            for (let i=0;i<thisC.state.foundFlights.length;i++) {
                segment_ids.push("segmentid-"+index+i)
            }
            let at_least_one_checked = false;

            for (let i=0;i<document.getElementsByClassName('radio_class' + index).length;i++) {
                if (document.getElementsByClassName('radio_class' + index)[i].checked) {
                    at_least_one_checked = true;
                }
            }


            if (is_return) {
                if (at_least_one_checked) {

                    for (let i=0;i<segment_ids.length;i++) {
                        seeSegments(segment_ids[i]);
                    }

                    document.getElementsByClassName("sf-tab2")[index].style.display = "none";
                    document.getElementsByClassName("ow-main")[0].style.display = "block";
                    document.getElementsByClassName("sf-main")[0].style.height = "auto";

                    document.getElementById("head3").innerHTML = "";
                    document.getElementsByClassName("ow-box2")[0].style.display = "block";

                } else {
                    return alert('Please select a flight to proceed')
                }
            } else {
                if (at_least_one_checked) {

                    
                    for (let i=0;i<segment_ids.length;i++) {
                        seeSegments(segment_ids[i]);
                    }


                    document.getElementsByClassName("sf-tab2")[index].style.display = "none";
                    document.getElementsByClassName("sf-tab2")[index+1].style.display = "block";
                } else {
                    return alert('Please select a flight to proceed')
                }

            }
        }

        const thisC = this;

        let intt = window.setInterval(function() {
            if(thisC.state.items === 'Loading...') {
                thisC.searchFlights();
            } 
        }, 2000)


        function seeSegments(segment_id) {
            if (window.getComputedStyle(document.getElementById(segment_id)).getPropertyValue('display')==='none'){
               
            } else {
                document.getElementsByClassName('sf-main')[0].style.height =
                parseInt(window.getComputedStyle(document.getElementsByClassName('sf-main')[0])
                    .getPropertyValue('height'),10) - 
                parseInt(window.getComputedStyle(document.getElementById(segment_id)).getPropertyValue('height'),10) + 'px';

                
                document.getElementById(segment_id).style.display = "none";


            }
        }
              


        return (
            <div>

            {is_origin ?
            <div className="sf-tab2" style={{'display': 'block'}} key={index}>
                    <div className="sf-ico0-box" onClick={goBack}><i class="fas fa-angle-left sf-ico0"></i>go back</div>
                        {is_return ? 
                        <div className="sf-head3">Return Flights for {originCode}({originName})- {destCode}({destName}) per passenger</div> :
                        <div className="sf-head3">Found Flights for  {originCode}({originName})- {destCode}({destName}) per passenger</div> }     
                    <div className="sf-flight-nav">
                        <div className="sf-nav-tab sf-nav-airline">Airline</div>
                        <div className="sf-nav-tab sf-nav-route">Route</div>
                        <div className="sf-nav-tab sf-nav-type">Direct/ Indirect</div>
                        <div className="sf-nav-tab sf-nav-date">Date</div>
                        <div className="sf-nav-tab sf-nav-duration">Duration</div>
                        <div className="sf-nav-tab sf-nav-price">Price </div>
                    </div>

                    {this.state.items}
                    
                    <i class="fas fa-angle-left sf-ico2" onClick={goB}></i>
                    <i class="fas fa-angle-right sf-ico3" onClick={goN} ></i>
            </div>
            :
                
            <div className="sf-tab2" key={index}>
                    <div className="sf-ico0-box" onClick={goBack}><i class="fas fa-angle-left sf-ico0"></i>go back</div>
                        {is_return ? 
                        <div className="sf-head3">Return Flights for {originCode}({originName})- {destCode}({destName}) per passenger</div> :
                        <div className="sf-head3">Found Flights for  {originCode}({originName})- {destCode}({destName}) per passenger</div> }     
                    <div className="sf-flight-nav">
                        <div className="sf-nav-tab sf-nav-airline">Airline</div>
                        <div className="sf-nav-tab sf-nav-route">Route</div>
                        <div className="sf-nav-tab sf-nav-type">Direct/ Indirect</div>
                        <div className="sf-nav-tab sf-nav-date">Date</div>
                        <div className="sf-nav-tab sf-nav-duration">Duration</div>
                        <div className="sf-nav-tab sf-nav-price">Price</div>
                    </div>

                    {this.state.items}
                    
                    <i class="fas fa-angle-left sf-ico2" onClick={goB}></i>
                    <i class="fas fa-angle-right sf-ico3" onClick={goN} ></i>
            </div>
            }
            </div>
        )
    }
}


export default FoundFlightsTab