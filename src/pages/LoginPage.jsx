import React from "react";
import { Card, FormGroup, Label, Input, Button, InputGroup, InputGroupText } from "reactstrap";
import { Link } from "react-router-dom";
import { loginAction } from "../redux/actions/userAction";
import { API_URL } from "../helper";
import { connect } from 'react-redux';
import axios from "axios";
import { Navigate } from 'react-router-dom';



class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passShow: "show",
            passType: "password",
            dataUser: []
        }
    }

    showPass = () => {
        if (this.state.passType == "password") {
            this.setState({
                passShow: "hide",
                passType: "text"
            })
        } else {
            this.setState({
                passShow: "show",
                passType: "password"
            })
        }
    }

    // btLogin = async () => {
    //     try {
    //         let res = await this.props.loginAction(this.usernameLogin.value, this.passwordLogin.value)
    //         this.props.loginAction(res.data[0])
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    
    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get(`${API_URL}/dataUser`)
            .then((response) => {
                console.log("GET DATA LOGIN", response.data)
                this.setState({ dataUser: response.data })
            }).catch((error) => {
                console.log(error)
            })
    }

    btLogin = () => {
        this.props.loginAction(this.usernameLogin.value, this.passwordLogin.value)
    }


    render() {
        //https://i.postimg.cc/mZSZ9zL0/undraw-Login-re-4vu2-1.png
        //https://i.postimg.cc/ZKtbm455/index.png
        if (this.props.iduser) {
            alert(`Welcome ${this.props.username} 👌`)
            return <Navigate to="/"/>
        }
        return (
            <div>
                <h1 className="text-center" style={{color: "green"}} >LOGIN</h1>
                <div className="row">
                    <div className="col-5 row-3 mt-10" >
                        <img src="https://www.kickavenue.com/static/media/register-left.ae5efdee.png" style={{ width: 680, marginTop: 50, marginLeft: 50 }} />
                    </div>
                    <div className="col-6 pl-5" style={{paddingTop: 210, paddingLeft: 100}}>
                        
                            <FormGroup>
                                <Label for="textUsername">Username</Label>
                                <Input type="text" id="textEmail" placeholder="Input Username"
                                innerRef={(element) => this.usernameLogin = element}
                                />
                            </FormGroup>
                            <FormGroup>
                            <Label for="textPassword">Password</Label>
                            <InputGroup>
                                <Input type="password" id="textEmail" placeholder="Input Password"
                                    innerRef={(element) => this.passwordLogin = element}  type={this.state.passType}/>
                                <InputGroupText style={{ cursor: "pointer" }} onClick={this.showPass}>
                                    {this.state.passShow}
                                </InputGroupText>
                            </InputGroup>
                        </FormGroup>
                            <Button color="success" style={{color: "white"}} onClick={this.btLogin}>Login</Button>
                        
                    </div>
                </div>
                <div className="text-center">
                    <p>Don't Have an Account? <Link to="register-page"><a style={{color: "#157347"}}>Sign up here</a></Link></p>
                </div>
            </div>
        );
    }
}

const mapToProps = (state) => {
    return {
        iduser: state.userReducer.id,
        email:state.userReducer.email,
        username: state.userReducer.username
    }
}


export default  connect (mapToProps, {loginAction})(LoginPage);