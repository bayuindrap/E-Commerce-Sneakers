import axios from "axios";
import React from "react";
import { Button } from "reactstrap";
import { API_URL } from "../helper";

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {},
            thumbnail: 0
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

    render() {
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
                                {/* <h1>{this.state.detail.brand}</h1> */}
                                <h4 style={{ fontWeight: "bold" }}>{this.state.detail.brand} {this.state.detail.nama}</h4> 
                                
                                <div>
                                    <p >Start From</p>
                                    <p style={{ fontWeight: "bold", fontSize: "20px" }}> IDR {this.state.detail.harga.toLocaleString()}</p>
                                </div>

                                <div className="d-flex" style={{ justifyContent: "space-evenly", marginLeft: -27 }}>
                                    <Button style={{ backgroundColor: "black", width: 170 }}>Brand New</Button>
                                    <Button style={{ width: 170, backgroundColor: "#F1F1F1", border: "none", color: "grey" }}>Used</Button>
                                    <Button style={{ backgroundColor: "black", width: 170 }}>Pre-order</Button>
                                </div>

                                <div className="pt-5">
                                    <div style={{ borderBottom: "1px solid gray" }}>
                                        <p style={{ fontWeight: "bold" }}>Please Make Sure The Size Fits You ✔</p>
                                    </div>
                                    <div style={{ borderBottom: "1px solid black" }}>
                                        <p style={{ fontWeight: "bold" }}>Authentic. Guaranteed ✔</p>
                                    </div>
                                    <div style={{ borderBottom: "1px solid black" }}>
                                        <p style={{ fontWeight: "bold" }}>Share this products to your friends ✔</p>
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

export default ProductDetail;