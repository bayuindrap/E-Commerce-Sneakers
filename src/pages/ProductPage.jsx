import React from "react";
import { Button, ButtonGroup, Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';
import { productAction } from "../redux/actions/productAction";
import { connect } from 'react-redux';
import axios from "axios";
import { API_URL } from "../helper";
import { productReducer } from "../redux/reducers/productReducer";





class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            page: 1,
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
        let {page} = this.state
        return this.state.productList.slice(page > 1 ? (page-1) * 12 : page - 1, page * 12).map((value, index) => {
            return <div className="col-3 mt-1">
                <Card className="shadow p-2 mb-5 bg-white rounded">

                    <CardImg top
                        src={value.images[0]}
                        top width="50%%"
                        alt={`${value.nama}-${index}`} />

                    <CardBody>
                        <div style={{height: 48}}>
                            <CardTitle tag="h5">{value.nama}</CardTitle>
                        </div>
                        <CardTitle tag="h6" style={{ color: "green", fontWeight: "bold" }}>IDR {value.harga.toLocaleString()}</CardTitle>
                    </CardBody>

                </Card>
            </div>
        })
    }

    btPagination = () => {
        let btn = []
        for (let i = 0; i < Math.ceil(this.state.productList.length / 12); i++) {
            btn.push(<Button outline color="success" disabled={this.state.page == i + 1 ? true : false} 
            onClick={() => this.setState({ page: i + 1})}>
                {i + 1}
            </Button>)
        }
        return btn
    }

    // printProduct = () => {
    //     return this.props.productList.map((value, index) => {
    //         return <div className="col-3 mt-2">
    //             <Card className="shadow p-5 mb-5 bg-white rounded">
    //                 <Link to={`/products-detail?id=${value.id}`} style={{ textDecoration: "none" }}>
    //                     <CardImg top
    //                         src={value.images[0]}
    //                         top width="100%"
    //                         alt={`${value.nama}-${index}`}
    //                     />
    //                     <CardBody>
    //                         <CardTitle tag="h5" style={{ fontWeight: "bolder" }}>{value.nama}</CardTitle>
    //                         <CardTitle tag="h6" style={{ fontWeight: "bold" }}>Rp.{value.harga.toLocaleString()}</CardTitle>
    //                     </CardBody>
    //                 </Link>
    //             </Card>
    //         </div>
    //     })
    // }










    render() {
        return (
            <div className="p-5">
                <h1>Product Page</h1>
                <div className="row">
                    {this.printProduct()}
                </div>
                <div className="text-center">
                    <ButtonGroup style={{height: 50, width: 50}}>
                        {this.btPagination()}
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

const mapToProps = (state) => {
    console.table(productReducer.productList)
    return {
        productList: state.productReducer.productList
    }
}

export default connect(mapToProps)(ProductPage)