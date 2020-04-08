import React, {Component} from 'react';

class Package extends Component {
    state= {
        items: 'Loading...'
    }

    seePacks() {
        let dest = this.props.dest;
        let index = this.props.index;

        let {highs_dict} = this.props;
        let {plan_added_dests} = this.props;

        let total = 0;


        let packs = [];

        for (let i=0; i<plan_added_dests[dest].length;i++) {
            let name = highs_dict[dest][plan_added_dests[dest][i]]['name'];
            let price = highs_dict[dest][plan_added_dests[dest][i]]['price'];
            total += parseInt(price,10);

            packs.push(<div className="ow-dest-package">{name} Package: {price}EUR</div>);
        }

        
        this.setState({
             items: packs,
             total: total,
         })
    }


    componentWillMount(){
        this.seePacks();
    }

    componentDidMount(){
        let total = this.state.total;
        let {index} = this.props;

        document.getElementById("package_price"+index).innerHTML = total;
    }

    componentWillReceiveProps(){
        this.seePacks();
    }

    render() {
        let dest = this.props.dest;
        let index = this.props.index;
        let {locations} = this.props;
        let price_id = "package_price" + index;

        index += 1;

        const abr_count = {'South Africa': ['sa','/seedestinations/southafricaguide'], 
                            'Egypt': ['eg', '/seedestinations/egyptguide'],
                            'Morocco': ['mor', '/seedestinations/moroccoguide'],
                            'China': ['ch', '/seedestinations/chinaguide'],
                            'Japan': ['jap', '/seedestinations/japanguide'],
                            'Turkey': ['turk', '/seedestinations/turkeyguide'],
                            'Europe': ['weu', '/seedestinations/weuropeguide'],
                            'Polynesia': ['lm', '/seedestinations/lesmarquisesguide'],
                            'Hawaii': ['haw', '/seedestinations/hawaiisguide'],
                            
                        }

        let url = 'https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/'+ abr_count[dest][0] +'/box2.png'; 


        function seePackages(i) {
            if (window.getComputedStyle(document.getElementsByClassName("package-wrapper")[i]).getPropertyValue("height")==="0px") {
                document.getElementsByClassName("package-wrapper")[i].style.height = "auto";
            } else {
                document.getElementsByClassName("package-wrapper")[i].style.height = "0";
            }
        }

        return (
                        <div className="ow-dest ow-mar" >
                            <div className="ow-dest-head" onClick={()=>{seePackages(index-1)}}>
                                
                                <p className="dest-head">Destination {index}: {dest} <i class="fas fa-angle-down dest-ang"></i></p>
                                <div className="dest-total">Total per passenger: EUR<p id={price_id} className="price_id pack_price"></p></div>
                            
                            </div>

                            <div className="package-wrapper">
                                <div className="packages">
                                    {this.state.items}
                                </div>

                                <img className="ow-pad" src={url}></img>
                            </div>

                        </div>
        )
    }
}


export default Package