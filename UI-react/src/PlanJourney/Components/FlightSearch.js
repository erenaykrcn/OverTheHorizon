import React, {Component} from 'react';
import FoundFlightsTab from './FoundFlightsTab.js';
import Overview from './Overview.js';


class FlightSearch extends Component {
    state = {
        originCode: '',
        originName: '',
        transDests: [],
        date: '',
        person: 0,

        transCodes: [],
        transNames: [],

        items: [],
        locations: '',

    }

    constructor(props) {
        super(props);
        this.ff0 = React.createRef();
        this.overview = React.createRef();

    }

    render() {
        let {token} = this.props;
        let thisComp = this;
    

    

        const nextHandler = () => {
            console.log(thisComp.state.transCodes);
            if (document.getElementById('start').value!=='') {

                let ite = [];

                thisComp.setState({
                    items: ite,
                });

                this.setState({
                    date: document.getElementById('start').value,
                    person: document.getElementsByClassName("sf-select1")[0].value,
                });

                let date = document.getElementById('start').value;
                let person = document.getElementsByClassName("sf-select1")[0].value;

                for (let i=0;i<thisComp.state.transCodes.length+2;i++) {
                    if (i===0) {
                        ite.push(
                            <FoundFlightsTab originCode={thisComp.state.originCode} originName = {thisComp.state.originName}
                                        destCode={thisComp.state.transCodes[0]}  destName={thisComp.state.transNames[0]} is_return={false}  token={token}
                                        is_origin={true} person={person} date={date} index={0} flights={thisComp.state.foundFlights} key={i}/>)
                    } else if (i<thisComp.state.transCodes.length) {
                        ite.push(<FoundFlightsTab originCode={thisComp.state.transCodes[i-1]} destName={thisComp.state.transNames[i]} originName = {thisComp.state.transNames[i-1]}
                                    destCode={thisComp.state.transCodes[i]} is_return={false} token={token}
                                    is_origin={false} person={person} date={date} index={i} flights={thisComp.state.foundFlights} key={i}/>);
                    } else if (i===thisComp.state.transCodes.length) {
                        ite.push(<FoundFlightsTab originCode={thisComp.state.transCodes[i-1]} 
                            destCode={thisComp.state.originCode} is_return={true} token={token} destName={thisComp.state.originName} originName = {thisComp.state.transNames[i-1]}
                            is_origin={false} person={person} date={date} index={i} flights={thisComp.state.foundFlights} key={i}/>);
                    } else {
                        ite.push(<Overview ref={thisComp.overview} date={date} person={person} 
                            dests={thisComp.state.transDests} highs_dict={thisComp.state.highs_dict}
                            plan_added_dests = {thisComp.state.plan_added_dests} transCodes={thisComp.state.transCodes} originCode={thisComp.state.originCode}/>)
                    }
                }

                thisComp.setState({
                    items: ite,
                });

                document.getElementsByClassName("sf-tab1")[0].style.display = "none";
                try {
                    document.getElementsByClassName("sf-tab2")[0].style.display = "block";
                } catch(e) {
                    console.log("e")
                }
            } else {
                return alert('Please enter a date')
            }
        }

        function goBack () {
            document.getElementsByClassName("sf-main")[0].style.right = "120vw";
            document.getElementById("main-tab").style.marginRight = "0";
        }
        
        return (
            <div className="sf-main">
                <div className="sf-wrapper">
                    <div className="sf-tab1">
                        <div className="sf-ico0-box" onClick={goBack}><i class="fas fa-angle-left sf-ico0"></i>go back</div>
                        <div className="sf-head1">Please select date of departure and return will be selected automatically according to your packages</div>

                        <input type="date" id="start" name="trip-start"
                            min="2020-06-01" max="2020-10-01" className="sf-date"></input>

                        <div className="sf-head2">Please enter the number of passangers</div>    

                        <select className="sf-select1">
                            <option value="1" style={{"text-align":"center"}}>1</option>
                            <option value="2" style={{"text-align":"center"}}>2</option>
                            <option value="3" style={{"text-align":"center"}}>3</option>
                            <option value="4" style={{"text-align":"center"}}>4</option>
                            <option value="5" style={{"text-align":"center"}}>5</option>
                            <option value="6" style={{"text-align":"center"}}>6</option>
                            <option value="7" style={{"text-align":"center"}}>7</option>
                            <option value="8" style={{"text-align":"center"}}>8</option>
                        </select>
                        <i className="fas fa-angle-right sf-ico1" onClick={nextHandler}></i>
                    </div>

                    <div id="root2">
                    {this.state.items}
                    
                    </div>

                </div>
            </div>
        )
    }
}

export default FlightSearch