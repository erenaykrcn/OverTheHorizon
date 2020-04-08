import React, {Component} from 'react';


class CartPack extends Component {
    componentDidMount() {
        let {is_ordered} = this.props;
        let index = this.props.index;

        if (is_ordered) {
            document.getElementById("ordered"+index).style.display = "block";
        }

    }

    render() {
        function seeDetails(index) {
            if(window.getComputedStyle(document.getElementsByClassName("cart-details")[index]).getPropertyValue("height")==="0px"){
                document.getElementsByClassName("cart-details")[index].style.height = "15vw";

                document.getElementById("seedetails"+index).innerHTML = "hide details";
                document.getElementById("seedetails-ico"+index).className = "fas fa-angle-up";

            } else {
                document.getElementsByClassName("cart-details")[index].style.height = "0vw";
                document.getElementById("seedetails"+index).innerHTML = "see details";
                document.getElementById("seedetails-ico"+index).className = "fas fa-angle-down";
            }
        }

        let name = this.props.name;
        let price = this.props.price;
        let landmarks = this.props.landmarks;
        let duration = this.props.duration; 
        let index = this.props.index;

        return (
                        <div className="cart-pack">
                            <div className="cart-pack-in">
                                <p>Package {index}:</p>

                                
                                <p className="ordered" id={'ordered'+index} >ORDERED</p>

                                </div>
                            <div className="cart-pack-in">
                                <p>{name} Package</p>
                                <p className="see-details-cart" onClick={()=>{seeDetails(index-1)}}  >
                                    <p id={'seedetails'+(index-1)} className="seedetails-p" >see the details</p> <i className="fas fa-angle-down" id={'seedetails-ico'+(index-1)}></i></p>
                            
                            </div>
                            <div className="cart-pack-in">Price:  {price}</div>
                            <div className="cart-pack-in">
                                <p>Date: </p>
                                <input type="date" className="cart-date" id="date"></input>
                            
                            </div>

                            <div className="cart-details">
                                <i className="fas fa-angle-up cart-details-ico" onClick={()=>{seeDetails(index-1)}}></i>
                                <div className="cart-details-in">Included Locations:   {landmarks}</div>
                                <div>Duration: {duration}</div>
                            </div>
                        </div>
        )
    }
}


export default CartPack