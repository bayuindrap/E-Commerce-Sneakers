import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Button, Collapse } from "reactstrap";
import { API_URL } from "../helper";
import { updateCart } from "../redux/actions/userAction";


class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {},
            thumbnail: 0,
            counter: 0,
            selectedSize: {},
            openSize: false,
            redirect: false
        }
    }


    componentDidMount() {
        axios.get(`${API_URL}/products${window.location.search}`)
            .then((response) => {
                console.log("test detail", response.data)
                this.setState({ detail: response.data[0] })
            }).catch((error) => {
                console.log(error)
            })
    }

    renderImages = () => {
        let { images } = this.state.detail
        return images.map((value, index) => {
            return (
                <img className="select-image" src={value} key={index} width="100%" onClick={() => this.setState({ thumbnail: index })} />
            )
        })
    }


    btnOrder = async () => {
        let {selectedSize, detail, counter} = this.state
        if (selectedSize.size) {
            let dataOrder = {
                images: detail.images[0],
                nama: detail.nama,
                brand: detail.brand,
                harga: detail.harga,
                totalHarga: detail.harga * counter,
                size: selectedSize.size,
                qty: counter
            }
            let temp = [...this.props.cart]
            temp.push(dataOrder)
            if (this.props.iduser) {
                let res = await this.props.updateCart(temp, this.props.iduser)
                if (res.success) {
                    this.setState({redirect: true})
                }
            } else {
                alert(`Please Login first.`)
            }

        } else {
            alert(`Please choose Size first❗`)
        }
    }

    render() {
        if(this.state.redirect){
            return <Navigate to="/cart-page"/>
        }
        return (
            <div className="pt-5">
                <div className="pt-5" style={{ color: "grey" }}>
                    <p style={{ marginLeft: "7.5vw" }}>Sneakers / {this.state.detail.brand} / {this.state.detail.nama}</p>
                </div>
                <div className="container row p-5 m-auto mt-4 shadow bg-white ">

                    {
                        this.state.detail.id &&
                        <>

                            <div className="col-md-6">
                                <img src={this.state.detail.images[this.state.thumbnail]} width="550px" />
                            </div>
                            <div className="col-md-6">
                                <div style={{ marginBottom: 20 }}>
                                    <div style={{ backgroundColor: "red", color: "white", width: 135, height: "30px", borderRadius: 15 }}>
                                        <img src="https://i.postimg.cc/qRRq5c7F/hot-product-white-05e517c3.png" style={{ width: "12px", marginLeft: 12, marginTop: 1 }} />
                                        <p style={{ fontWeight: "bold", textAlign: "center", marginTop: -22, marginLeft: 15 }}>Hot Product</p>
                                    </div>
                                </div>
                                {/* <h1>{this.state.detail.brand}</h1> */}
                                <h4 style={{ fontWeight: "bold" }}>{this.state.detail.brand} {this.state.detail.nama}</h4>

                                <div>
                                    <p >Start From</p>
                                    <p style={{ fontWeight: "bolder", fontSize: "20px" }}> IDR {this.state.detail.harga.toLocaleString()}</p>
                                </div>

                                <div style={{ borderBottom: '1.5px solid gray' }}>
                                    <div
                                        style={{ cursor: 'pointer', fontWeight: 'bold' }}
                                        onClick={() => this.setState({ openSize: !this.state.openSize })}>
                                        Size : {this.state.selectedSize.size}
                                    </div>
                                    <Collapse isOpen={this.state.openSize}>
                                        {
                                            this.state.detail.stock.map((item, index) => {
                                                return (
                                                    <div>
                                                        <Button outline color="success" size="sm"
                                                            style={{ width: '100%', border: 'none', textAlign: 'left' }}
                                                            onClick={() => this.setState({ selectedSize: item, counter: 1 })}>
                                                            EUR {item.size} ✔
                                                        </Button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Collapse>
                                </div>

                                <div className="d-flex" style={{ justifyContent: "space-evenly", marginLeft: -27, paddingTop: 10 }}>
                                    <Button style={{ backgroundColor: "black", width: 170, fontWeight: "bold" }}>Brand New</Button>
                                    <Button style={{ backgroundColor: "black", width: 170, fontWeight: "bold" }}>Pre-order</Button>
                                    <Button style={{ width: 170, backgroundColor: "#159953", border: "none", color: "white" , fontWeight: "bold"}} onClick={this.btnOrder}>Order Now</Button>
                                </div>

                                <div className="pt-5">
                                    <div style={{ borderBottom: "0.5px solid gray" }}>
                                        <p style={{ fontWeight: "bold" }}>Please Make Sure The Size Fits You ✔</p>
                                    </div>
                                    <div style={{ borderBottom: "0.5px solid black" }}>
                                        <p style={{ fontWeight: "bold" }}>Authentic. Guaranteed ✔</p>
                                    </div>
                                    <div style={{ borderBottom: "0.5px solid black" }}>
                                        <p style={{ fontWeight: "bold" }}>Share this products to your friends!</p>
                                    </div>
                                </div>

                                <div className="d-flex pt-2">
                                    <img style={{ width: "25px" }} src="https://i.postimg.cc/W49R1nH7/instagram30-00ab54c2.png" />
                                    <img style={{ width: "25px" }} src="https://i.postimg.cc/3xJnxT5P/facebook30-6532adef.png" />
                                    <img style={{ width: "25px" }} src="https://i.postimg.cc/MHmmzss6/whatsapp30-a7e038e2.png" />
                                    <img style={{ width: "25px" }} src="https://i.postimg.cc/MTbQBn1t/twitter30-a04dbd22.png" />
                                    <img style={{ width: "25px" }} src="https://i.postimg.cc/cCd0KHcR/mail30-76ff49e5.png" />
                                    <img style={{ width: "25px" }} src="https://i.postimg.cc/h40KkLSp/copy30-84ed7d37.png" />
                                </div>

                            </div>



                        </>

                    }

                </div>
            </div>
        );
    }
}

const mapToProps = (state) => {
    return {
        cart: state.userReducer.cart,
        iduser: state.userReducer.id
    }
}

export default connect (mapToProps, {updateCart}) (ProductDetail);