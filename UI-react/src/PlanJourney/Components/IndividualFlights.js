import React, {Component} from 'react';

import codes from './assets/airports.json';


class IndividualFlight extends Component {
    state = {
        segments: '',
    }

    componentDidMount() {
        this.insertSegments()
    }

    componentWillReceiveProps(nextProps) {
         this.insertSegments();
    }


    insertSegments() {
        let {flight} = this.props;
        let segments = [];
        const index = this.props.index;
        const {fl} = this.props;

        let className1 = 'segment' + ' segment' + index + ' segment'+index+fl;

        for (let i=0; i<flight.length;i++) {
            let route1 = flight[i]['route1'];
            let route2 = flight[i]['route2'];
            let name1 = '';
            let name2 = '';

            for (let m=0;m<codes.length;m++) {
                if (codes[m]['code'] === route1) {
                    name1 = codes[m]['name'];
                    if (name1 !== '' & name2 !== '') {
                        break
                    }
                } else if (codes[m]['code'] === route2) {
                    name2 = codes[m]['name'];
                    if (name1 !== '' & name2 !== '') {
                        break
                    }
                } 
            }

            let segment_route = route1 + "("+ name1 + ")"  + "--->" + route2  +  "(" + name2 + ")";

            segments.push(<div className={className1+' '+className1+i}>{segment_route}</div>)
        }

        this.setState({
            segments: segments,
        })
    }

    render() {

        let {flight} = this.props;
        const airline = flight[0]['airline'];
        const date = flight[0]['date'];
        const duration = flight[0]['duration'];
        const price = flight[0]['price'];
        let dire = 'direct';
        let is_direct = true;
        let {person} = this.props;

        const route = this.props.originCode + '--->' + this.props.destCode;
        
        const index = this.props.index;
        const {fl} = this.props;

        if (flight.length>1) {
            dire = 'indirect';
            is_direct = false;
        }

        let is_indirect = !is_direct;

        let segment_id = 'segmentid-' + index + fl;
        let segment_class = 'segments ' + 'segments'+index;

        let radio_id = 'radio_id' + index + fl;
        let radio_class = 'radio_class' + index;
        
        let opened_tabs = 0;
        

        function seeSegments() {
            if (window.getComputedStyle(document.getElementById(segment_id)).getPropertyValue('display')==='none'){
               
                document.getElementById(segment_id).style.display = "block";
                opened_tabs++;



            //     let new_he = parseInt(window.getComputedStyle(document.getElementsByClassName('sf-main')[0])
            //     .getPropertyValue('height'),10) + 
            // parseInt(window.getComputedStyle(document.getElementById(segment_id)).getPropertyValue('height'),10)
                if (opened_tabs===1) {
                    document.getElementsByClassName('sf-main')[0].style.height = "60vw";
                    document.getElementsByClassName('pj-main')[0].style.height = "100vw";
                } else if (opened_tabs===2) {
                    document.getElementsByClassName('sf-main')[0].style.height = "80vw";
                    document.getElementsByClassName('pj-main')[0].style.height = "120vw";
                } else if (opened_tabs===3) {
                    document.getElementsByClassName('sf-main')[0].style.height = "100vw";
                    document.getElementsByClassName('pj-main')[0].style.height = "150vw";
                } else if (opened_tabs===4) {
                    document.getElementsByClassName('sf-main')[0].style.height = "120vw";
                    document.getElementsByClassName('pj-main')[0].style.height = "170vw";
                } else if (opened_tabs===5) {
                    document.getElementsByClassName('sf-main')[0].style.height = "140vw";
                    document.getElementsByClassName('pj-main')[0].style.height = "190vw";
                }
                

            } else {
            //     let new_h = parseInt(window.getComputedStyle(document.getElementsByClassName('sf-main')[0])
            //     .getPropertyValue('height'),10) - 
            // parseInt(window.getComputedStyle(document.getElementById(segment_id)).getPropertyValue('height'),10);

            //     if (new_h<parseInt(window.screen.height,10)) {
            //         new_h = "100vh";
            //     } else {
            //         new_h += new_h + "px";
            //     }
                
                document.getElementById(segment_id).style.display = "none";
                opened_tabs -= 1;

                
                if (opened_tabs===1) {
                    document.getElementsByClassName('sf-main')[0].style.height = "60vw";
                    document.getElementsByClassName('pj-main')[0].style.height = "100vw";
                } else if (opened_tabs===2) {
                    document.getElementsByClassName('sf-main')[0].style.height = "80vw";
                    document.getElementsByClassName('pj-main')[0].style.height = "120vw";
                } else if (opened_tabs===3) {
                    document.getElementsByClassName('sf-main')[0].style.height = "100vw";
                    document.getElementsByClassName('pj-main')[0].style.height = "150vw";
                } else if (opened_tabs===4) {
                    document.getElementsByClassName('sf-main')[0].style.height = "120vw";
                    document.getElementsByClassName('pj-main')[0].style.height = "170vw";
                } else if (opened_tabs===5) {
                    document.getElementsByClassName('sf-main')[0].style.height = "40vw";
                    document.getElementsByClassName('pj-main')[0].style.height = "90vw";
                }


            }
        }

        function check() {
            document.getElementById("al"+index).innerHTML = "Airline: "+airline;
            document.getElementById("date"+index).innerHTML = "Date: " + date;

            let segment_route = '';

            for (let i=0;i<document.getElementsByClassName("segment"+index+fl).length;i++) {
                
                if (segment_route!=='') {segment_route+='/'}

                let seg = document.getElementsByClassName("segment"+index+fl)[i].innerHTML;
                segment_route += seg;
            }
            document.getElementById("segmentt"+index).innerHTML = "Segments: "+ segment_route;

            document.getElementById("price"+index).innerHTML = price;

            document.getElementById("grand_total_with").innerHTML= Math.ceil(parseFloat(document.getElementById("grand_total_with").innerHTML,10)
                 + (parseFloat(price.slice(0, -3),10))*parseInt(person,10));
        }


        return (
        <div key={100+index}>
            <div className="sf-flight-nav sf-flight-nav1">
                <div className="sf-nav-tab sf-nav-airline">{airline}</div>
                <div className="sf-nav-tab sf-nav-route">{route}</div>
                <div className="sf-nav-tab sf-nav-type" onClick={seeSegments}>{dire} 
                
                {is_indirect ?
                <div>(see segments) <i class="fas fa-angle-down indirect-ico"
                    onClick={seeSegments}></i></div> : ''}
                    
                </div>
                <div className="sf-nav-tab sf-nav-date">{date}</div>
                <div className="sf-nav-tab sf-nav-duration">{duration}</div>
                <div className="sf-nav-tab sf-nav-price">{price}</div>
            </div>
            
            <div className="sf-nav-tab sf-nav-radio">
                    <label className="container-label">
                        <input type="radio" name="radio" id={radio_id} className={radio_class} onClick={check}></input>
                        <span className="checkmark"></span>
                    </label>
            </div>

            <div className={segment_class} id={segment_id}>
                {this.state.segments}
            </div>

        </div>

        )
    }
}


export default IndividualFlight




