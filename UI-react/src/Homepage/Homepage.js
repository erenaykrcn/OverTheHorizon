import React from 'react';
import Page1 from './Page1/Page1.js';
import Page2 from './Page2/Page2.js';
import Page3 from './Page3/Page3.js';
import Page4 from './Page4/Page4.js';
import Page5 from './Page5/Page5.js';
import Page6 from './Page6/Page6.js';


class Homepage extends React.Component {
    render() {
        return(
            <div className="window">
                <Page1/>
                <Page2/>
                <Page3/>
                <Page4/>
                <Page5/>
                <Page6/>
            </div>
        )
    }
  }


export default Homepage