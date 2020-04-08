import React from 'react';
import NavMain from '../SeeDestinations/Nav/Nav';
import SVGMarkers from './SVG-Markers/SVG-Markers.js';
import FlightSearch from './Components/FlightSearch.js';

import world from './assets/world.png';

import sa from "./assets/sa/sa.png";
import eg from './assets/eg/eg-map.png';
import mor from "./assets/mor/mor-map.jpg";
import ch from './assets/ch/ch.png';
import jap from './assets/jap/jap.png';
import turk from './assets/turk/turk.png';
import eu from './assets/eu/eu.png';

import haw from './assets/haw/haw.jpg';
import ln from './assets/ln/ln.jpg';

import codes from './assets/codes.json';
import continents from './assets/continents.json';
import iataCodes from './Components/assets/destsCODES.json';






class PlanJourney extends React.Component {
    state= {
        token: '',
        devToken: '',
        foundFlighs: '',
        addedLocations: [],
        origin: '',
        originAirport: [],
        origin_continent: [],
    }
    
    constructor(props){
        super(props);
        this.fsElement = React.createRef();
    }

    getToken() {

        let thisComp = this;
        let url = 'https://test.api.amadeus.com/v1/security/oauth2/token';
        let lookupOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
            },
            crossDomain: true,

            body: 'grant_type=client_credentials&client_id=WakifL5wejcIawrjyFCBdH09ndpO0kUC&client_secret='
                +'8uAKm3pvJQjhdMul',
        } 

        fetch(url, lookupOptions)
        .then(res => res.json()).then(function(responseData){
            thisComp.setState({
              token: responseData['access_token']
            })
            console.log(responseData['access_token'])
          }).catch(function(error){
            console.log("error",error);
          })
    }

    componentDidMount() {
        this.setState({
          token:'',
        });
        this.getToken();   
    }



    render() {
        let plan_added_dests = {'South Africa': [], 'Morocco': [], 'Turkey': [], 'China': [], 'Japan': [], 'Polynesia': [],
        'Egypt': [], 'Hawaii': [], 'Europe': [] }

        const counts_dict = {
            'South Africa': 1,
            'Egypt': 2,
            'Morocco': 3,
            'China': 4,
            'Japan': 5,
            'Turkey': 6,
            'Europe':7,
            'Polynesia': 8,
            'Hawaii': 9,
        }

        let added_small_tabs = 0;

        const abr_count = {'South Africa': ['sa','/seedestinations/southafricaguide'], 
                            'Egypt': ['eg', '/seedestinations/egyptguide'],
                            'Morocco': ['mor', '/seedestinations/moroccoguide'],
                            'China': ['ch', '/seedestinations/chinaguide'],
                            'Japan': ['jap', '/seedestinations/japanguide'],
                            'Turkey': ['turk', '/seedestinations/turkeyguide'],
                            'Europe': ['eu', '/seedestinations/weuropeguide'],
                            'Polynesia': ['ln', '/seedestinations/lesmarquisesguide'],
                            'Hawaii': ['haw', '/seedestinations/hawaiisguide'],
                            
                        }

        const countries_dict = {
            'Europe': ['Germany', 'Austria', 'Czechia', 'France', 'Spain', 'The Netherlands', 'Belgium'],
            'Asia': ['China', 'Japan','Turkey'],
            'Africa': ['Egypt', 'Morocco', 'South Africa'],
            'Pacific': ['Polynesia', 'Hawaii']
        }

        const highs_dict = {
            'South Africa': {1:{'name':'Cape Town', 'price': 100},
                             2:{'name': 'Cape Winelands', 'price': 50},
                             4:{'name': 'Drakensberg', 'price': 100},                   
                             3:{'name': 'Kruger National Park', 'price':50}},
            'Egypt': {
                1:{'name':'Pyramids of Giza','price':110},
                2:{'name':'Luxor','price':90},
                3:{'name':'Memphis','price':100},
            },
            'Morocco': {
                1: {'name':'Marrakesh','price':50},
                2: {'name':'High Atlas Mountains','price':50},
                3: {'name':'Essaouira','price':60},
                4: {'name':'Moulay Idriss Zerhoun','price':60},
            },
            'China': {
                1: {'name': 'Great Wall', 'price': 150},
                2: {'name': 'Forbidden City', 'price': 100},
                3: {'name': 'Terracotta Army', 'price': 100},
                4: {'name': 'The Silk Road', 'price': 150}
            },
            'Japan': {
                1: {'name': 'Kyoto', 'price': 150},
                2: {'name': 'Tokyo', 'price': 100},
                3: {'name': 'Mount Fuji', 'price': 150},
                4: {'name': 'Cherry Blossom Viewing Tour', 'price': 80},
            },
            'Turkey': {
                1: {'name': 'Istanbul', 'price': 200},
                2: {'name':'Datça Peninsula', 'price': 200},
                3: {'name': 'Cappadocia', 'price': 150},
                4: {'name': 'Pamukkale & Hierapolis' ,'price': 100},
            },
            'Europe': {
                1: {'name': 'Paris', 'price': 200},
                2: {'name': 'Barcelona', 'price': 200},
                3: {'name': 'Amsterdam', 'price': 180},
                4: {'name': 'Ghent, Bruges & Antwerp', 'price': 200},
                5: {'name': 'Vienna & Prague', 'price': 250},
                6: {'name': 'Munich & Salzburg', 'price': 250},
                7: {'name': 'Oslo & Norwegian Fjords', 'price':200},
                8: {'name': 'Copenhagen & Stockholm', 'price': 200},
                9: {'name': 'Saint Petersburg', 'price': 150},
            },
            'Polynesia': {
                1: {'name':'Atuona & Hiva Oa', 'price': 300},
                2: {'name': 'Bora Bora', 'price': 280},
                3: {'name':'Papeete', 'price': 250},
            },
            'Hawaii': {
                1: {'name': 'Honolulu', 'price': 150},
                2: {'name':'Volcanoes National Park', 'price': 150},
                3: {'name': 'Pearl Harbour', 'price': 100}
            }
        }



        let added_option = false;

        let prev_sc;

        const continents_abr_dict = {
        'North America': 'na','South America': 'sa','Europe': 'eu', 'Africa': 'af', 'Asia': 'as', 'Oceania': 'oc'}

        let added_countries = [];

        let numb_of_dest = 0;

        let thisC = this;
        let added_dest = 0;
        let changed = false;

        let thisComp = this;        
        const {token} = this.state;

    
        const selectDidChange= (id) => {
                let can_continue = false;
                
                let thisC = this;

                var data = null;


                fetch("https://tripadvisor1.p.rapidapi.com/airports/search?locale=en_US&query="+document.getElementById("cityId").value, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		                "x-rapidapi-key": "0022a4e785msha10862ebdd7d555p199db4jsn7e0f4d1d3745"
                    }
                })
                .then(res => res.json()).then(function(responseData){
                    if (document.getElementById("cityId").value!=='') {
                    let country_code;

                    for(let i=0;i<codes.length;i++) {
                        if (document.getElementById("countryId").value==codes[i]['Name']) {
                            country_code = codes[i]['Code']
                        } 
                    }

                    if (country_code==undefined) {
                        return alert("An unexpected error occured, please control the informations")
                    }

                    if (responseData.length==0) {return alert ("We could not find any airports in the city you chosed, please try again:")}

                    let ind = 0;
                    for(let i=0;i<responseData.length;i++) {
                        if (responseData[i]['country_code']==country_code) {
                            thisC.state.originAirport = responseData[i]['code'];
                            ind = i;
                            break
                        }
                    }
                    console.log(responseData);
                    
                    thisC.fsElement.current.setState({
                        originCode: thisC.state.originAirport,
                        originName: responseData[ind]['name']
                    })

                    if (thisC.state.originAirport=="") {
                        return alert("We could not find any airports in the city you chosed, please try again:")
                    }
                    
                    
                    for (let m=0;m<continents.length;m++) {
                        if(continents[m]['country']==document.getElementById("countryId").value){
                            thisC.state.origin_continent = continents[m]['continent']
                        }
                    }


                    can_continue = true;

                    changed = true;

                    document.getElementsByClassName("pj-world-pad")[0].style.width = "80%";
                    document.getElementsByClassName("pj-world-pad")[0].style.marginTop = "0vw";
                    document.getElementsByClassName("pj-world-pad")[0].style.marginLeft = "0vw";

                    document.getElementsByClassName("pj-box0")[0].style.marginTop = "-40vw";

                    let dis_non_int = window.setInterval(
                        () => {document.getElementsByClassName("pj-box0")[0].style.display = "none";
                                window.clearInterval(dis_non_int)}, 1000
                    )


                    document.getElementsByClassName("pj-img-wrapper")[0].style.marginLeft = "-5vw";
                    window.scrollBy(0,-200);
                        
                    document.getElementById("origin-city").innerHTML = document.getElementById("cityId").value
                    +"/ " +  document.getElementById("countryId").value + '('+ thisC.state.originAirport +')';

                    document.getElementsByClassName("ext-tab1")[0].style.marginTop = "14vw";

                    switch (thisC.state.origin_continent) {
                        case 'North America':
                            document.getElementsByClassName("m0")[0].style.display = "block";
                            break
                        case 'Europe':
                            document.getElementsByClassName("m-1")[0].style.display = "block";
                            break
                        case 'South America':    
                            document.getElementsByClassName("m-2")[0].style.display = "block";
                            break
                        case 'Africa':    
                            document.getElementsByClassName("m-3")[0].style.display = "block";
                            break 
                            
                        case 'Asia':    
                            document.getElementsByClassName("m-4")[0].style.display = "block";
                            break       
                            
                        case 'Oceania':    
                            document.getElementsByClassName("m-5")[0].style.display = "block";    
                    }
                    } else {
                        return alert('We could not find any airports in the city you chosed, please try again:')
                    }

                    


                }).catch(function(error){
                    console.log("error",error);
                    alert("We could not find any airports in the city you chosed, please try again:")
                })

                

            document.getElementById("head3").textContent = "now, time to select one of our destinations:";
        }

        function addDest() {
            document.getElementsByClassName("select-new-dest")[0].style.height = "40vh";
        }

        function closeDest() {
            document.getElementsByClassName("select-new-dest")[0].style.height = "0";
        }

        function addSelectChanged() {
            let selected_country = document.getElementsByClassName("adddest-select1")[0].value;

            if (selected_country !== "non") {

                if(added_option) {
                    for (let i=1;i<document.getElementsByClassName("adddest-opt2").length;i++) {
                        document.getElementsByClassName("adddest-opt2")[i].style.display = "none";
                    }
                }
                
                added_option = true;
                for (let i=0;i<countries_dict[selected_country].length;i++) {
                    let newopt = document.createElement('option');
                    newopt.className = "adddest-opt2";
                    if (selected_country==='Europe') {
                        newopt.value = 'Europe';
                    }

                    newopt.innerHTML = countries_dict[selected_country][i];

                    document.getElementById("adddest-select2").appendChild(newopt);

                }
            }
        }

        function boxHandler(id) {

            for (let i=0;i<document.getElementsByClassName("map-wrapper").length;i++) {
                document.getElementsByClassName("map-wrapper")[i].style.display = "none";
            }

            let ccc1 = document.getElementsByClassName("id-down")[id-1].id;

            for (let i=0; i<document.getElementsByClassName("mm2").length;i++) {
                document.getElementsByClassName("mm2")[i].style.display = "none";
            }

            for (let i=1; i<=document.getElementsByClassName("a-"+abr_count[ccc1][0]).length;i++) {
                document.getElementById("a-"+abr_count[ccc1][0]+"-"+i).style.display = "block";
            }

            document.getElementsByClassName("wrp")[0].style.marginTop = "-100vh";

            document.getElementById(abr_count[ccc1][0]+"-box").style.display="block";

            document.getElementById("main-tab").style.display ="none";
            document.getElementsByClassName("m0")[0].style.display = "none";

            for (let i=0;i<added_countries.length;i++) {
                document.getElementsByClassName("m"+counts_dict[added_countries[i]])[0].style.display = "none";
                document.getElementsByClassName("line")[i].style.display = "none";
            }

            document.getElementsByClassName("window-extt")[0].style.height = "auto";       

            for (let i=0;i<document.getElementsByClassName("mm1").length;i++) {
                document.getElementsByClassName("mm1")[i].style.display = "none";
            }


            for (let i=1;i<plan_added_dests[ccc1].length;i++) {
                document.getElementById("a-"+abr_count[ccc1][0]+"-svg"+i).style.display = "block";
                document.getElementById("a-"+abr_count[ccc1][0]+"-line"+i).style.display = "block";
            }                
            
            for(let i=1;i<plan_added_dests[ccc1].length;i++) {

                document.getElementById("a-"+abr_count[ccc1][0]+"-svg"+i)
                    .style.display = "block";
                let line5 = document.getElementById("a-"+abr_count[ccc1][0]+"-line"+i);

                let box1 = document.getElementById("a-"+abr_count[ccc1][0]+"-" + plan_added_dests[ccc1][i-1]);
                let box2 = document.getElementById("a-"+abr_count[ccc1][0]+"-" + plan_added_dests[ccc1][i]);

                let x1= box1.offsetLeft;
                let y1= box1.offsetTop;

                let x2 = box2.offsetLeft;
                let y2= box2.offsetTop;

                line5.setAttribute('x1', x1);
                line5.setAttribute('x2', x2);
                line5.setAttribute('y1', y1);
                line5.setAttribute('y2', y2);
            }
            
            resizeHandler();      
        }



        const add = () => {
            try {

            let intt = window.setInterval(()=>{closeDest();window.clearInterval(intt)},500);

            if(numb_of_dest>9) {
                return(alert('Max number of countries that can be added for one single journey reached'))
            }

            if(added_countries.includes(document.getElementById("adddest-select2").value)){
                return(alert('You have already added '+document.getElementById("adddest-select2").value+
                        ' to the destinations. Click on it to modify the trip.'))
            }

            let ccc = document.getElementById("adddest-select2").value;
            added_countries.push(document.getElementById("adddest-select2").value);

            numb_of_dest++;

            const divnews = document.getElementById("div-news");

            let plan_tab = document.createElement("div");
            plan_tab.className = 'plan-tab2 w3-animate-right';

            plan_tab.id = "Dest"+document.getElementById("adddest-select2").value;

            let plan_tab_p1 = document.createElement("p");
            plan_tab_p1.innerHTML = 'Destination ' + numb_of_dest + ": ";
            plan_tab_p1.className = "plan_tab_p1";
            let plan_tab_i = document.createElement("i");
            plan_tab_i.className = "fa fa-map-marker mapmarker";
            let plan_tab_p2 = document.createElement("p");
            plan_tab_p2.className = "mapmarker-text";
            plan_tab_p2.innerHTML = document.getElementById("adddest-select2").value;
            let plan_tab_i2 = document.createElement("i");

            added_small_tabs ++;


            plan_tab_i2.className = "fas fa-angle-down mapmarker id-down";
            plan_tab_i2.id = document.getElementById("adddest-select2").value;
            

            
            divnews.appendChild(plan_tab);
            plan_tab.appendChild(plan_tab_p1);
            plan_tab.appendChild(plan_tab_i);
            plan_tab.appendChild(plan_tab_p2);
            plan_tab.appendChild(plan_tab_i2);
            
            let total_dd = document.createElement('div');
            total_dd.className = 'plan_tab_p1';
            total_dd.innerHTML = 'total due: $0';
            total_dd.id = 'total-'+ abr_count[ccc][0];

            this.fsElement.current.setState({
                transDests: added_countries,
            })
            

            plan_tab.appendChild(total_dd);

            const idarg = added_small_tabs;
            plan_tab_i2.onclick = function() {boxHandler(idarg)}; 

            plan_tab_p2.onclick =  function() {boxHandler(idarg)};


            /* THIS IS THE NEXT SECTION */
            let sc = document.getElementById("adddest-select2").value;

            document.getElementsByClassName("m"+counts_dict[sc])[0].style.display = "block";

            let count_index = counts_dict[sc];

            let lineIdName = "line" + numb_of_dest;
            let item1IdName = "item";
            if (numb_of_dest==1){item1IdName+='0-' + continents_abr_dict[thisC.state.origin_continent]} else {item1IdName+=counts_dict[prev_sc]}

            let item2IdName = "item" + count_index;
        
            
            let line = document.getElementById(lineIdName);
            let item1 = document.getElementById(item1IdName);
            let item2 = document.getElementById(item2IdName);

            let y1 = (parseInt(item1.offsetTop,10)).toString();
            let y2 = (parseInt(item2.offsetTop,10)).toString();

            let x1 = (parseInt(item1.offsetLeft,10)).toString();
            let x2 = (parseInt(item2.offsetLeft,10)).toString();

            line.setAttribute('x1',x1);
            line.setAttribute('x2',x2);
            line.setAttribute('y1',y1);
            line.setAttribute('y2',y2);

            prev_sc = sc;
            line.style.zIndex = "90";

            let downInt = window.setInterval(()=>{
                for (let i=0;i<document.getElementsByClassName("map-wrapper").length;i++) {
                    document.getElementsByClassName("map-wrapper")[i].style.display = "none";
                }

                let ccc = document.getElementsByClassName("id-down")[added_small_tabs-1].id;
                for (let i=0; i<document.getElementsByClassName("mm2").length;i++) {
                    document.getElementsByClassName("mm2")[i].style.display = "none";
                }

                for (let i=1; i<=document.getElementsByClassName("a-"+abr_count[ccc][0]).length;i++) {
                    document.getElementById("a-"+abr_count[ccc][0]+"-"+i).style.display = "block";
                }
                document.getElementById(abr_count[ccc][0]+"-box").style.display="block";

                document.getElementsByClassName("wrp")[0].style.marginTop = "-100vh";
                document.getElementById("main-tab").style.display ="none";

                for (let i=0;i<document.getElementsByClassName("mm1").length;i++) {
                    document.getElementsByClassName("mm1")[i].style.display = "none";
                }

                for (let i=0;i<added_countries.length;i++) {
                    document.getElementsByClassName("m"+counts_dict[added_countries[i]])[0].style.display = "none";
                    document.getElementsByClassName("line")[i].style.display = "none";
                }
                document.getElementsByClassName("window-extt")[0].style.height = "auto";
                console.log(ccc);
                for (let i=1;i<plan_added_dests[ccc].length;i++) {
                    document.getElementById("a-"+abr_count[ccc][0]+"-svg"+i).style.display = "block";
                    document.getElementById("a-"+abr_count[ccc][0]+"-line"+i).style.display = "block";
                }



                window.clearInterval(downInt);
            } ,1000)


            
            if (numb_of_dest>2) {
                document.getElementsByClassName("ext-tab1")[0].style.height = "auto";
            }
            } catch(e) {console.log(e.message)}
            
        }
        function upAng() {
            document.getElementsByClassName("wrp")[0].style.marginTop = "0";

            for (let i=0;i<document.getElementsByClassName("map-wrapper ").length;i++) {
                document.getElementsByClassName("map-wrapper ")[i].style.display = "none";
            }

            for (let i=0;i<document.getElementsByClassName("mm2").length;i++) {
                document.getElementsByClassName("mm2")[i].style.display = "none";
            }

            for (let i=0;i<document.getElementsByClassName("a-line").length;i++) {
                document.getElementsByClassName("a-line")[i].style.display = "none";
            }   
            document.getElementById("main-tab").style.display ="block";         
            
            document.getElementById('item0-'+continents_abr_dict[thisC.state.origin_continent]).style.display = "block";

            for (let i=0;i<added_countries.length;i++) {
                document.getElementsByClassName("m"+counts_dict[added_countries[i]])[0].style.display = "block";
                document.getElementsByClassName("line")[i].style.display = "block";
            }
            document.getElementsByClassName("window-extt")[0].style.height = "100vh";
            
            resizeHandler();
        }

        function closeTab() {
            for (let i=0;i<document.getElementsByClassName("window-dest").length;i++) {
                document.getElementsByClassName("window-dest")[i].style.display = "none";
                document.getElementsByClassName("inner-wind")[i].style.width = "0";
                document.getElementsByClassName("inner-wind")[i].style.height = "0";
                document.getElementsByClassName("mapmarker2")[i].style.fontSize = "3vw";
            }
        }

        function packAddDest(country, destNumb) {
            closeTab();
            document.getElementById("no-dests-yet-"+abr_count[country][0]).style.display = "none";

            if(plan_added_dests[country].includes(destNumb)) {
                return alert('You have already added this destination');
            } else {
                plan_added_dests[country].push(destNumb);
                if (plan_added_dests[country].length>1) {

                    document.getElementById("a-"+abr_count[country][0]+"-svg"+(plan_added_dests[country].length-1)).style.display = "block";
                    let line5 = document.getElementById("a-"+abr_count[country][0]+"-line"+(plan_added_dests[country].length-1));
                    let box2 = document.getElementById("a-"+abr_count[country][0]+"-" + destNumb);
                    let box1 = document.getElementById("a-"+abr_count[country][0]+"-" + plan_added_dests[country][plan_added_dests[country].length-2]);

                    let x1= box1.offsetLeft;
                    let y1= box1.offsetTop;

                    let x2 = box2.offsetLeft;
                    let y2= box2.offsetTop;

                    line5.setAttribute('x1', x1);
                    line5.setAttribute('x2', x2);
                    line5.setAttribute('y1', y1);
                    line5.setAttribute('y2', y2);

                    line5.style.zIndex = "81";
                    document.getElementById("a-"+abr_count[country][0]+"-svg"+(plan_added_dests[country].length-1)).style.zIndex = "81";

                }


                let div_main = document.getElementsByClassName("plan-added-"+abr_count[country][0])[0];
                    
                let div1 = document.createElement("div");
                div1.className = "plan-new-dest w3-animate-right";
                div1.id = "addedBox-" + abr_count[country][0] + plan_added_dests[country].length;
                div_main.appendChild(div1);

                let div2 = document.createElement("div");
                div2.className = "plan-new-numb";
                div2.innerHTML = "Destination "+ plan_added_dests[country].length +": ";
                div1.appendChild(div2);

                let div3 = document.createElement("div");
                div3.className = "plan-new-insert";
                div3.onclick = ()=>{window.open(abr_count[country][1])};
                div3.innerHTML = highs_dict[country][destNumb]['name'] + ":  $"  + highs_dict[country][destNumb]['price'];
                div1.appendChild(div3);                

                document.getElementsByClassName("total-due-"+abr_count[country][0])[0].style.display = "block";

                let total = 0;
                let grand_total = 0;

                for (let i=0;i<plan_added_dests[country].length;i++) {
                    total += highs_dict[country][plan_added_dests[country][i]]['price'];
                }



                for (let country_index=0;country_index<added_countries.length;country_index++) {
                    let cou = added_countries[country_index];
        
                    for (let dest_index=0;dest_index<plan_added_dests[cou].length;dest_index++) {
                        let destt = plan_added_dests[cou][dest_index];
                        grand_total += highs_dict[cou][destt]['price'] ;
                    }
                }


                document.getElementById("total-numb-"+abr_count[country][0]).innerHTML = "$" + total;
                document.getElementById("total-"+abr_count[country][0]).innerHTML = 'total due: $' + total;
                document.getElementById("grand-total").innerHTML = "$" + grand_total;
            }
        }    

        function resizeHandler() {
            try {
                for (let i=1;i<=added_countries.length;i++) {
                    let line = document.getElementById("line"+i);
                    let box1;
                    let box2; 

                    if(i===1){
                        box1=document.getElementById('item0-'+continents_abr_dict[thisC.state.origin_continent])
                    } else {
                        box1 = document.getElementsByClassName("m"+counts_dict[added_countries[i-2]])[0];
                    }

                    box2 = document.getElementsByClassName("m"+counts_dict[added_countries[i-1]])[0];

                    let y1 = box1.offsetTop;
                    let y2 = box2.offsetTop;
        
                    let x1 = box1.offsetLeft;
                    let x2 = box2.offsetLeft;
        
                    line.setAttribute('x1',x1);
                    line.setAttribute('x2',x2);
                    line.setAttribute('y1',y1);
                    line.setAttribute('y2',y2);             
                }

                for (let m=0;m<Object.keys(plan_added_dests).length;m++) {
                    let ccc = Object.keys(plan_added_dests)[m];
                    if (plan_added_dests[ccc].length>0) {
                        for (let i=1;i<plan_added_dests[ccc].length;i++) {
                            let a_line = document.getElementById('a-'+abr_count[ccc][0]+"-line"+i);

                            let marker1 = document.getElementsByClassName('a-'+abr_count[ccc][0]+"-"+plan_added_dests[ccc][i-1])[0];
                            let marker2 = document.getElementsByClassName('a-'+abr_count[ccc][0]+"-"+plan_added_dests[ccc][i])[0];
                            
                            let y1 = marker1.offsetTop;
                            let y2 = marker2.offsetTop;
                
                            let x1 = marker1.offsetLeft;
                            let x2 = marker2.offsetLeft;
                
                            a_line.setAttribute('x1',x1);
                            a_line.setAttribute('x2',x2);
                            a_line.setAttribute('y1',y1);
                            a_line.setAttribute('y2',y2);  

                        }
                    }

                }

            } catch(e) {console.log(e.message)}

        }


        function fsHandler() {
            if (added_countries.length>0) {

                let transCodes = [];
                let transNames = [];

                for(let i=0;i<added_countries.length;i++) {
                    if (added_countries[i]!=='Europe') {
                        transNames.push(iataCodes[added_countries[i]][1]);
                        transCodes.push(iataCodes[added_countries[i]][0]);
                    } else {
                        for (let m=0;m<plan_added_dests['Europe'].length;m++) {
                            transCodes.push(iataCodes[highs_dict['Europe'][plan_added_dests['Europe'][m]]['name']][0]);
                            transNames.push(iataCodes[highs_dict['Europe'][plan_added_dests['Europe'][m]]['name']][1]);
                        }
                    }
                }

                let locations = {'South Africa': [], 'Morocco': [], 'Turkey': [], 'China': [], 'Japan': [], 'Polynesia': [],
                'Egypt': [], 'Hawaii': [], 'Europe': [] };

                // for (let m=0;m<added_countries.length;m++) {
                //     for (let n=0; n<plan_added_dests[added_countries[m]].length;n++) {
                //         locations[added_countries[m]].push(highs_dict[added_countries[m]][plan_added_dests[added_countries[m]][n]]);
                    
                //     }
                // }

                // console.log(locations)
                
                thisComp.fsElement.current.setState({
                    transCodes: transCodes,
                    transNames: transNames,
                    items: [],
                    plan_added_dests: plan_added_dests,
                    highs_dict: highs_dict,
                });


                let ADDED_one = true;

                for (let i=0;i<added_countries.length;i++) {
                    if (plan_added_dests[added_countries[i]].length===0) {
                        ADDED_one = false;
                    }
                }

                if(ADDED_one) {
                    document.getElementsByClassName("sf-tab1")[0].style.display = "block";
                    document.getElementsByClassName("sf-main")[0].style.right = "0";
                    document.getElementById("main-tab").style.marginRight = "-40vw";
                    for (let i=0;i<document.getElementsByClassName("sf-tab2").length;i++) {
                        document.getElementsByClassName("sf-tab2")[i].style.display = "none";
                    }
                } else {
                    return alert('Please select at least one package from each of the destinations')
                }
            } else {
                return alert('No destinations added')
            }
        }
        
        

        function order () { 
            document.getElementById("tick-mark").style.marginLeft = "0";
            document.getElementById("checkmark1").style.display = "block";

            let setint = window.setInterval(function() {
                document.getElementById("tick-mark").style.marginLeft = "-40vw";
                document.getElementById("checkmark1").style.display = "none";
                window.clearInterval(setint)
            },4000);
        }


        window.addEventListener("resize", resizeHandler);

        resizeHandler();


        return (
            <div className="pj-main" >

                
                <FlightSearch token={token} ref={this.fsElement}/>
                <SVGMarkers/>
                <svg className="checkmark1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" id="checkmark1">
                        <circle className="checkmark__circle1" cx="26" cy="26" r="25" fill="none"/>
                        <path className="checkmark__check1" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>

                <div className="tick-mark" id="tick-mark">
                    Your order is taken! Thank you very much. We will contact you via mail and/or phone to proceed to the next steps and arrange the payment process.

                </div>


                <div className="ow-box2">

                    <div className="proceed-1" onClick={order}>
                        <p className="g-total" id="grand_total_without">Grand Total: 100EUR</p><br></br>
                        Order this journey without international flights included
                    </div>
                    <div className="proceed-1" onClick={order}>
                        Grand Total: <p className="g-total" id="grand_total_with">0</p>EUR<br></br>
                        Order this journey with international flights included
                    </div>
                </div>


                <div className="na-tab pj-box0">
                <div className="waveWrapper1 waveAnimation">
                    <div className="waveWrapperInner bgTop" >

                        <div className="tab-head" id="tab-head-sa">Select your origin city from the list and start your journey!</div>
                        <div className="tab-window">
                            <select name="country" class="countries order-alpha group-continents group-order-na tab-co-ext" id="countryId">
                                <option value="">Select Country</option>
                            </select>
                            <select name="state" class="states order-alpha tab-co-ext" id="stateId">
                                <option value="">Select State</option>
                            </select>
                            <select name="city" class="cities order-alpha limit-pop-100000 tab-co-ext" id="cityId" onChange={()=>{selectDidChange(0)}}>
                                <option value="">Select City</option>
                            </select>          
                        </div>

                    </div>


                    <div className="waveWrapperInner bgMiddle">
                        <div className="wave waveMiddle"></div>
                    </div>
                    <div className="waveWrapperInner bgBottom">
                        <div className="wave waveBottom"></div>
                    </div>
                    
                </div>                    
                </div>


                <div className="na-tab ext-tab1" id="main-tab">
                    <div className="tab-head">Plan the Journey of your Dreams!</div>
                    <div className="plan-tab1">Selected Location of Departure:
                        <i className="fa fa-map-marker mapmarker" ariaHidden="true"></i>
                        <p className="mapmarker-text" id="origin-city">d</p>
                    </div>
                    
                    <div id="div-news">                 

                    </div>

                    <div className="select-new-dest">
                        <i className="fas fa-angle-up adddest-ico" onClick={closeDest}></i>

                        <select className="adddest-select1" id="adddest-select1" onChange={addSelectChanged}>
                            <option value="non">Select a Continent</option>
                            <option value="Europe" className="adddest-opt">Europe</option>
                            <option value="Asia" className="adddest-opt">Asia</option>
                            <option value="Africa" className="adddest-opt">Africa</option>
                            <option value="Pacific" className="adddest-opt">Pacific</option>
                        </select><br></br><br></br>

                        <select className="adddest-select1" id="adddest-select2" onChange={add}>
                            <option value="" className="adddest-opt2">...</option>
                        </select>

                    </div>
                    <div className="add-dest" onClick={addDest}>+add destination</div>

                    <div className="general-total-due">
                        <p>Grand Total (without international flights): </p><p id="grand-total">$0</p>
                        <p className="proceed-text" onClick={fsHandler}>
                            proceed to international flight search
                            <i class="fas fa-angle-right proceed-ico"></i>
                        </p>
                    </div>

                </div>                
            
                <NavMain/>
                <div className="pj-header" id="head3" style={{"text-align":"center"}}>select a starting destination from the list and start planing your next
                    journey!</div>
                
                <div className="window-extt">
                    <div className="pj-world-wrapper">

                        
                            <div className="wrp">
                                <div className="pj-img-wrapper">
                                    <img src={world} className="pj-world-pad" alt="world"></img>
                                </div>
                            </div>


                            <div className="map-wrapper-main" >
            
                                <div className="map-wrapper" id="sa-box">
                                    <div className="map-head">Plan your trip to South Africa!
                                    <i class="fas fa-angle-up mapupext" onClick={upAng}></i></div>


                                    <img src={sa} className="map"></img>

                                    <div className="window-dest wd-sa-1"><div className="inner-wind inwind-sa-1" >

                                        <div className="inner-wind-head">Destination: Cape Town <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/sa/highs1.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Cape Town Package: $99.99<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/southafricaguide')}} id="thislink1" 
                                            onMouseOver={()=>{document.getElementById("thislink1").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink1").style.opacity="1"}}
                                            >See Our South Africa Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/africa')}} id="thislink2" 
                                            onMouseOver={()=>{document.getElementById("thislink2").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink2").style.opacity="1"}}
                                            >See our Cape Town Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('South Africa', 1)}}>add Destination</div>
                                        </div>
                                    
                                    </div></div>
                                    <div className="window-dest wd-sa-2"><div className="inner-wind inwind-sa-2">
                                        
                                        <div className="inner-wind-head">Destination: Cape Winelands <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Cape Winelands Package: $49.99<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/southafricaguide')}} id="thislink3" 
                                            onMouseOver={()=>{document.getElementById("thislink3").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink3").style.opacity="1"}}
                                            >See Our South Africa Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/africa')}} id="thislink4" 
                                            onMouseOver={()=>{document.getElementById("thislink4").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink4").style.opacity="1"}}
                                            >See our Cape Winelands Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('South Africa', 2)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/sa/highs4.png"></img>
                                        </div>                                                                   
                                    
                                    </div></div>
                                    <div className="window-dest wd-sa-3"><div className="inner-wind inwind-sa-3">
                                    

                                        <div className="inner-wind-head">Destination: Kruger National Park <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Kruger National Park Package: $49.99<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/southafricaguide')}} id="thislink7" 
                                            onMouseOver={()=>{document.getElementById("thislink7").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink7").style.opacity="1"}}
                                            >See Our South Africa Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/africa')}} id="thislink8" 
                                            onMouseOver={()=>{document.getElementById("thislink8").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink8").style.opacity="1"}}
                                            >See our Kruger National Park Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('South Africa', 3)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/sa/highs2.png"></img>
                                        </div>                                     
                                        
                                    </div></div>
                                    <div className="window-dest wd-sa-4" ><div className="inner-wind inwind-sa-4">
                                                                            
                                        <div className="inner-wind-head">Destination: Drakensberg <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/sa/highs3.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Drakensberg Package: $99.99<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/southafricaguide')}} id="thislink5" 
                                            onMouseOver={()=>{document.getElementById("thislink5").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink5").style.opacity="1"}}
                                            >See Our South Africa Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/africa')}} id="thislink6" 
                                            onMouseOver={()=>{document.getElementById("thislink6").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink6").style.opacity="1"}}
                                            >See our Drakensberg Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('South Africa', 4)}}>add Destination</div>
                                        </div>  
                                    
                                    </div></div>



                                    <div className="map-plan">
                                            <div className="plan-head">Added Destinations</div>
                                            <div className="plan-added-sa">
                                                <p className="plan-no-added" id="no-dests-yet-sa">No destinations added yet, hover on the icons on the map and add
                                                    destinations
                                                </p>

                                            </div>

                                            <div className="total-due-sa">
                                                    Total Due: <p style={{"display":"inline-block"}} id="total-numb-sa">$0</p>
                                            </div>                                        

                                    </div>
                                </div>

                                <div className="map-wrapper" id="eg-box">
                                    <div className="map-head">Plan your trip to Egypt!
                                    <i class="fas fa-angle-up mapupext" onClick={upAng}></i></div>


                                    <img src={eg} className="map"></img>

                                    <div className="window-dest wd-eg-1"><div className="inner-wind inwind-eg-1">

                                        <div className="inner-wind-head">Destination: Pyramids of Giza <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/eg/highs1.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Pyramids of Giza Package: $110<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/egyptguide')}} id="thislink9" 
                                            onMouseOver={()=>{document.getElementById("thislink9").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink9").style.opacity="1"}}
                                            >See Our Egypt Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/africa')}} id="thislink10" 
                                            onMouseOver={()=>{document.getElementById("thislink10").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink10").style.opacity="1"}}
                                            >See our Giza Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Egypt', 1)}}>add Destination</div>
                                        </div>
                                    
                                    </div></div>
                                    <div className="window-dest wd-eg-2"><div className="inner-wind inwind-eg-2">
                                        
                                        <div className="inner-wind-head">Destination: Luxor <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Luxor Package: $90<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/egyptguide')}} id="thislink11" 
                                            onMouseOver={()=>{document.getElementById("thislink11").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink11").style.opacity="1"}}
                                            >See Our Egypt Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/africa')}} id="thislink12" 
                                            onMouseOver={()=>{document.getElementById("thislink12").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink12").style.opacity="1"}}
                                            >See our Luxor Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Egypt', 2)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/eg/highs2.png"></img>
                                        </div>                                                                   
                                    
                                    </div></div>
                                    
                                    <div className="window-dest wd-eg-3" ><div className="inner-wind inwind-eg-3">
                                                                            
                                        <div className="inner-wind-head">Destination: Memphis <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/eg/highs4x.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Memphis Package: $100<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/egyptguide')}} id="thislink12" 
                                            onMouseOver={()=>{document.getElementById("thislink12").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink12").style.opacity="1"}}
                                            >See Our Egypt Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/africa')}} id="thislink13" 
                                            onMouseOver={()=>{document.getElementById("thislink13").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink13").style.opacity="1"}}
                                            >See our Memphis Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Egypt', 3)}}>add Destination</div>
                                        </div>  
                                    
                                    </div></div>



                                    <div className="map-plan">
                                            <div className="plan-head">Added Destinations</div>
                                            <div className="plan-added-eg">
                                                <p className="plan-no-added" id="no-dests-yet-eg">No destinations added yet, hover on the icons on the map and add
                                                    destinations
                                                </p>

                                            </div>

                                            <div className="total-due-eg">
                                                    Total Due: <p style={{"display":"inline-block"}} id="total-numb-eg">$0</p>
                                            </div>                                        
                                    </div>
                                </div>


                                <div className="map-wrapper" id="mor-box">
                                    <div className="map-head">Plan your trip to Morocco!
                                    <i class="fas fa-angle-up mapupext" onClick={upAng}></i></div>


                                    <img src={mor} className="map"></img>

                                    <div className="window-dest wd-mor-1"><div className="inner-wind inwind-mor-1" >

                                        <div className="inner-wind-head">Destination: Marrakesh <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/mor/highs1.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Marrakesh Package: $50<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/moroccoguide')}} id="thislink17" 
                                            onMouseOver={()=>{document.getElementById("thislink17").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink17").style.opacity="1"}}
                                            >See Our Morocco Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/africa')}} id="thislink18" 
                                            onMouseOver={()=>{document.getElementById("thislink18").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink18").style.opacity="1"}}
                                            >See our Marrakesh Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Morocco', 1)}}>add Destination</div>
                                        </div>
                                    
                                    </div></div>
                                    <div className="window-dest wd-mor-2"><div className="inner-wind inwind-mor-2">
                                        
                                        <div className="inner-wind-head">Destination: High Atlas Mountains <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our High Atlas Mountains Package: $50<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/moroccoguide')}} id="thislink19" 
                                            onMouseOver={()=>{document.getElementById("thislink19").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink19").style.opacity="1"}}
                                            >See Our Morocco Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/africa')}} id="thislink20" 
                                            onMouseOver={()=>{document.getElementById("thislink20").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink20").style.opacity="1"}}
                                            >See our High Atlas Mountains Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Morocco', 2)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/mor/highs2.png"></img>
                                        </div>                                                                   
                                    
                                    </div></div>

                                    <div className="window-dest wd-mor-3" ><div className="inner-wind inwind-mor-3">
                                                                            
                                        <div className="inner-wind-head">Destination: Essaouira <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/mor/highs3.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Essaouira Package: $60<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/moroccoguide')}} id="thislink23" 
                                            onMouseOver={()=>{document.getElementById("thislink23").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink23").style.opacity="1"}}
                                            >See Our Morocco Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/africa')}} id="thislink23" 
                                            onMouseOver={()=>{document.getElementById("thislink23").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink23").style.opacity="1"}}
                                            >See our Essaouira Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Morocco', 3)}}>add Destination</div>
                                        </div>  
                                    
                                    </div></div>

                                    <div className="window-dest wd-mor-4"><div className="inner-wind inwind-mor-4">
                                    

                                        <div className="inner-wind-head">Destination: Moulay Idriss Zerhoun <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Moulay Idriss Zerhoun Package: $60<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/moroccoguide')}} id="thislink21" 
                                            onMouseOver={()=>{document.getElementById("thislink21").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink21").style.opacity="1"}}
                                            >See Our Morocco Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/africa')}} id="thislink22" 
                                            onMouseOver={()=>{document.getElementById("thislink22").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislink22").style.opacity="1"}}
                                            >See our Moulay Idriss Zerhoun Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Morocco', 4)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/mor/highs4.png"></img>
                                        </div>                                     
                                        
                                    </div></div>


                                    <div className="map-plan">
                                            <div className="plan-head">Added Destinations</div>
                                            <div className="plan-added-mor">
                                                <p className="plan-no-added" id="no-dests-yet-mor">No destinations added yet, hover on the icons on the map and add
                                                    destinations
                                                </p>

                                            </div>

                                            <div className="total-due-mor">
                                                    Total Due: <p style={{"display":"inline-block"}} id="total-numb-mor">$0</p>
                                            </div>                                        

                                    </div>
                                </div>


                                <div className="map-wrapper" id="ch-box">
                                    <div className="map-head">Plan your trip to China!
                                    <i class="fas fa-angle-up mapupext" onClick={upAng}></i></div>


                                    <img src={ch} className="map"></img>

                                    <div className="window-dest wd-ch-1"><div className="inner-wind inwind-ch-1" >

                                        <div className="inner-wind-head">Destination: Great Wall <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/ch/highs1.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Great Wall Package: $150<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/chinaguide')}} id="thislinkch1" 
                                            onMouseOver={()=>{document.getElementById("thislinkch1").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkch1").style.opacity="1"}}
                                            >See Our China Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/asia')}} id="thislinkch2" 
                                            onMouseOver={()=>{document.getElementById("thislinkch2").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkch2").style.opacity="1"}}
                                            >See our Great Wall Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('China', 1)}}>add Destination</div>
                                        </div>
                                    
                                    </div></div>
                                    <div className="window-dest wd-ch-2"><div className="inner-wind inwind-ch-2">
                                        
                                        <div className="inner-wind-head">Destination: Forbidden City <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Forbidden City Package: $100<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/chinaguide')}} id="thislinkch3" 
                                            onMouseOver={()=>{document.getElementById("thislinkch3").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkch3").style.opacity="1"}}
                                            >See Our China Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/asia')}} id="thislinkch4" 
                                            onMouseOver={()=>{document.getElementById("thislinkch4").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkch4").style.opacity="1"}}
                                            >See our Forbidden City Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('China', 2)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/ch/highs2.png"></img>
                                        </div>                                                                   
                                    
                                    </div></div>

                                    <div className="window-dest wd-ch-3" ><div className="inner-wind inwind-ch-3">
                                                                            
                                        <div className="inner-wind-head">Destination: Terracotta Army <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/ch/highs3.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Terracotta Army Package: $100<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/chinaguide')}} id="thislinkch5" 
                                            onMouseOver={()=>{document.getElementById("thislinkch5").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkch5").style.opacity="1"}}
                                            >See Our China Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/asia')}} id="thislinkch6" 
                                            onMouseOver={()=>{document.getElementById("thislinkch6").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkch6").style.opacity="1"}}
                                            >See our Terracotta Army Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('China', 3)}}>add Destination</div>
                                        </div>  
                                    
                                    </div></div>

                                    <div className="window-dest wd-ch-4"><div className="inner-wind inwind-ch-4">
                                    

                                        <div className="inner-wind-head">Destination: The Silk Road <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our The Silk Road Package: $150<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/chinaguide')}} id="thislinkch7" 
                                            onMouseOver={()=>{document.getElementById("thislinkch7").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkch7").style.opacity="1"}}
                                            >See Our China Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/asia')}} id="thislinkch8" 
                                            onMouseOver={()=>{document.getElementById("thislinkch8").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkch8").style.opacity="1"}}
                                            >See our The Silk Road Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('China', 4)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/ch/highs4.png"></img>
                                        </div>                                     
                                        
                                    </div></div>


                                    <div className="map-plan">
                                            <div className="plan-head">Added Destinations</div>
                                            <div className="plan-added-ch">
                                                <p className="plan-no-added" id="no-dests-yet-ch">No destinations added yet, hover on the icons on the map and add
                                                    destinations
                                                </p>

                                            </div>

                                            <div className="total-due-ch">
                                                    Total Due: <p style={{"display":"inline-block"}} id="total-numb-ch">$0</p>
                                            </div>                                        

                                    </div>
                                </div>       

                                <div className="map-wrapper" id="jap-box">
                                    <div className="map-head">Plan your trip to Japan!
                                    <i class="fas fa-angle-up mapupext" onClick={upAng}></i></div>


                                    <img src={jap} className="map"></img>

                                    <div className="window-dest wd-jap-1"><div className="inner-wind inwind-jap-1" >

                                        <div className="inner-wind-head">Destination: Kyoto <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/jap/highs1.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Kyoto Package: $150<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/japanguide')}} id="thislinkjap1" 
                                            onMouseOver={()=>{document.getElementById("thislinkjap1").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkjap1").style.opacity="1"}}
                                            >See Our Japan Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/asia')}} id="thislinkjap2" 
                                            onMouseOver={()=>{document.getElementById("thislinkjap2").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkjap2").style.opacity="1"}}
                                            >See our Kyoto Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Japan', 1)}}>add Destination</div>
                                        </div>
                                    
                                    </div></div>
                                    <div className="window-dest wd-jap-2"><div className="inner-wind inwind-jap-2">
                                        
                                        <div className="inner-wind-head">Destination: Tokyo<i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Tokyo Package: $100<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/japanguide')}} id="thislinkjap3" 
                                            onMouseOver={()=>{document.getElementById("thislinkjap3").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkjap3").style.opacity="1"}}
                                            >See Our Japan Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/asia')}} id="thislinkjap4" 
                                            onMouseOver={()=>{document.getElementById("thislinkjap4").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkjap4").style.opacity="1"}}
                                            >See our Tokyo Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Japan', 2)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/jap/highs2.png"></img>
                                        </div>                                                                   
                                    
                                    </div></div>

                                    <div className="window-dest wd-jap-3" ><div className="inner-wind inwind-jap-3">
                                                                            
                                        <div className="inner-wind-head">Destination: Mount Fuji <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/jap/highs3.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Mount Fuji Package: $150<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/japanguide')}} id="thislinkjap5" 
                                            onMouseOver={()=>{document.getElementById("thislinkjap5").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkjap5").style.opacity="1"}}
                                            >See Our Japan Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/asia')}} id="thislinkjap6" 
                                            onMouseOver={()=>{document.getElementById("thislinkjap6").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkjap6").style.opacity="1"}}
                                            >See our Mount Fuji Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Japan', 3)}}>add Destination</div>
                                        </div>  
                                    
                                    </div></div>

                                    <div className="window-dest wd-jap-4"><div className="inner-wind inwind-jap-4">
                                    

                                        <div className="inner-wind-head">Destination: Cherry Blossom Viewing Tour <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Cherry Blossom Viewing Tour Package: $80<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/chinaguide')}} id="thislinkjap7" 
                                            onMouseOver={()=>{document.getElementById("thislinkjap7").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkjap7").style.opacity="1"}}
                                            >See Our Japan Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/asia')}} id="thislinkjap8" 
                                            onMouseOver={()=>{document.getElementById("thislinkjap8").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkjap8").style.opacity="1"}}
                                            >See our Cherry Blossom Viewing Tour Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Japan', 4)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/jap/highs4.png"></img>
                                        </div>                                     
                                        
                                    </div></div>


                                    <div className="map-plan">
                                            <div className="plan-head">Added Destinations</div>
                                            <div className="plan-added-jap">
                                                <p className="plan-no-added" id="no-dests-yet-jap">No destinations added yet, hover on the icons on the map and add
                                                    destinations
                                                </p>

                                            </div>

                                            <div className="total-due-jap">
                                                    Total Due: <p style={{"display":"inline-block"}} id="total-numb-jap">$0</p>
                                            </div>                                        

                                    </div>
                                </div>                                                                


                                <div className="map-wrapper" id="turk-box">
                                    <div className="map-head">Plan your trip to Turkey!
                                    <i class="fas fa-angle-up mapupext" onClick={upAng}></i></div>


                                    <img src={turk} className="map" style={{"margin-top": "5vw", "margin-bottom":"5vw"}}></img>

                                    <div className="window-dest wd-turk-1"><div className="inner-wind inwind-turk-1" >

                                        <div className="inner-wind-head">Destination: Istanbul <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/turk/highs1.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Istanbul Package: $200<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/turkeyguide')}} id="thislinkturk1" 
                                            onMouseOver={()=>{document.getElementById("thislinkturk1").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkturk1").style.opacity="1"}}
                                            >See Our Turkey Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/asia')}} id="thislinkturk2" 
                                            onMouseOver={()=>{document.getElementById("thislinkturk2").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkturk2").style.opacity="1"}}
                                            >See our Istanbul Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Turkey', 1)}}>add Destination</div>
                                        </div>
                                    
                                    </div></div>
                                    <div className="window-dest wd-turk-2"><div className="inner-wind inwind-turk-2">
                                        
                                        <div className="inner-wind-head">Destination: Datça & Bozburun Peninsulas<i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Datça & Bozburun Peninsulas Package: $200<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/turkeyguide')}} id="thislinkturk3" 
                                            onMouseOver={()=>{document.getElementById("thislinkturk3").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkturk3").style.opacity="1"}}
                                            >See Our Turkey Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/asia')}} id="thislinkturk4" 
                                            onMouseOver={()=>{document.getElementById("thislinkturk4").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkturk4").style.opacity="1"}}
                                            >See our Datça & Bozburun Peninsulas Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Turkey', 2)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/turk/highs2.png"></img>
                                        </div>                                                                   
                                    
                                    </div></div>

                                    <div className="window-dest wd-turk-3" ><div className="inner-wind inwind-turk-3">
                                                                            
                                        <div className="inner-wind-head">Destination: Cappadocia <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/turk/highs3.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Cappadocia Package: $150<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/turkeyguide')}} id="thislinkturk5" 
                                            onMouseOver={()=>{document.getElementById("thislinkturk5").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkturk5").style.opacity="1"}}
                                            >See Our Turkey Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/asia')}} id="thislinkturk6" 
                                            onMouseOver={()=>{document.getElementById("thislinkturk6").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkturk6").style.opacity="1"}}
                                            >See our Cappadocia Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Turkey', 3)}}>add Destination</div>
                                        </div>  
                                    
                                    </div></div>

                                    <div className="window-dest wd-turk-4"><div className="inner-wind inwind-turk-4">
                                    

                                        <div className="inner-wind-head">Destination: Pamukkale & Hierapolis <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Pamukkale & Hierapolis Package: $100<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/turkeyguide')}} id="thislinkturk7" 
                                            onMouseOver={()=>{document.getElementById("thislinkturk7").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkturk7").style.opacity="1"}}
                                            >See Our Turkey Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/asia')}} id="thislinkturk8" 
                                            onMouseOver={()=>{document.getElementById("thislinkturk8").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkturk8").style.opacity="1"}}
                                            >See our Pamukkale & Hierapolis Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Turkey', 4)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/turk/highs4.png"></img>
                                        </div>                                     
                                        
                                    </div></div>


                                    <div className="map-plan">
                                            <div className="plan-head">Added Destinations</div>
                                            <div className="plan-added-turk">
                                                <p className="plan-no-added" id="no-dests-yet-turk">No destinations added yet, hover on the icons on the map and add
                                                    destinations
                                                </p>

                                            </div>

                                            <div className="total-due-turk">
                                                    Total Due: <p style={{"display":"inline-block"}} id="total-numb-turk">$0</p>
                                            </div>                                        

                                    </div>
                                </div>  

                                <div className="map-wrapper" id="eu-box">
                                    <div className="map-head">Plan your trip to Europe!
                                    <i class="fas fa-angle-up mapupext" onClick={upAng}></i></div>


                                    <img src={eu} className="map"></img>

                                    <div className="window-dest wd-eu-1"><div className="inner-wind inwind-eu-1" >

                                        <div className="inner-wind-head">Destination: Paris <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/weu/highs1.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Paris Package: $200<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/weuropeguide')}} id="thislinkeu1" 
                                            onMouseOver={()=>{document.getElementById("thislinkeu1").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkeu1").style.opacity="1"}}
                                            >See Our Western Europe Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/europe')}} id="thislinkeu2" 
                                            onMouseOver={()=>{document.getElementById("thislinkeu2").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkeu2").style.opacity="1"}}
                                            >See our Paris Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Europe', 1)}}>add Destination</div>
                                        </div>
                                    
                                    </div></div>
                                    <div className="window-dest wd-eu-2"><div className="inner-wind inwind-eu-2">
                                        
                                        <div className="inner-wind-head">Destination: Barcelona <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Barcelona Package: $200<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/weuropeguide')}} id="thislinkeu3" 
                                            onMouseOver={()=>{document.getElementById("thislinkeu3").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkeu3").style.opacity="1"}}
                                            >See Our Western Europe Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/europe')}} id="thislinkeu4" 
                                            onMouseOver={()=>{document.getElementById("thislinkeu4").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkeu4").style.opacity="1"}}
                                            >See our Barcelona Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Europe', 2)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/weu/box2.png"></img>
                                        </div>                                                                   
                                    
                                    </div></div>

                                    <div className="window-dest wd-eu-3" ><div className="inner-wind inwind-eu-3">
                                                                            
                                        <div className="inner-wind-head">Destination: Amsterdam <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/weu/highs2-1.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Amsterdam Package: $180<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/weuropeguide')}} id="thislinkeu5" 
                                            onMouseOver={()=>{document.getElementById("thislinkeu5").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkeu5").style.opacity="1"}}
                                            >See Our Western Europe Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/europe')}} id="thislinkeu6" 
                                            onMouseOver={()=>{document.getElementById("thislinkeu6").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkeu6").style.opacity="1"}}
                                            >See our Amsterdam Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Europe', 3)}}>add Destination</div>
                                        </div>  
                                    
                                    </div></div>

                                    <div className="window-dest wd-eu-4"><div className="inner-wind inwind-eu-4">
                                    

                                        <div className="inner-wind-head">Destination: Ghent, Bruges & Antwerp <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Ghent, Bruges & Antwerp Package: $200<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/weuropeguide')}} id="thislinkeu7" 
                                            onMouseOver={()=>{document.getElementById("thislinkeu7").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkeu7").style.opacity="1"}}
                                            >See Our Western Europe Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/europe')}} id="thislinkeu8" 
                                            onMouseOver={()=>{document.getElementById("thislinkeu8").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkeu8").style.opacity="1"}}
                                            >See our Ghent, Bruges & Antwerp Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Europe', 4)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/weu/highs4.png"></img>
                                        </div>                                     
                                        
                                    </div></div>

                                    <div className="window-dest wd-eu-5"><div className="inner-wind inwind-eu-5" >

                                        <div className="inner-wind-head">Destination: Vienna & Prague <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/ceu/highs1.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our  Vienna & Prague Package: $250<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/ceuropeguide')}} id="thislinkceu1" 
                                            onMouseOver={()=>{document.getElementById("thislinkceu1").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkceu1").style.opacity="1"}}
                                            >See Our Central Europe Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/europe')}} id="thislinkceu2" 
                                            onMouseOver={()=>{document.getElementById("thislinkceu2").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkceu2").style.opacity="1"}}
                                            >See our  Vienna & Prague Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Europe', 5)}}>add Destination</div>
                                        </div>
                                    
                                    </div></div>
                                    <div className="window-dest wd-eu-6"><div className="inner-wind inwind-eu-6">
                                        
                                        <div className="inner-wind-head">Destination: Munich & Salzburg <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Munich & Salzburg Package: $250<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/ceuropeguide')}} id="thislinkceu3" 
                                            onMouseOver={()=>{document.getElementById("thislinkceu3").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkceu3").style.opacity="1"}}
                                            >See Our Central Europe Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/europe')}} id="thislinkceu4" 
                                            onMouseOver={()=>{document.getElementById("thislinkceu4").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkceu4").style.opacity="1"}}
                                            >See our Munich & Salzburg Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Europe', 6)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/ceu/highs4.png"></img>
                                        </div>                                                                   
                                    
                                    </div></div>

                                    <div className="window-dest wd-eu-7" ><div className="inner-wind inwind-eu-7">
                                                                            
                                        <div className="inner-wind-head">Destination: Oslo & Norwegian Fjords <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/neu/highs1.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Oslo & Norwegian Fjords Package: $200<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/neuropeguide')}} id="thislinkceu5" 
                                            onMouseOver={()=>{document.getElementById("thislinkceu5").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkceu5").style.opacity="1"}}
                                            >See Our Northern Europe Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/europe')}} id="thislinkceu6" 
                                            onMouseOver={()=>{document.getElementById("thislinkceu6").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkceu6").style.opacity="1"}}
                                            >See our Oslo & Norwegian Fjords Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Europe', 7)}}>add Destination</div>
                                        </div> 
                                    
                                    </div></div>

                                    <div className="window-dest wd-eu-8"><div className="inner-wind inwind-eu-8">
                                    

                                        <div className="inner-wind-head">Destination: Copenhagen & Stockholm <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Copenhagen & Stockholm Package: $200<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/neuropeguide')}} id="thislinkceu7" 
                                            onMouseOver={()=>{document.getElementById("thislinkceu7").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkceu7").style.opacity="1"}}
                                            >See Our Northern Europe Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/europe')}} id="thislinkceu8" 
                                            onMouseOver={()=>{document.getElementById("thislinkceu8").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkceu8").style.opacity="1"}}
                                            >See our Copenhagen & Stockholm Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Europe', 8)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/neu/highs4.png"></img>
                                        </div>                                     
                                        
                                    </div></div>

                                    <div className="window-dest wd-eu-9"><div className="inner-wind inwind-eu-9" >

                                        <div className="inner-wind-head">Destination:  Saint Petersburg<i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/neu/highs2-1.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Saint Petersburg Package: $150<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/neuropeguide')}} id="thislinkneu1" 
                                            onMouseOver={()=>{document.getElementById("thislinkneu1").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkneu1").style.opacity="1"}}
                                            >See Our Northern Europe Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/europe')}} id="thislinkneu2" 
                                            onMouseOver={()=>{document.getElementById("thislinkneu2").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkneu2").style.opacity="1"}}
                                            >See our Saint Petersburg Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Europe', 9)}}>add Destination</div>
                                        </div>
                                    
                                    </div></div>

                                                                                        


                                    <div className="map-plan">
                                            <div className="plan-head">Added Destinations</div>
                                            <div className="plan-added-eu">
                                                <p className="plan-no-added" id="no-dests-yet-eu">No destinations added yet, hover on the icons on the map and add
                                                    destinations
                                                </p>

                                            </div>

                                            <div className="total-due-eu">
                                                    Total Due: <p style={{"display":"inline-block"}} id="total-numb-eu">$0</p>
                                            </div>                                        

                                    </div>
                                </div>       

                                
            
                                <div className="map-wrapper" id="ln-box">
                                    <div className="map-head">Plan your trip to French Polynesia!
                                    <i class="fas fa-angle-up mapupext" onClick={upAng}></i></div>


                                    <img src={ln} className="map"></img>

                                    <div className="window-dest wd-ln-1"><div className="inner-wind inwind-ln-1" >

                                        <div className="inner-wind-head">Destination: Atuona & Hiva Oa <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/lm/highs1.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Atuona & Hiva Oa Package: $300<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/lesmarquisesguide')}} id="thislinkln1" 
                                            onMouseOver={()=>{document.getElementById("thislinkln1").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkln1").style.opacity="1"}}
                                            >See Our Les Marquises Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/pacific')}} id="thislinkln2" 
                                            onMouseOver={()=>{document.getElementById("thislinkln2").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkln2").style.opacity="1"}}
                                            >See our Atuona & Hiva Oa Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Polynesia', 1)}}>add Destination</div>
                                        </div>
                                    
                                    </div></div>
                                    <div className="window-dest wd-ln-2"><div className="inner-wind inwind-ln-2">
                                        
                                        <div className="inner-wind-head">Destination: Bora Bora <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Bora Bora Package: $280<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/boraboraguide')}} id="thislinkln3" 
                                            onMouseOver={()=>{document.getElementById("thislinkln3").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkln3").style.opacity="1"}}
                                            >See Our Bora Bora Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/pacific')}} id="thislinkln4" 
                                            onMouseOver={()=>{document.getElementById("thislinkln4").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkln4").style.opacity="1"}}
                                            >See our Bora Bora Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Polynesia', 2)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/bb/highs2.png"></img>
                                        </div>                                                                   
                                    
                                    </div></div>
                                    <div className="window-dest wd-ln-3"><div className="inner-wind inwind-ln-3">
                                    

                                        <div className="inner-wind-head">Destination: Papeete <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Papeete Package: $250<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/lesmarquisesguide')}} id="thislinkln7" 
                                            onMouseOver={()=>{document.getElementById("thislinkln7").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkln7").style.opacity="1"}}
                                            >See Our Les Marquises Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/pacific')}} id="thislinkln8" 
                                            onMouseOver={()=>{document.getElementById("thislinkln8").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkln8").style.opacity="1"}}
                                            >See our Papeete Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Polynesia', 3)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/lm/highs3.png"></img>
                                        </div>                                     
                                        
                                    </div></div>
                                    
                                    <div className="map-plan">
                                            <div className="plan-head">Added Destinations</div>
                                            <div className="plan-added-ln">
                                                <p className="plan-no-added" id="no-dests-yet-ln">No destinations added yet, hover on the icons on the map and add
                                                    destinations
                                                </p>

                                            </div>

                                            <div className="total-due-ln">
                                                    Total Due: <p style={{"display":"inline-block"}} id="total-numb-ln">$0</p>
                                            </div>                                        

                                    </div>
                                </div>             

                                <div className="map-wrapper" id="haw-box">
                                    <div className="map-head">Plan your trip to Hawaii!
                                    <i class="fas fa-angle-up mapupext" onClick={upAng}></i></div>


                                    <img src={haw} className="map"></img>

                                    <div className="window-dest wd-haw-1"><div className="inner-wind inwind-haw-1" >

                                        <div className="inner-wind-head">Destination: Honolulu <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>
                                        <div className="inner-wind-img-wrapper float-left">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/haw/box1.png"></img>
                                        </div>
                                        <div className="inner-wind-pack-wrapper float-right">
                                            Our Honolulu Package: $150<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/hawaiisguide')}} id="thislinkhaw1" 
                                            onMouseOver={()=>{document.getElementById("thislinkhaw1").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkhaw1").style.opacity="1"}}
                                            >See Our Hawaiis Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/pacific')}} id="thislinkhaw2" 
                                            onMouseOver={()=>{document.getElementById("thislinkhaw2").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkhaw2").style.opacity="1"}}
                                            >See our Honolulu Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Hawaii', 1)}}>add Destination</div>
                                        </div>
                                    
                                    </div></div>
                                    <div className="window-dest wd-haw-2"><div className="inner-wind inwind-haw-2">
                                        
                                        <div className="inner-wind-head">Destination: Volcanoes National Park<i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Volcanoes National Park Package: $150<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/hawaiisguide')}} id="thislinkhaw3" 
                                            onMouseOver={()=>{document.getElementById("thislinkhaw3").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkhaw3").style.opacity="1"}}
                                            >See Our Hawaiis Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/pacific')}} id="thislinkhaw4" 
                                            onMouseOver={()=>{document.getElementById("thislinkhaw4").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkhaw4").style.opacity="1"}}
                                            >See our Volcanoes National Park Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Hawaii', 2)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/haw/highs2.png"></img>
                                        </div>                                                                   
                                    
                                    </div></div>
                                    <div className="window-dest wd-haw-3"><div className="inner-wind inwind-haw-3">
                                    

                                        <div className="inner-wind-head">Destination: Pearl Harbour <i class="fa fa-times" aria-hidden="true" onClick={closeTab} style={{"margin-left":".6vw"}}></i></div>

                                        <div className="inner-wind-pack-wrapper float-left">
                                            Our Pearl Harbour Package: $150<br></br><br></br>
                                            <a onClick={()=>{window.open('/seedestinations/hawaiisguide')}} id="thislinkhaw7" 
                                            onMouseOver={()=>{document.getElementById("thislinkhaw7").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkhaw7").style.opacity="1"}}
                                            >See Our Hawaiis Guide</a><br></br><br></br>
                                            <a onClick={()=>{window.open('/seepackages/pacific')}} id="thislinkhaw8" 
                                            onMouseOver={()=>{document.getElementById("thislinkhaw8").style.opacity=".5"}}
                                            onMouseOut={()=>{document.getElementById("thislinkhaw8").style.opacity="1"}}
                                            >See our Pearl Harbour Package</a><br></br><br></br>

                                            <div className="pack-addd" onClick={()=>{packAddDest('Hawaii', 3)}}>add Destination</div>
                                        </div>      

                                        <div className="inner-wind-img-wrapper float-right">
                                            <img className="inner-wind-img"
                                            src="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/haw/highs3-1.png"></img>
                                        </div>                                     
                                        
                                    </div></div>
                                    
                                    <div className="map-plan">
                                            <div className="plan-head">Added Destinations</div>
                                            <div className="plan-added-haw">
                                                <p className="plan-no-added" id="no-dests-yet-haw">No destinations added yet, hover on the icons on the map and add
                                                    destinations
                                                </p>

                                            </div>

                                            <div className="total-due-haw">
                                                    Total Due: <p style={{"display":"inline-block"}} id="total-numb-haw">$0</p>
                                            </div>                                        

                                    </div>
                                </div>               

                                
                            </div>


                    </div>
                </div>


            </div>
        )
    }
}

export default PlanJourney