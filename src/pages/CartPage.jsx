import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Button, FormGroup, Input, Label, Row } from "reactstrap";
import { API_URL } from "../helper";
import { updateCart } from "../redux/actions/userAction";



class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    printCart = () => {
        return this.props.cart.map((value, index) => {
            return (
                <div className="col shadow bg-white rounded text-center">
                    <div style={{ textAlign: "left", fontWeight: "bold", paddingLeft: 15, paddingTop: 10 }}>
                        <p>Checkout Buy Now</p>
                    </div>
                    <div className="col">
                        <img src={value.images} width="30%" />
                    </div>

                    <div>
                        <h6 style={{ fontWeight: 'bolder' }}>{value.nama}</h6>
                    </div>

                    <div className="col align-items-center">
                        <p style={{ fontSize: "14px" }}> EUR {value.size} / Brand New, Perfect Box, Complete Accessories / 3-5 days ETA business day</p>
                    </div>

                    <div className="col  d-flex justify-content-center flex-column">
                        <p style={{ fontWeight: 'bolder', color: "#159953" }}>IDR {value.harga.toLocaleString()}</p>
                    </div>
                    {/* <div className='col-md-5 d-flex align-items-center'>
                        <div className='d-flex justify-content between align-items-center'>
                            <div className='d-flex' style={{ width: '50%' }}>
                                <span style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                    <Button onClick={() => this.btnDesc(index)}>-</Button>
                                    <Input placeholder="qty" value={item.qty} style={{ width: "50%", display: 'inline-block', textAlign: 'center' }} />
                                    <Button onClick={() => this.btnInc(index)}>+</Button>
                                </span>
                            </div>
                            <h4>Rp {(item.totalHarga).toLocaleString()}</h4>
                        </div>
                        <Button color="warning" style={{ border: 'none', float: 'right', marginLeft: "1vw" }} onClick={() => this.btnRemove(index)}>Remove</Button>
                    </div> */}
                </div>
            )
        })
    }


    render() {
        return (
            <div className="container-fluid">
                <h1>Cart Page</h1>
                <div className="row">
                    <div className="col-7 p-4">
                        {this.printCart()}
                    </div>
                    <div className="col-5 p-4">
                        <div className="p-2 shadow bg-white rounded">
                            <div className="d-block">
                                <img src="https://i.postimg.cc/Kjz627p3/loc.png" style={{ width: "20px", verticalAlign: "middle"}} />
                            </div>

                            <div style={{paddingTop: -20}}>
                                <p style={{ color: "grey", fontWeight: "bold", marginLeft: 25 }}>Deliver to</p>
                                <p style={{ marginLeft: 25, fontWeight: "bold" }}>Office - Purwadhika</p>
                                <p style={{ marginLeft: 25 }}>Jl. BSD Green Office Park, GOP 9 - G Floor BSD City, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 15345</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapToProps = (state) => {
    return {
        cart: state.userReducer.cart,
        iduser: state.userReducer.id,
        username: state.userReducer.username
    }
}



export default connect(mapToProps, { updateCart })(CartPage);