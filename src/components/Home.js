import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-black ">
                <div className="container">
                    <a className="navbar-brand" href="/Home">
                    <img className='Rounded-pill' src="https://tse1.mm.bing.net/th?id=OIP.e_2DPjwaOIBr57BEjPGTQAHaGj&pid=Api&P=0&h=220" alt="Avatar Logo" style={{ width: '80px', borderRadius: '60%' }} />
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ">
                            <Link className='nav-link text-white' to='/Home'>Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link text-white' to='/Destinations'>Destinations</Link>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link text-white' to='/Aboutus'>About us</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link text-white' to='/Login'>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-5">
                <div className='container-fluid p-4 bg-primary rounded'>
                <h1 className="text-center text-white p-5" >SELAMAT DATANG </h1>
                <p className="text-center text-white p-3">Eksplor kemana saja yang kamu mau, dimana pun , dan kapan pun, dengan harga yang terjangkau dan fitur yang memukau!</p>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://tse3.mm.bing.net/th?id=OIP.BAV9nZg7H6w-c4_FiISQjAHaE7&pid=Api&P=0&h=220" className="card-img-top" alt="Destination 1" />
                            <div className="card-body">
                                <h5 className="card-title">Tanah Lot</h5>
                                <p className="card-text">Tanah Lot adalah salah satu pura laut terkenal di Bali, Indonesia, yang terkenal dengan pemandangannya yang menakjubkan, terutama saat matahari terbenam. Pura ini terletak di atas batu besar yang berada di lepas pantai dan menjadi salah satu ikon pariwisata di Bali. Tanah Lot juga merupakan tempat yang penting bagi umat Hindu untuk berdoa dan melakukan ritual.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://cdn.generationvoyage.fr/2023/05/visiter-raja-ampat-indonesie.jpg" className="card-img-top" alt="Destination 2" />
                            <div className="card-body">
                                <h5 className="card-title">Raja Ampat</h5>
                                <p className="card-text">Raja Ampat adalah kepulauan yang terletak di Papua Barat, Indonesia. Terkenal sebagai salah satu destinasi menyelam terbaik di dunia, Raja Ampat memiliki keanekaragaman hayati laut yang luar biasa. Terumbu karang yang indah, air yang jernih, dan berbagai jenis ikan serta biota laut lainnya membuat Raja Ampat menjadi surga bagi para penyelam dan pecinta alam.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.o2seoNF8H76hTZ_bXHD-ygHaE8&pid=Api&P=0&h=220" className="card-img-top" alt="Destination 3" />
                            <div className="card-body">
                                <h5 className="card-title">Danau Toba</h5>
                                <p className="card-text">Danau Toba adalah danau vulkanik terbesar di dunia yang terletak di Sumatera Utara, Indonesia. Danau ini memiliki panjang sekitar 100 kilometer dan lebar sekitar 30 kilometer. Di tengah-tengah Danau Toba terdapat Pulau Samosir, yang juga merupakan destinasi wisata populer. Danau Toba menawarkan pemandangan alam yang indah dan  air yang jernih</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;