import React, {Component} from 'react';
import Package from './overviews/Package.js';
import Flight from './overviews/Flight.js';


class Overview extends Component {
    state = {
        date: '',
        person: '',

        flights: [],
        packages: [],

        transDests: '',

        locations: '',
        gtwith: 0,
        gtwithout: 0,
        
    }

    insertPackages(){
        let {date} = this.props;
        let {person} = this.props;
        let {dests} = this.props;

        let {highs_dict} = this.props;
        let {plan_added_dests} = this.props;


        this.setState({
            date: date,
            person: person,
            transDests: dests,
        });

        let packs = [];

        if (dests!=="") {
            for (let i=0;i<dests.length;i++) {
                packs.push(
                    <Package    index={i} highs_dict={highs_dict} plan_added_dests={plan_added_dests}
                    dest = {dests[i]} />);
            }
        }

        this.setState({
            packages: packs,
        })
    }

    insertFlights() {
        let fls = [];
        let {dests} = this.props;
        let transCodes = this.props.transCodes;
        let originCode = this.props.originCode;

        let route1, route2;


        if (dests!=="") {
            for (let i=0;i<=dests.length;i++) {
                if (i===0) {
                    route1 = originCode;
                    route2 = transCodes[i];
                } else if (i===dests.length) {
                    route1 = transCodes[i-1];
                    route2 = originCode;
                } else {
                    route1 = transCodes[i-1];
                    route2 = transCodes[i];
                }
                
                let route = route1 + "--->" + route2;


                fls.push(
                    <Flight index={i} route = {route}/>);
            }
        }


        this.setState({
            flights: fls,
        })

    }

    totalCalculator() {
        let {person} = this.props;
        let total2 = 0;

        for (let i=0; i<document.getElementsByClassName("pack_price").length;i++) {
            total2 += (parseInt(document.getElementsByClassName("pack_price")[i].innerHTML,10) * parseInt(person,10)  )
        }

        this.setState({
            gtwithout: total2,
        })

        document.getElementById("grand_total_without").innerHTML = "Grand Total (without flights): " + total2 + "EUR";
    }


    componentDidMount() {
        this.insertPackages();
        this.insertFlights();

        this.totalCalculator();

    }

    componentWillReceiveProps(nextProps) {
        this.insertPackages();    
        this.insertFlights();
        this.totalCalculator();

    }

    render(){

        let {person} = this.props;
        let {date} = this.props;

        let thisComp = this;

        function goB1() {
            document.getElementsByClassName("ow-main")[0].style.display = "none";
            document.getElementsByClassName("sf-tab2")[document.getElementsByClassName("sf-tab2").length-1].style.display = "block";
            document.getElementsByClassName("sf-main")[0].style.height = "40vw";

            document.getElementById("head3").innerHTML = "Plan the Journey of your Dreams!";
            document.getElementsByClassName("ow-box2")[0].style.display = "none";
        }

        let intt = window.setInterval(function(){
            if(thisComp.state.gtwithout===0){thisComp.totalCalculator();}else{window.clearInterval(intt)}
        },1000)


        return(
            <div className="ow-main">
                <div className="ow-head sf-head3">Your Journey Overview (journey for: {person} / starting on {date})</div>
                <div className="ow-box1">

                    <div className="ow-dests">
                        <div className="ow-head1">Destinations & Packages</div>

                        {this.state.packages}
                                
                    </div>
                    <div className="ow-dests">
                        <div className="ow-head1">International Flights</div>

                        {this.state.flights}
                          
                    </div>

                </div><br></br><br></br>

                
                <i class="fas fa-angle-left sf-icoii" onClick={goB1}></i>

                
            </div>
        )
    }
}

export default Overview