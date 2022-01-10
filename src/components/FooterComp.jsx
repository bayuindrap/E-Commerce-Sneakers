import React from "react";

class FooterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ padding: "3%", background: '#242424', marginTop: '4%' }}>
                <div className=' row' style={{ margin: 'auto' }}>
                    <div className='col-3 '>
                        <div>
                            <img src='https://i.postimg.cc/HLgJL7zk/kick-logo-white-315c73d2.png' style={{ width: '80%', marginLeft: -25, marginTop: -15 }} />
                            <p style={{ color: "white", fontWeight: "bold" }}>Shop Collectables.</p>
                            <p style={{ color: "#159953", fontWeight: "bold" }}>Authentic, Guaranteed.</p>
                        </div>
                    </div>
                        <div className="col-3">
                            <p style={{ fontWeight: 'bold', color: 'white' }}>FAQ</p>
                            <p style={{ fontWeight: 'bold', color: 'white' }}>Privacy Policy</p>
                            <p style={{ fontWeight: 'bold', color: 'white' }}>Buying Selling Guide</p>
                            <p style={{ fontWeight: 'bold', color: 'white' }}>Payment Confirmation</p>

                        </div>
                    <div className='col-3' style={{}}>
                        <div>
                            <p style={{ fontWeight: 'bold', color: 'white' }}>Explore us more on Instagram!</p>
                            <div className="row">

                                <p style={{ color: "white" }}> <img src="https://i.postimg.cc/sDF1mNQN/ig-streetwear-1b53b84e.png" style={{width: "25px"}}/> Kick Avenue 
                                <a style={{color: "#159953"}}> Streetwear</a></p>

                                <p style={{ color: "white" }}> <img src="https://i.postimg.cc/jdsYRHGj/ig-luxury-38457d92.png" style={{width: "25px"}}/> Kick Avenue 
                                <a style={{color: "#159953"}}> Luxury</a></p>

                                <p style={{ color: "white" }}> <img src="https://i.postimg.cc/ydq2tcms/ig-lifestyle-49bdba63.png" style={{width: "25px"}}/> Kick Avenue 
                                <a style={{color: "#159953"}}> Lifestyle</a></p>

                                
                            </div>
                        </div>
                    </div>
                    <div className='col-3 '>
                        <div style={{ color: 'white' }}>
                            <p style={{fontWeight: "bold"}}>Download Our App.</p>
                            <div className="row">
                                <img src="https://i.postimg.cc/05t12Mxd/googleplaywhite-d74633a9.png" style={{width: "90px"}}/>
                                <img src="https://i.postimg.cc/0NGLgrcS/appstorewhite-feea9f55.png" style={{width: "90px"}}/>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="col-12 d-flex-end" style={{backgroundColor: "#000000"}}>
                    <p style={{color: "white", margin: "auto"}}>Registered under PT. Karunia Internasional Citra Kencana</p>
                </div> */}
            </div>
        );
    }
}

export default FooterComponent;