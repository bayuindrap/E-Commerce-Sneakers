import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Button, FormGroup, Input, Badge } from "reactstrap";
import { API_URL } from "../helper";
import { updateCart } from "../redux/actions/userAction";
import { FaRegTrashAlt, FaCartPlus } from "react-icons/fa";
import { BsFillCartFill, BsCart3 } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { Navigate } from "react-router-dom";



class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ongkir: 0,
            redirect: false
        }
    }


    total = () => {
        let total = 0
        this.props.cart.forEach((item) => {
            total += item.totalHarga
        })
        return total + this.state.ongkir
    }

    btnRemove = (index) => {
        let temp = [...this.props.cart];
        temp.splice(index, 1)
        this.props.updateCart(temp, this.props.iduser)

    }


    btnCheckout = () => {
        const date = new Date()
        axios.post(`${API_URL}/transactions`, {
            iduser: this.props.iduser,
            username: this.props.username,
            invoice: `#SNKRS/${date.getTime()}`,
            date: date.toLocaleDateString(),
            totalharga: this.total() - parseInt(this.state.ongkir),
            shipping: parseInt(this.state.ongkir),
            subTotal: this.total(),
            detail: [...this.props.cart],
            status: "Waiting Confirmation"
        }).then((res) => {
            if (this.props.iduser) {
                
                this.props.updateCart([], this.props.iduser)
                this.setState({ ongkir: 0 })
                this.setState({redirect: true})
                
            }

        })
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
                        <p style={{ fontWeight: 'bolder', color: "#159953", marginBottom: 3, marginTop: -15 }}>IDR {value.harga.toLocaleString()}  </p>

                        <FaRegTrashAlt style={{ margin: "auto" }} onClick={() => this.btnRemove(index)} />
                        
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </div>
            )
        })
    }

    printTransaction = () => {
        return this.state.transaksi.map((value, index) => {

            let badgeColor = value.status.includes("Cancel") ? "danger" : "warning"

            return <div className="shadow pb-3 rounded">
                <div className="shadow-sm p-2  rounded" style={{ color: "white", backgroundColor: "#159852" }}>
                    <b style={{ marginLeft: 20 }}>{value.invoice}    </b>
                    <span> | {value.date}  |  <Badge color={badgeColor}>{value.status}</Badge></span>
                </div>
                <div className="row p-3">
                    <div className="col-md-1">
                        <img src={value.detail[0].images} width="100%" alt="" />
                        <h4 style={{ fontWeight: "bolder" }}>{value.detail[0].nama}</h4>
                        <p className="text-muted">IDR {value.detail[0].harga.toLocaleString()}</p>
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center" style={{ borderRight: "1px solid gray" }}>
                        {/* <h4 style={{ fontWeight: "bolder" }}>{value.detail[0].nama}</h4>
                        <p className="text-muted">IDR {value.detail[0].harga.toLocaleString()}</p> */}
                        
                    </div>
                    <div className="col-md-3">
                        <p className="text-muted">Sub Total Includes Shipping</p>
                        <h4 style={{ fontWeight: "bolder", color: "#159953" }}>IDR {value.subTotal.toLocaleString()}</h4>
                    </div>
                </div>
                <div style={{ textAlign: "right" }}>
                    <Button color="danger"  >Batalkan Pesanan</Button>
                    <Button color="primary" outline style={{ border: "none" }}>Lihat Detail Produk</Button>
                </div>
            </div>
        })
    }

    printPayment = () => {
        return this.props.cart.map((value, index) => {
            return (
                <div className="col-12 p-4">
                    <div className=" row p-2 shadow bg-white rounded">
                        <div style={{ paddingTop: -20 }}>
                            <p style={{ color: "grey", fontWeight: "bold" }}>Payment Summary</p>
                            <div className="row">
                                <div className="row-2" style={{marginTop: -10}}>
                                    <p style={{ float: "left" }}>Product Price</p>
                                    <p style={{ float: "right" }}> IDR {value.harga.toLocaleString()}</p>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="row-2 " style={{marginTop: -10}}>
                                    <p style={{ float: "left" }}>Shipping Handling</p>
                                    <Input style={{ width: 106, height: 25, float: "right" }} onChange={(e) => this.setState({ ongkir: parseInt(e.target.value) })}
                                        type="number"></Input>
                                </div>
                               
                                <div className="row-2 " style={{marginTop: -10}}>
                                    <p style={{ float: "left" }}>Total</p>
                                    <p style={{ float: "right" }}>IDR {(this.total()).toLocaleString()}</p>
                                </div>
                                <Button style={{ width: "113px", margin: "auto", marginRight: 10, backgroundColor: "#159852", marginTop: -10 }} onClick={this.btnCheckout}> <BsFillCartFill/> Checkout </Button>
                            </div>

                        </div>
                    </div>
                </div>

            )
        })

    }




    render() {
        if(this.state.redirect){
            return <Navigate to="/transaction-page"/>
        }
        return (
            <div className="container-fluid">
                <h1>Cart Page</h1>
                <div className="row">
                    <div className="col-7 p-4">
                        {this.printCart()}
                    </div>

                    <div className="col-5">

                        <div className="col-12 p-4">
                            <div className="p-2 shadow bg-white rounded">
                                {/* <div>
                                    <img src="https://i.postimg.cc/Kjz627p3/loc.png" style={{ width: "20px", verticalAlign: "middle" }} />
                                </div> */}
                                {/* <MdLocationOn style={{}}/> */}

                                <div style={{ paddingTop: -20 }}>
                                    <p style={{ color: "grey", fontWeight: "bold", marginLeft: 25 }}>Deliver to</p>
                                    <p style={{ marginLeft: 25, fontWeight: "bold", marginTop: -10 }}>Office - Purwadhika</p>
                                    <p style={{ marginLeft: 25, marginTop: -10 }}>JL. BSD Green Office Park, GOP 9 - G Floor BSD City, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 15345</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 p-4 py-0">
                            <div className="p-2 shadow bg-white rounded">
                                <p style={{ fontWeight: "bold", padding: 2 }}>Have a voucher code?</p>

                                <div style={{ backgroundColor: "#D0EADC", color: "white", width: 540, height: "60px", borderRadius: 15, marginBottom: 10 }}>
                                    <div >
                                        <p style={{ textAlign: "left", marginLeft: 15, paddingTop: 15, color: "black" }}>Enter voucher code here</p>
                                    </div>
                                    <div style={{ backgroundColor: "#159852", color: "white", width: "80px", height: "35px", borderRadius: 15, float: "right", display: "inline-block", marginTop: -40, marginRight: 15 }}>

                                        <p style={{ textAlign: "center" }}>View</p>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="p-2">
                            {this.printPayment()}
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