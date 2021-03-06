import React from "react";
import { Button, ButtonGroup, Card, CardBody, CardImg, CardTitle, Input, InputGroup, Label, Row, FormGroup } from "reactstrap";
import { Link } from 'react-router-dom';
import { productAction, sortingProduct } from "../redux/actions/productAction";
import { connect } from 'react-redux';
import axios from "axios";
import { API_URL } from "../helper";
import { productReducer } from "../redux/reducers/productReducer";
import { GrPowerReset } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { BiReset } from "react-icons/bi";







class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            page: 1,
            limit: 3
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
        let { page } = this.state
        return this.props.productList.slice(page > 1 ? (page - 1) * 12 : page - 1, page * 12).map((value, index) => {
            return <div className="col-3 mt-1 hvr-grow">
                <Card className="shadow p-2 mb-3 bg-white" style={{ width: "18vw", borderRadius: 15, height: "41.5vh" }}>
                    <Link to={`/product-detail?id=${value.id}`} style={{ textDecoration: "none", color: "black", fontWeight: "bolder" }}>
                        <CardImg
                            src={value.images[0]}
                            top width="30%"
                            alt={`${value.nama}-${index}`} style={{ objectFit: "contain" }} />

                        <CardBody>
                            <div style={{ height: 48 }}>
                                <CardTitle tag="h5">{value.nama}</CardTitle>
                            </div>
                            <CardTitle tag="h6" style={{ color: "green", fontWeight: "bold" }}>IDR {value.harga.toLocaleString()}</CardTitle>
                        </CardBody>
                    </Link>

                </Card>
            </div>
        })
    }

    btPagination = () => {
        let btn = []
        for (let i = 0; i < Math.ceil(this.state.productList.length / 12); i++) {
            btn.push(<Button outline color="success" disabled={this.state.page == i + 1 ? true : false}
                onClick={() => this.setState({ page: i + 1 })}>
                {i + 1}
            </Button>)
        }
        return btn
    }

    printFilter = () => {
        return <div className=" shadow col-md-10 p-4" style={{ backgroundColor: "white", height: "60vh" }}>
            <div className="col">

                <FormGroup>
                    <Label style={{ fontWeight: "bold" }}>Product Name</Label>
                    <Input type="text" id="text" placeholder="Find product"
                        innerRef={(element) => this.inSearchName = element} />
                </FormGroup>
                <FormGroup>
                    <Label style={{ fontWeight: "bold" }}>Price</Label>
                    <div className="d-flex">
                        <Input type="number" id="numb1" placeholder="Minimum"
                            innerRef={(element) => this.inSearchMinHarga = element} />
                        <Input type="number" id="numb2" placeholder="Maximum"
                            innerRef={(element) => this.inSearchMaxHarga = element} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label style={{ fontWeight: "bold" }}>Sort by</Label>
                    <InputGroup>
                        <Input type="select" style={{ width: "250px" }}
                            onChange={this.btnClick}>
                            {/* innerRef={(element) => this.inSearchSort = element} */}
                            <option value="harga-asc">Price Up</option>
                            <option value="harga-desc">Price Down</option>
                            <option value="nama-asc">A-Z</option>
                            <option value="nama-desc">Z-A</option>
                            <option value="id-asc">Reset</option>
                        </Input>
                    </InputGroup>
                    <div className="pt-2" style={{ textAlign: "end" }}>
                        <Button style={{ backgroundColor: "#159953", color: "white", width: 115, float: "left", borderRadius: 50 }} onClick={this.btnReset}>Clear Filter</Button>
                        <Button style={{ marginLeft: 16, backgroundColor: "#159953", width: 115, borderRadius: 50 }} onClick={this.btnSearch}>Apply Filter</Button>
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/y8pDD0qh/app-icon.png" style={{ width: "60%", marginTop: 20, marginLeft: 60 }} />
                    </div>
                </FormGroup>
            </div>
        </div>

    }


    btnClick = (e) => {
        this.props.sortingProduct({
            field: e.target.value.split('-')[0],
            sortType: e.target.value.split('-')[1]
        })
    }

    btnSearch = () => {
        this.props.productAction(this.inSearchName.value, this.inSearchMinHarga.value, this.inSearchMaxHarga.value)
        this.setState({ page: 1 })
    }

    btnReset = () => {
        this.props.productAction()
        this.inSearchName.value = ""
        this.inSearchMinHarga.value = ""
        this.inSearchMaxHarga.value = ""
    }




    render() {
        return (
            <div className="p-5 mt-5">


                <div className="row">
                    <div style={{ position: "fixed", display: "flex" }} className="row col-3">
                        {this.printFilter()}


                    </div>
                    <div className="row col-10" style={{ marginLeft: "18.5vw" }}>

                        {this.printProduct()}
                    </div>
                </div>

                <div style={{ marginLeft: "46vw" }}>
                    <ButtonGroup>
                        {this.btPagination()}
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

const mapToProps = ({ productReducer }) => {

    return {
        productList: productReducer.productList

    }
}

export default connect(mapToProps, { productAction, sortingProduct })(ProductPage)