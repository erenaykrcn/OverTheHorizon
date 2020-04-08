import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavMain from './Nav/Nav.js';
import SeeDestinationsBase from './SeeDestinationsBase.js';

class SeeDest extends React.Component {
  state={
    dests: [],
  }
  
  loadDest() {
    let thisComp = this;
    let endpoint = '/api/seedestinations/';
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
      thisComp.setState({
        dests: responseData.results
      })
      console.log(responseData)
    }).catch(function(error){
      console.log("error",error);
    })
 }

 componentDidMount() {
   this.setState({
     dests:[],
   });
   this.loadDest()
 }


  render() {
    let parts = window.location.href.split('/');
    let lastSegment = parts.pop() || parts.pop();


    const {dests} = this.state;

    return (
      <Router>
        <Switch>
          <div className="window">  
            <NavMain/>

            {dests.length>0 ? dests.map((destItem, index)=>{
              if (destItem.slug === lastSegment) {
                  return <SeeDestinationsBase desc1={destItem.desc1}
                  highs1={destItem.highs1}  highs2={destItem.highs2}  highs3={destItem.highs3}  highs4={destItem.highs4}
                  nav1 = {destItem.nav1} nav2 = {destItem.nav2} nav3 = {destItem.nav3} nav4 = {destItem.nav4}
                  box1 = {destItem.box1} box2 = {destItem.box2} background={destItem.background} 
                  highs_head1 = {destItem.highs_head1} highs_head2 = {destItem.highs_head2}
                  highs_head3 = {destItem.highs_head3} highs_head4 = {destItem.highs_head4} head = {destItem.head}
                  highs_desc1 = {destItem.highs_desc1} highs_desc2 = {destItem.highs_desc2} highs_desc3 = {destItem.highs_desc3}
                  highs_desc4 = {destItem.highs_desc4} fact1 = {destItem.fact1} name={destItem.name}
                  fact2 = {destItem.fact2}
                  fact3 = {destItem.fact3}
                  fact4 = {destItem.fact4}
                  fact5 = {destItem.fact5}
                  fact6 = {destItem.fact6}
                  fact7 = {destItem.fact7}

                  />
              }
            }):""}

          </div>
        </Switch> 
      </Router>
    );
  }
}

export default SeeDest