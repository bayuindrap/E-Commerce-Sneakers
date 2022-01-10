import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { API_URL } from "../helper";
import { productReducer } from "../redux/reducers/productReducer";
import axios from "axios";
import { Button, ButtonGroup, Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            limit: 4
        }
    }

    componentDidMount() {
        this.getData()
    }


    getData = () => {
        axios.get(`${API_URL}/products`)
            .then((response) => {
                console.log("get data product=", response.data)
                this.setState({ productList: response.data })
            }).catch((error) => {
                console.log(error)
            })
    }

    printProduct = () => {

        return this.state.productList.slice(4, 8).map((value, index) => {
            return <div className="col-3 mt-1">
                <Card className="shadow p-2 mb-5 bg-white rounded" style={{ width: "18vw" }}>
                    <Link to={`/product-detail?id=${value.id}`} style={{ textDecoration: "none", color: "black", fontWeight: "bolder" }}>
                        <img src='https://i.postimg.cc/J4ccTJkF/index1.png' style={{width: "28px", float:"right"}}/>
                        <CardImg top
                            src={value.images[0]}
                            top width="10px"
                            alt={`${value.nama}-${index}`} />

                        <CardBody>
                            <div style={{ height: 48, }}>
                                <CardTitle tag="h5">{value.nama}</CardTitle>
                            </div>
                            <CardTitle tag="h6" style={{ color: "green", fontWeight: "bold", marginTop: 5 }}>IDR {value.harga.toLocaleString()}</CardTitle>
                        </CardBody>
                    </Link>

                </Card>
            </div>
        })
    }


    printCarousel = () => {
        return (
            <div className='shadow'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ borderRadius: 20 }}
                            src="https://i.postimg.cc/ZR2ptBrL/ey-Jid-WNr-ZXQi-Oi-Jra-WNr-YXZlbn-Vl-LWFzc2-V0cy-Is-Imtle-SI6-In-Nsa-WRlci1pb-WFn-ZXMv-Mj-Rj-YTBl-Mj-Rl-MGVl-YTdl-Nj-U5-MTlk-MGY5.webp"
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ borderRadius: 20 }}
                            src="https://i.postimg.cc/qvsLsL8H/ey-Jid-WNr-ZXQi-Oi-Jra-WNr-YXZlbn-Vl-LWFzc2-V0cy-Is-Imtle-SI6-In-Nsa-WRlci1pb-WFn-ZXMv-ODdi-Mj-Y5-Y2-Rh-ODgw-ODBh-ZTU0-MGI1-ODY2.webp"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ borderRadius: 20 }}
                            src="https://i.postimg.cc/pX2XVVqQ/ey-Jid-WNr-ZXQi-Oi-Jra-WNr-YXZlbn-Vl-LWFzc2-V0cy-Is-Imtle-SI6-In-Nsa-WRlci1pb-WFn-ZXMv-OGQz-YWI1-MTZl-YWEy-ODg5-Yzdj-Zjg4-MGVj.webp"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ borderRadius: 20 }}
                            src="https://i.postimg.cc/fR83QSs0/ey-Jid-WNr-ZXQi-Oi-Jra-WNr-YXZlbn-Vl-LWFzc2-V0cy-Is-Imtle-SI6-In-Nsa-WRlci1pb-WFn-ZXMv-NTRk-Y2-Qx-Zj-Ux-MTM4-Mjgy-YWE4-YWVh-OTli.webp"
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }

    printImage = () => {
        return (
            <div>
                <div>
                    <img style={{ width: "27vw", borderRadius: 30 }} alt="..." src="https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <img style={{ width: "27vw", borderRadius: 30 }} alt="..." src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div style={{ width: "95vw", paddingTop: "80px", margin: "auto" }}>
                    <div>
                        {this.printCarousel()}
                    </div>
                    {/* <div style={{marginLeft:"20px"}}>
                        {this.printImage()}
                    </div> */}
                </div>

                <div className='shadow p-5' style={{ backgroundColor: "#159953", width: "95vw", paddingTop: "80px", margin: "auto", marginTop: "5vh" }}>

                    <div style={{ marginBottom: 20, marginLeft: 35 }}>
                        <div style={{ backgroundColor: "red", color: "white", width: 150, height: "40px", borderRadius: 15 }}>
                            <img src="https://i.postimg.cc/qRRq5c7F/hot-product-white-05e517c3.png" style={{ width: "15px", marginLeft: 12, marginTop: 8 }} />
                            <p style={{ fontWeight: "bold", textAlign: "center", marginTop: -22, marginLeft: 20, fontSize: 17 }}>Hot Products</p>
                        </div>
                    </div>

                    <div className='row' style={{ marginLeft: 20, marginTop: 35 }}>
                        {this.printProduct()}
                    </div>
                </div>

                <div >
                    <img src='https://i.postimg.cc/52D0MRQ0/ey-Jid-WNr-ZXQi-Oi-Jra-WNr-YXZlbn-Vl-LWFzc2-V0cy-Is-Imtle-SI6-Im-Nvb-Gxl-Y3-Rpb25z-Lz-E5-Ni83-NTI3-OTgx-MDRh-Yz-M0-ODQ5-ZDdh-MGEy.webp' style={{width: "95vw", marginLeft: 30, marginTop: 30}}/>
                </div>

            </div>

        )
    }
}

const mapToProps = (state) => {
    console.table(productReducer.productList)
    return {
        productList: state.productReducer.productList
    }
}

export default connect(mapToProps)(HomePage);