import axios from "axios";
import React from "react";
import { Button, Form, FormGroup, Input, Label, InputGroupText, InputGroup, Toast, ToastHeader, ToastBody } from 'reactstrap';
import { loginAction } from "../redux/actions/userAction";
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { API_URL } from "../helper";

class AuthPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            form: "Login"
         }
    }
    render() { 
        return ( 
            <div className='container py-4' style={{position:'relative'}}>
            <div className='d-flex justify-content-end'>
                <Toast isOpen={this.state.toastOpen} style={{position:'fixed '}}>
                    <ToastHeader toggle={()=>this.setState({toastOpen:false})} icon={this.state.toastIcon}> {this.state.toastHeader} </ToastHeader>
                    <ToastBody> {this.state.toastBody} </ToastBody>
                </Toast>
            </div>
            <div className='d-md-flex row container py-4 mx-auto shadow' style={{backgroundColor:'black',borderRadius:20,position:'relative',marginTop:'10%'}}>
            <div className='m-auto text-center col-md-6'>
                <img src={logo} width='500'/>
            </div>
            <div className='col-md-6 py-4' style={{backgroundColor:'white',borderRadius:10}}>
                <div className='w-75' style={{margin:'auto'}}>
                {
                    this.state.head === 'Login' ?
                    <Form>
                    <h1 className='my-3' style={{color:'red'}}>{this.state.head}</h1>
                    <FormGroup>
                        <Label for="email">
                            Email
                        </Label>
                        <Input id="email" placeholder='email' innerRef={(e)=>this.emailLogin=e}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">
                            Password
                        </Label>
                        <InputGroup>
                        <Input id="password" placeholder='Password' innerRef={(e)=>this.passwordLogin=e} type={this.state.passType}/>
                        <InputGroupText style={{ cursor: "pointer" }} onClick={this.btShowPass}>
                                {this.state.passShow}
                        </InputGroupText>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <p style={{color:'red',fontSize:12,marginTop:0}}>{this.state.notifFail}</p>
                        <Button color='danger' type='button' onClick={this.onBtnLogin} style={{borderColor:'black'}}>Login</Button>
                    </FormGroup>
                    <FormGroup>
                        <p>Belum mempunyai akun? <a style={{color:'red',cursor:'pointer'}} onClick={()=>this.setState({head:'Register'})}>Daftar Sekarang</a></p>
                    </FormGroup>
                    </Form>
                    :
                    <Form>
                    <h1 className='my-3' style={{color:'red'}}>{this.state.head}</h1>
                    <FormGroup>
                        <Label for="username">
                            Username
                        </Label>
                        <Input id="username" placeholder='Username' innerRef={(e)=>this.usernameRegis=e}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">
                            Email
                        </Label>
                        <Input id="email" placeholder='email' innerRef={(e)=>this.emailRegis=e}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">
                            Password
                        </Label>
                        <InputGroup>
                        <Input id="password" placeholder='Password' innerRef={(e)=>this.passwordRegis=e} type={this.state.passType}/>
                        <InputGroupText style={{ cursor: "pointer" }} onClick={this.btShowPass}>
                                {this.state.passShow}
                        </InputGroupText>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="conf-password">
                            Konfirmasi Password
                        </Label>
                        <InputGroup>
                        <Input id="conf-password" placeholder='Password' onChange={(e)=>this.setState({confPass:e.target.value})} type={this.state.passTypeConf}/>
                        <InputGroupText style={{ cursor: "pointer" }} onClick={this.btShowPassConf}>
                                {this.state.passShowConf}
                        </InputGroupText>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <Button color='danger' type='button' onClick={this.onBtnDaftar} >Daftar</Button>
                    </FormGroup>
                    <FormGroup>
                        <p><a style={{color:'red',cursor:'pointer'}} onClick={()=>this.setState({head:'Login'})}>Login Page</a></p>
                    </FormGroup>
                </Form>

                    
                }
                </div>
            </div>
            </div>
        </div>
         );
    }
}
 
export default AuthPage;
