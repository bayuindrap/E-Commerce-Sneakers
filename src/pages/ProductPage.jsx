import React from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
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
           productList: []
         }
    }


    componentDidMount() {
        this.getData()
    }


    getData = () => {
        axios.get(`${API_URL}/products`)
            .then ((response) => {
                console.log("get data product=", response.data)
                this.setState({productList: response.data})
            }).catch((error) => {
                console.log(error)
            })
    }


    printProduct = () => {
        return this.state.productList.map((value, index) => {
           return <div className="col-3 mt-1">
               <Card className="shadow p-2 mb-5 bg-white rounded">
                   
                        <CardImg top 
                        src={value.images[0]}
                        top width="50%%"
                        alt={`${value.nama}-${index}`}/>
                        <CardBody>
                            <CardTitle tag="h5">{value.nama}</CardTitle>
                            <CardTitle tag="h6" style={{color: "green", fontWeight: "bold"}}>IDR {value.harga.toLocaleString()}</CardTitle>
                        </CardBody>
                   
               </Card>
           </div> 
        })
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
            <div>
                <h1>Product Page</h1>
                <div className="row">
                    {this.printProduct()}
                </div>
            </div>
         );
    }
}

const mapToProps = (state) => {
    console.table(productReducer.productList)
    return {
        // productList: state.productReducer.productList
    }
}
 
export default connect (mapToProps)(ProductPage)