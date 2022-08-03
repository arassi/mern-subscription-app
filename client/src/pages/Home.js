import Footer from "../component/Footer";
import Image from 'react-bootstrap/Image';
import Thumbnail from '../img/thumbnail.png';;

const Home = () => {

    return (
    <div>
        <div className="d-flex justify-content-center" style={{height: "90vh"}}>
            <div className="container align-items-center d-flex">
                <div className="row col-md-6 offset-md-3 text-center">
                    <h1 className="pt-5 fw-bold">"App Name"</h1>
                    <p className="lead pb-4">
                        Welcome!
                    </p>
                    <Image src={Thumbnail} alt="Middle Eatern Restaurant Picture" className='img-fluid rounded-pill'/>
                    <br/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default Home;