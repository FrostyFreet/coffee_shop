import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const color={color:"#DFE0E2"}
export default function Footer(){
    return (
        <>
            <footer className="pt-1 pb-1"
                    style={{backgroundColor: "#B7999C", bottom: 0, width: "100%"}}>
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-3 mx-auto mb-1">
                            <h6 className="text-uppercase font-weight-bold">Brewed Awakening</h6>
                            <hr className="bg-warning mb-1 mt-0 d-inline-block mx-auto"
                                style={{width: "60px", height: "2px"}}/>
                            <p style={{...color, fontSize: "0.8rem"}}>
                                At Brewed Awakening, we specialize in crafting exceptional coffee experiences, offering
                                artisan blends sourced from the finest farms.
                            </p>
                        </div>

                        <div className="col-md-2 mx-auto mb-1">
                            <h6 className="text-uppercase font-weight-bold">Links</h6>
                            <hr className="bg-warning mb-1 mt-0 d-inline-block mx-auto"
                                style={{width: "60px", height: "2px"}}/>
                            <ul className="list-unstyled">
                                <li><a href="#!" style={{...color, fontSize: "0.8rem"}}>About</a></li>
                                <li><a href="#!" style={{...color, fontSize: "0.8rem"}}>Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mx-auto mb-1">
                            <h6 className="text-uppercase font-weight-bold">Follow Us</h6>
                            <hr className="bg-warning mb-1 mt-0 d-inline-block mx-auto"
                                style={{width: "60px", height: "2px"}}/>
                            <div>
                                <a href="#!" className="me-2" style={color}><FaFacebookF/></a>
                                <a href="#!" className="me-2" style={color}><FaTwitter/></a>
                                <a href="#!" className="me-2" style={color}><FaInstagram/></a>
                                <a href="#!" className="me-2" style={color}><FaLinkedin/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center py-1">
                    <p style={{...color, fontSize: "0.8rem"}}>© {new Date().getFullYear()} Brewed Awakening. All rights
                        reserved.</p>
                </div>
            </footer>
        </>
    )

}