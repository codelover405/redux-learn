import React from 'react'
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade mb-2" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/500x150/?game" className="d-block w-100" alt="1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/500x150/?Tv" className="d-block w-100" alt="2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/500x150/?laptop" className="d-block w-100" alt="3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Footer about={"About"} />
        </>
    )
}

export default Home
