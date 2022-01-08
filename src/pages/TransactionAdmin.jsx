import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import { Badge, Button } from 'reactstrap';
import { API_URL } from '../helper';
import { MdCancel } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";

class  TransactionAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            transaksi: [],
            detail: {},
            status: ["All Orders", "Waiting Confirmation", "Order Accepted", "Order Declined"],
            statusIdx: 0
         }
    }

    componentDidMount() {
        this.getData()
    }


    getData = () => {
        axios.get(`${API_URL}/transactions`)
            .then((res) => {
                console.log(res.data)
                this.setState({ transaksi: res.data })
            }).catch((err) => {
                console.log(err)
            })
    }

    btnAccept = (id) => {
        axios.patch(`${API_URL}/transactions/${id}`, {
            status: "Order Accepted"
        })
            .then((res) => {
                this.getData()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    btnCancel = (id) => {
        axios.patch(`${API_URL}/transactions/${id}`, {
            status: "Order Declined",
            subTotal: 0
        })
            .then((res) => {
                this.getData()

            })
            .catch((err) => {
                console.log(err)
            })
    }

    getTransaksiFilter = (status, statusActive) => {
        axios.get(`${API_URL}/transactions${statusActive > 0 ? `?status=${status}` : ""}`)
            .then((res) => {
                console.log(res.data, statusActive)
                this.setState({ transaksi: res.data, statusIdx: statusActive })
            }).catch((err) => {
                console.log(err)
            })
    }

    printTransaction = () => {
        return this.state.transaksi.map((value, index) => {

            let badgeColor = value.status.includes("Declined") ? "danger" : value.status.includes("Accepted") ? "success" : "warning"

            return <div className="shadow pb-3 rounded mb-5">
                <div className="shadow-sm p-2  rounded" style={{ color: "white", backgroundColor: "#159852" }}>
                    <b style={{ marginLeft: 20 }}>{value.invoice}    </b>
                    <span> | {value.date}  |  <Badge color={badgeColor}>{value.status}</Badge></span>
                    <b style={{ float: "right" }}>{value.username}'s Order</b>
                </div>
                <div className="col p-4" style={{ height: 385 }}>
                    <div className="col text-center" style={{ borderBottom: "1px solid black" }}>
                        <img src={value.detail[0].images} width="20%" alt="" />
                        <h4 style={{ fontWeight: "bolder" }} >{value.detail[0].brand} {value.detail[0].nama}</h4>
                        <p style={{ marginTop: -5 }}> EUR {value.detail[0].size}</p>
                        <p className="text-muted" style={{ marginTop: -15 }}>IDR {value.detail[0].harga.toLocaleString()}</p>
                        {/* <p className="text-muted">Sub Total Includes Shipping</p>
                        <h4 style={{ fontWeight: "bolder", color: "#159953" }}>IDR {value.subTotal.toLocaleString()}</h4> */}
                    </div>

                    <div className='row'>
                        <div style={{float: "left"}}>
                            <img src='https://i.postimg.cc/d0xztgyj/app-icon.png' style={{ width: "16%" }} />

                        <div className="col" style={{ float: "right" }}>
                            <p className="text-muted">Sub Total Includes Shipping</p>
                            <h4 style={{ fontWeight: "bolder", color: "#159953", marginTop: -15 }}>IDR {value.subTotal.toLocaleString()}</h4>
                            <Button color="success" style={{ width: 100 }} onClick={() => this.btnAccept(value.id)} > <BsFillCheckCircleFill /> Accept</Button>
                            <Button color="danger" style={{ width: 100}} onClick={() => this.btnCancel(value.id)} > <MdCancel /> Decline</Button>
                        </div>
                        </div>

                    </div>
                </div>

            </div>
        })
    }

    render() {
        return (
            <div className="container p-5 mt-5">
                <h1 className='text-center'> ✔Order List✔</h1>
                <div className="d-flex justify-content-evenly mb-3">
                    {
                        this.state.status.map((value, index) => {
                            return <Button outline
                                color={this.state.statusIdx == index ? "success" : "secondary"}
                                style={{ border: 'none', width: "100%", borderBottom: this.state.statusIdx == index && "3px solid #159953" }}
                                type='button'
                                onClick={() => this.getTransaksiFilter(value, index)}>
                                <h6 style={{ fontWeight: "bold" }}>{value}</h6>
                            </Button>
                        })
                    }
                </div>
                {this.printTransaction()}
            </div>
        );
    }
}

const mapToProps = (state) => {
    return {
        iduser: state.userReducer.id,
        role: state.userReducer.role,
    }
}
 
export default connect(mapToProps) (TransactionAdmin);